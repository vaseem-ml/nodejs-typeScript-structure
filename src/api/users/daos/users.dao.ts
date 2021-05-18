import debug from 'debug';
import shortid from 'shortid';
import { CreateUserDto } from '../dto/create.user.dto'
import mongooseService from '../../../common/services/mongoose.service';


const log: debug.IDebugger = debug('app:users-dao');

class UserDao {
    Schema = mongooseService.getMongoose().Schema;

    UserSchema = new this.Schema({
        _id: String,
        email: String,
        password: String,
        firstName: String,
        lastName: String,
    }, {id: false});

    User = mongooseService.getMongoose().model('Users', this.UserSchema);

    constructor() {
        log("Created New Instance of UserDao")
    }


    async addUser(userFields: CreateUserDto) {
        try{
            const userId = shortid.generate();
            const user = new this.User({
                _id: userId,
                ...userFields
            });
            await user.save();
            return userId;
        }catch(e) { 
            console.log("error", e);
        }
    }

    async getUsers(limit=25, page=0) {
        return this.User.find()
            .limit(limit)
            .skip(limit*page)
            .exec()
    }

}

export default new UserDao;