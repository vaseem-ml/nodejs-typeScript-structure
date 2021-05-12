

class ResponseData {
    status ?: any;
    success ?: any;
    result: any;
    msg: any;

    
    constructor(status:any=200, success:boolean=true, result:any={}, msgTitle: string="", request: any= "") {
        let lang = request.headers['accept-language'] || 'en'
        const en  = require('../locales/'+lang+'.json')
        this.status = status;
        this.success = success;
        this.result = result;
        this.msg = en[msgTitle]
    }
}


export default ResponseData;