import debug from 'debug';
import httpStatus from 'http-status-codes';
import usersDao from '../daos/users.dao';
import message from '../../../common/locales/en.json';
import ResponseData from '../../../common/helper/responseData';

const log: debug.IDebugger = debug('app:users-service');

class UsersService {
    async create(userData: any) {
        try{
            const data = await usersDao.addUser(userData);
            return new ResponseData({
                result: {},
                msgTitle: "ADD_SUCCESS",
            });
            
        }catch(e) {
            console.log('error', e);
        }
       
    }

    async usersList(request: any) {
        try{
            const list = await usersDao.getUsers();
            return new ResponseData({
                result: {list},
                request: request
            });

        }catch(e) {
            console.log('error', e);
        }
        
    }
}


export default new UsersService(); 