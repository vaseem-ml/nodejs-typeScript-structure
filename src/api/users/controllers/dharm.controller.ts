import express from 'express';
import debug from 'debug';
import dharmServices from '../services/dharm.services';
import { createDharmDto } from '../dto/dharm.dto';
import { Controller, Route, Post, Get, Tags,  Body, Request, Header } from 'tsoa';

const log: debug.IDebugger = debug('app:dharm-controller');


@Route('/api/dharm')
@Tags('Dharm API')
export class dharmController extends Controller {


    @Post()
    public async createDharm(
        @Body() body: createDharmDto,
        @Request() request: express.Request,
        @Header('accept-language') language: string
    ) {
        return await dharmServices.create(body, request);
    }


    @Get()
    public async list(
        @Request() request: express.Request,
        @Header('accept-language') language: string

    ) {
        return await dharmServices.dharmsList(request);

    }
}