import Joi from 'joi';
import ResponseData from '../helper/responseData';

class BodyValidationMiddleware {
    schema = Joi.object({
        email: Joi.string()
            .email({minDomainSegments: 2, tlds: { allow: ['com', 'net']}})  
    });


    async validateEmail(body:any) {
         try{
            const { email } = body;
            const value = await this.schema.validateAsync({email: email});
            return {success: true, msg: "Validation Success"}
        }catch(e) {
            return new ResponseData({
                status: 400,
                success: false,
                msgTitle: "EMAIL_ERROR"
            })
        }

    }
}


export default new BodyValidationMiddleware();