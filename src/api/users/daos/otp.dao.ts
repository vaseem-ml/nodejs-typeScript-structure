import debug from 'debug';
import { createOtpDto } from '../dto/otp.dto';
import mongooseService from '../../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:users-dao');

class OtpDao {
    Schema = mongooseService.getMongoose().Schema;

    OtpSchema = new this.Schema({
        otp: Number,
        mobile: Number,
        email: String,
    }, {timestamps: true});


    Otp = mongooseService.getMongoose().model('Otp', this.OtpSchema);

    constructor() {
        log("Created New Instance of OtpDaos")
    }


    async addOtp(otpFields: createOtpDto) {
        const otp = new this.Otp({
            ...otpFields
        });
        await otp.save();
        return otp;
    };

}

export default new OtpDao;