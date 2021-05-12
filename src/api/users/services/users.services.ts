import debug from 'debug';
import httpStatus from 'http-status-codes';
import usersDao from '../daos/users.dao';
import message from '../../../common/locales/en.json'
import ResponseData from '../../../common/helper/responseData';

const log: debug.IDebugger = debug('app:users-service');

class UsersService {
    async create(userData: any) {
        
        const data = await usersDao.addUser(userData);
        return new ResponseData(httpStatus.CREATED, true, {data}, message.ADD_SUCCESS);
    }

    async usersList(request: any) {
        console.log('listening in usere list');
        const list = await usersDao.getUsers();
        return new ResponseData(httpStatus.OK, true, {list}, "FETCH_USERS_SUCCESS", request)
    }
}


export default new UsersService(); 