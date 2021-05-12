import { CommonRoutesConfig } from '../../common/common.routes.config';
import express from 'express';
import { body, query } from 'express-validator';
import BodyValidationMiddleware from '../../common/middleware/body.validation.middleware';
//import usersController from './controllers/users.controller'

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes() {

        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of All Users')
            })
            .post(
                query('email').isEmail(),
                query('password').isLength({min: 5}).withMessage("Password should be greater than 5 characters"),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
               // usersController.createUser


            )      
        
        this.app.route('/users/:userId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.userId}`);
            })
        

        return this.app;
    }
}