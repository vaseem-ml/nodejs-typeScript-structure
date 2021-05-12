"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const swaggerUi = __importStar(require("swagger-ui-express"));
const debug_1 = __importDefault(require("debug"));
require('dotenv').config();
const app = express_1.default();
const server = http.createServer(app);
const routes = [];
const debugLog = debug_1.default('app');
//import './src/users/controllers/users.controller'
const routes_1 = require("./src/routes");
// here we are adding middleware to parse all incoming requests as JSON 
app.use(express_1.default.json());
// here we are adding middleware to allow cross-origin requests
app.use(cors_1.default());
routes_1.RegisterRoutes(app);
try {
    const swaggerDocument = require('../swagger.json');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
catch (err) {
    console.error('Unable to read swagger.json', err);
}
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
// here we are crashing on unhandled errors and spitting out a stack trace,
// but only when in debug mode
if (process.env.DEBUG) {
    process.on('unhandledRejection', function (reason) {
        debugLog('Unhandled Rejection:', reason);
        process.exit(1);
    });
}
else {
    loggerOptions.meta = false; // when not debugging, make terse
}
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
//routes.push(new UserRoutes(app));
//error handling for tsoa
// app.use(function errorHandler(
//     err: unknown,
//     req: ExRequest,
//     res: ExResponse,
//     next: NextFunction
//   ): ExResponse | void {
//     if (err instanceof ValidateError) {
//       console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
//       return res.status(422).json({
//         message: "Validation Failed",
//         details: err?.fields,
//       });
//     }
//     if (err instanceof Error) {
//       return res.status(500).json({
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
    console.log('server listening on', port);
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUltQjtBQUNuQiwyQ0FBNkI7QUFFN0IsaURBQW1DO0FBQ25DLGdFQUFrRDtBQUNsRCxnREFBd0I7QUFHeEIsOERBQWdEO0FBQ2hELGtEQUEwQjtBQUMxQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsTUFBTSxHQUFHLEdBQU8saUJBQU8sRUFBRSxDQUFDO0FBQzFCLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sTUFBTSxHQUErQixFQUFFLENBQUM7QUFDOUMsTUFBTSxRQUFRLEdBQW9CLGVBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxtREFBbUQ7QUFDbkQseUNBQThDO0FBSzlDLHdFQUF3RTtBQUN4RSxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QiwrREFBK0Q7QUFDL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLHVCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFHcEIsSUFBSTtJQUNILE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0NBQ3BFO0FBQUMsT0FBTyxHQUFHLEVBQUU7SUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ2xEO0FBRUQsNkVBQTZFO0FBQzdFLHVFQUF1RTtBQUN2RSxNQUFNLGFBQWEsR0FBaUM7SUFDaEQsVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDekM7Q0FDSixDQUFDO0FBU0YsMkVBQTJFO0FBQzNFLDhCQUE4QjtBQUM5QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0lBQ25CLE9BQU8sQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxNQUFNO1FBQzVDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0NBQ047S0FBTTtJQUNILGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsaUNBQWlDO0NBQ2hFO0FBRUQscURBQXFEO0FBQ3JELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBRTlDLGtEQUFrRDtBQUNsRCx1RkFBdUY7QUFDdkYsbUNBQW1DO0FBR25DLHlCQUF5QjtBQUN6QixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQiwwQ0FBMEM7QUFDMUMsOEVBQThFO0FBQzlFLHNDQUFzQztBQUN0Qyx3Q0FBd0M7QUFDeEMsZ0NBQWdDO0FBQ2hDLFlBQVk7QUFDWixRQUFRO0FBQ1Isa0NBQWtDO0FBQ2xDLHNDQUFzQztBQUN0Qyw0Q0FBNEM7QUFDNUMsWUFBWTtBQUNaLFFBQVE7QUFFUixjQUFjO0FBQ2QsUUFBUTtBQUlSLCtCQUErQjtBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU5QixxRUFBcUU7QUFDckUsa0VBQWtFO0FBQ2xFLDBDQUEwQztBQUMxQyxNQUFNO0FBRU4sTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDMUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFHdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDeEMsUUFBUSxDQUFDLHNDQUFzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7UUFDekMsUUFBUSxDQUFDLHlCQUF5QixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxHQUFHLENBQUMifQ==