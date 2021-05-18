import express from 'express';
import debug from 'debug';
import jaatiServices from '../services/jaati.services';
import { createJaatiDto } from '../dto/jaati.dto';
import { Controller, Route, Post, Get, Tags,  Body, Request, Header } from 'tsoa';

const log: debug.IDebugger = debug('app:dharm-controller');


@Route('/api/jaati')
@Tags('Jaati API')
export class jaatiController extends Controller {

    @Post()
    public async createJaati(
        @Body() body: createJaatiDto,
        @Request() request: express.Request,
        @Header('accept-language') language: string
    ) {
        console.log('listening on jaati controller')
        return await jaatiServices.create(body, request);
    }
}