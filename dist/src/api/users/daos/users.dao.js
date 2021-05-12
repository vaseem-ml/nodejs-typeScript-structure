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
const mongoose_service_1 = __importDefault(require("../../../common/services/mongoose.service"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS91c2Vycy9kYW9zL3VzZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQixzREFBOEI7QUFFOUIsaUdBQXdFO0FBR3hFLE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFcEQsTUFBTSxPQUFPO0lBYVQ7UUFaQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUUsTUFBTTtZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLE1BQU07WUFDakIsUUFBUSxFQUFFLE1BQU07U0FDbkIsRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRWhCLFNBQUksR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBR2pFLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFHSyxPQUFPLENBQUMsVUFBeUI7O1lBQ25DLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxpQkFDdEIsR0FBRyxFQUFFLE1BQU0sSUFDUixVQUFVLEVBQ2YsQ0FBQztZQUNILE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxLQUFLLEdBQUMsRUFBRSxFQUFFLElBQUksR0FBQyxDQUFDOztZQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2lCQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDO2lCQUNoQixJQUFJLEVBQUUsQ0FBQTtRQUNmLENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxPQUFPLENBQUMifQ==