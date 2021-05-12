import debug from 'debug';
import otpDao from '../daos/otp.dao';
import { createOtpDto } from '../dto/otp.dto';
import httpStatus from 'http-status-codes';
import ResponseData from '../../../common/helper/responseData';

const log: debug.IDebugger = debug('app:users-service');

class UsersService {
    async create(otpData: createOtpDto, request: any) {
        const otp = Math.floor(Math.random() * (9 * 1000)) + 1000;
        otpData.otp = otp;
        const data = await otpDao.addOtp(otpData);
        return new ResponseData(httpStatus.OK, true, {}, "OTP_CREATED_SUCCESS", request)
    }
}


export default new UsersService();