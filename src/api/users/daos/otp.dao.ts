import debug from 'debug';
import { createOtpDto } from '../dto/otp.dto';
import mongooseService from '../../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:users-dao');

class OtpDao {
    Schema = mongooseService.getMongoose().Schema;

    OtpSchema = new this.Schema({
        otp: Number,
        mobile: Number,
    }, {timestamps: true});


    Otp = mongooseService.getMongoose().model('Otp', this.OtpSchema);

    constructor() {
        log("Created New Instance of OtpDaos")
    }


    async addOtp(otpFields: createOtpDto) {
        try{
            const otp = new this.Otp({
                ...otpFields
            });
            await otp.save();
            return otp;
        }catch(e) {
            console.log(e);
        }
    };

    async findOtp(otp: number) {
        try{
            
            return this.Otp.count({otp: otp});

        }catch(e) {
            console.log(e);
        }
    }

}

export default new OtpDao;