import otpDao from '../../api/users/daos/otp.dao';


class Helper {
    async otpGenerate(userData:any) {
        var mode = process.env.mode;
        if(mode=='production') {
            var otp = Math.floor(Math.random() * (9 * 100000)) + 100000;
            var count = await otpDao.findOtp(otp);
            if(count) {
                this.otpGenerate(userData);
            }
            userData.otp = otp;
            var data = await otpDao.addOtp(userData);
        } else {
            var otp = 123456;
            userData.otp = otp;
            var data = await otpDao.addOtp(userData);
        }

       return data;
    }
}

export default new Helper;