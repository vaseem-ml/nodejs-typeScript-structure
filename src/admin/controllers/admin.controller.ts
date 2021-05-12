import express from 'express';
import debug from 'debug';
import adminServices from '../services/admin.services';
import { Controller, Route, Get, Post, Request, Tags, Header, Security, Hidden } from 'tsoa';

const log: debug.IDebugger = debug('app:admin-controller');

@Route()
@Tags("Admin")
export class adminController extends Controller {

    @Get()
    //@Hidden()

    @Security('api_key', [])
    //@Security('auth0')
    public async adminHome(
        @Request() request: express.Request,
      //  @Header('x-access-token') authentication: string,
        @Header('accept-language') language: string,
      //  @Header('api-ver') apiVer: string
        ) {
            const response = (<any>request).res as express.Response;
            return await adminServices.adminHomeService(request, response);
    }

   
}