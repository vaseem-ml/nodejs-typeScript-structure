import express from 'express';
import debug from 'debug';
import otpServices from '../services/otp.services';
import { createOtpDto } from '../dto/otp.dto';
import { Controller, Route, Post, Body, Request, Header } from 'tsoa'

const log: debug.IDebugger = debug('app:otp-controller');


@Route('/api/otp')
export class otpController extends Controller {

    @Post()
    public async createOtp(
        @Body() body: createOtpDto,
        @Request() request: express.Request,
        @Header('accept-language') language: string,
        
    ) {
        return await otpServices.create(body, request);
    }
}