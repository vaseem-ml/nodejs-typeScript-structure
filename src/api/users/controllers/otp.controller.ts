import express from 'express';
import debug from 'debug';
import otpServices from '../services/otp.services';
import { createOtpDto, mobileNumber } from '../dto/otp.dto';
import { Controller, Route, Post, Body, Request, Header, Tags } from 'tsoa'

const log: debug.IDebugger = debug('app:otp-controller');


@Route('/api/otp')
@Tags('OTP api')
export class otpController extends Controller {

    @Post()
    public async createOtp(
        @Body() body: mobileNumber,
        @Request() request: express.Request,
        @Header('accept-language') language: string,
        
    ) {
        console.log('listening in controller')
        return await otpServices.create(body, request);
    }
}