import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Application, NextFunction, Request, Response } from 'express';
import ws from 'ws';
import { config } from './config';
import { log } from './logger';
import { runInNewContext } from 'vm';

class Stream {
	public write(text: string) {
		log.info(text);
	}
}

function errorHandler(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) {
	log.error(err);
	res.status(500).json({ error: err }).end();
}

export class Server {
	private app: Application;

	private wsServer: ws.Server | null = null;

	constructor() {
		const app = express();
		app.use(morgan('combined', { stream: new Stream() }));
		app.use(compression());
		app.use(
			helmet.contentSecurityPolicy({
				directives: {
					defaultSrc: [`'self'`],
					connectSrc: [`'self'`],
				},
			})
		);
		app.use(cors());
		app.use(cookieParser());
		app.use(bodyParser.json());

		app.get('/', (req, res) => {
			res.json({ message: 'Hello' });
		});

		app.use(errorHandler);

		this.app = app;
	}

	public listen() {
		const server = this.app.listen(config.port, () => {
			log.info(`LISTENING at http://localhost:${config.port}`);
		});
		this.wsServer = new ws.Server({ server });
		this.wsServer.on('connection', (client: WebSocket) => {
			log.info('Client Connected');
			client.onmessage = (e: MessageEvent) => {
				client.send(e.data);
				log.info('Message Received');
			};
		});
	}
}
