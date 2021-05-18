import debug from 'debug';
import jaatiDaos from '../daos/jaati.dao';
import Helper from '../../../common/helper/helper';
import { createJaatiDto } from '../dto/jaati.dto';
import httpStatus from 'http-status-codes';
import ResponseData from '../../../common/helper/responseData';

const log: debug.IDebugger = debug('app:users-service');

class DharmServices {
    async create(resources: any, request: any) {
        try{
            const data = await jaatiDaos.addJaati(resources);
            return new ResponseData({
                status: httpStatus.OK,
                msgTitle: "ADD_JAATI",
                request: request
            });
        }catch(e) {
            console.log('eror', e);
        }
        
    }
}


export default new DharmServices();