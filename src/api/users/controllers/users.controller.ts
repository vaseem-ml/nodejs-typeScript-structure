import express from 'express';
import debug from 'debug';
import Joi from 'joi';
import usersServices from '../services/users.services';
import { Controller, Route, Get, Post, BodyProp, Put, Path, Query, Security, Body, Header, Tags, Request } from 'tsoa';
import bodyValidationMiddleware from '../../../common/middleware/body.validation.middleware';

export interface User {
    email: string; 
    firstName: string; 
    lastName: string,
    password: string,
  } 


const log: debug.IDebugger = debug('app:users-controller');

@Route('/api')
@Tags("Users API")
export class usersController extends Controller {  
    /**
    * Retrieves the details of an existing user.
    * Supply the unique user ID from either and receive corresponding user details.
    */
   // @Security("jwt", ["admin"])
    @Post("/users")
  //  @Tags("User Post")
    public async createUser(
        // @Path() id: number,
        // @Query() name?: string,
        // @Query() designation?: string,
        @Body() requestBody: User,
    )  {
       
        const validate = await bodyValidationMiddleware.validateEmail(requestBody);
        if(validate.success) {
            return  await usersServices.create(requestBody)
        } else {
            return validate;
        }

	}


    //get users list
    @Get("/users")
    // @Tags("User List")
    @Security('api_key', [])
    public async getList(
    @Request() request: express.Request,
    @Header('accept-language') language: string,
    ) {

        return await usersServices.usersList(request);
    }
}


//export default new usersController();



