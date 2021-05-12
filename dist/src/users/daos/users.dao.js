"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const shortid_1 = __importDefault(require("shortid"));
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const log = debug_1.default('app:users-dao');
class UserDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.UserSchema = new this.Schema({
            _id: String,
            email: String,
            password: String,
            firstName: String,
            lastName: String,
        }, { id: false });
        this.User = mongoose_service_1.default.getMongoose().model('Users', this.UserSchema);
        log("Created New Instance of UserDao");
    }
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign({ _id: userId }, userFields));
            yield user.save();
            return userId;
        });
    }
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
}
exports.default = new UserDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXJzL2Rhb3MvdXNlcnMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLHNEQUE4QjtBQUU5Qiw4RkFBcUU7QUFHckUsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVwRCxNQUFNLE9BQU87SUFhVDtRQVpBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUU5QyxlQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEdBQUcsRUFBRSxNQUFNO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsTUFBTTtZQUNqQixRQUFRLEVBQUUsTUFBTTtTQUNuQixFQUFFLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFFaEIsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHakUsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUdLLE9BQU8sQ0FBQyxVQUF5Qjs7WUFDbkMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLGlCQUN0QixHQUFHLEVBQUUsTUFBTSxJQUNSLFVBQVUsRUFDZixDQUFDO1lBQ0gsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEtBQUssR0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFDLENBQUM7O1lBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7aUJBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7aUJBQ2hCLElBQUksRUFBRSxDQUFBO1FBQ2YsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxJQUFJLE9BQU8sQ0FBQyJ9