import express from 'express';

class ResponseData {
    status : number;
    success: boolean;
    result : any;
    msgTitle: string;
    request: any;
    constructor({status=200, success=true, result= {}, msgTitle="QUERY_SUCCESS", request=express.request}) {
        let lang:any = 'en';
        request!=null && request.headers!=undefined ? (lang = request.headers['accept-language']) || 'en' :"";
        const en  = require('../locales/'+lang+'.json')
        this.status = status,
        this.success=success,
        this.result= result,
        this.msgTitle= en[msgTitle]
    }
}


export default ResponseData