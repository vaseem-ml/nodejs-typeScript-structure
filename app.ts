import express, {
    Response as ExResponse,
    Request as ExRequest,
    NextFunction,
  } from "express";
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
//import {CommonRoutesConfig} from './src/common/common.routes.config';
import {UserRoutes} from './src/api/users/users.routes.config';
import * as swaggerUi from 'swagger-ui-express';
import debug from 'debug';
import httpStatus from 'http-status-codes';
require('dotenv').config();

const app:any = express();
const server: http.Server = http.createServer(app);
//const routes:  Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');
//import './src/users/controllers/users.controller'
import { RegisterRoutes } from './src/routes';
import { ValidateError } from "tsoa";



// here we are adding middleware to parse all incoming requests as JSON 
app.use(express.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());

RegisterRoutes(app);


try {
	const swaggerDocument = require('./swagger.json');
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
	console.error('Unable to read swagger.json', err);
}

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};








// here we are crashing on unhandled errors and spitting out a stack trace,
// but only when in debug mode
if (process.env.DEBUG) {
    process.on('unhandledRejection', function(reason) {
        debugLog('Unhandled Rejection:', reason);  
        process.exit(1);
    });
} else {
    loggerOptions.meta = false; // when not debugging, make terse
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
//routes.push(new UserRoutes(app));

// catch 404 and forward to error handler
app.use(function notFoundHandler(_req:any, res: ExResponse) {
    res.status(404).send({
      message: "Not Found",
    });
  });

//error handling for tsoa
// app.use(function errorHandler(
//     err: unknown,
//     req: ExRequest,
//     res: ExResponse,
//     next: NextFunction
//   ): ExResponse | void {
//     if (err instanceof ValidateError) {
//       console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
//       return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
//         message: "Validation Failed",
//         details: err?.fields,
//       });
//     }
//     if (err instanceof Error) {
//       return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
//         message: "Internal Server Error",
//       });
//     }
  
//     next();
//   });



// Set EJS as templating engine
app.set('view engine', 'ejs');

// this is a simple route to make sure everything is working properly
// app.get('/', (req: express.Request, res: express.Response) => {
//     res.render('home', {page: "admin"})
// });

const port = parseInt(process.env.PORT || '', 10) || 3001;
app.set('port', port);


server.listen(port, () => {
    console.log('server listening on', port)
    debugLog(`Server running at http://localhost:${port}`);
    // routes.forEach((route: CommonRoutesConfig) => {
    //     debugLog(`Routes configured for ${route.getName()}`);
    // });
});

export default app;


