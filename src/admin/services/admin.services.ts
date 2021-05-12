import express from 'express';
import path from 'path';
const app:any = express();
// app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views')]);
import ejs from 'ejs';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);
import debug from 'debug';
import ResponseData from '../../common/helper/responseData';

const log: debug.IDebugger = debug('app:users-service');

class UsersService {
    
    async adminHomeService(request: any, res: any) {
        return res.render("home", {page: 'admin'})
    }
}


export default new UsersService();