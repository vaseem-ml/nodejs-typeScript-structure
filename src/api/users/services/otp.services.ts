import debug from 'debug';
import otpDao from '../daos/otp.dao';
import Helper from '../../../common/helper/helper';
import { createOtpDto, mobileNumber } from '../dto/otp.dto';
import httpStatus from 'http-status-codes';
import ResponseData from '../../../common/helper/responseData';

const log: debug.IDebugger = debug('app:users-service');

class UsersService {
    async create(resources: any, request: any) {
        try{
            const data = await Helper.otpGenerate(resources);
            return new ResponseData({
                status: httpStatus.OK,
                msgTitle: "OTP_CREATED_SUCCESS",
                request: request
            });
        }catch(e) {
            console.log('error', e);
        }
        
    }
}


export default new UsersService();