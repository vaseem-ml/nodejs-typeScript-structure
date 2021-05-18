import debug from 'debug';
import dharmDaos from '../daos/dharm.dao';
import Helper from '../../../common/helper/helper';
import { createDharmDto } from '../dto/dharm.dto';
import httpStatus from 'http-status-codes';
import ResponseData from '../../../common/helper/responseData';

const log: debug.IDebugger = debug('app:users-service');

class DharmServices {
    async create(resources: any, request: any) {
        try{
            const data = await dharmDaos.addDharm(resources);
            return new ResponseData({
                status: httpStatus.OK,
                msgTitle: "ADD_DHARM",
                request: request
            });
        }catch(e) {
            console.log('errror', e);
        }
        
    }

    async dharmsList(request: any) {
        try{
            const data = await dharmDaos.getDharmList();
            return new ResponseData({
                status: httpStatus.OK,
                msgTitle: "FETCH_DHARM_SUCCESS",
                request: request
            });
        }catch(e) {
            console.log('error', e);
        }
        
    }
}


export default new DharmServices();