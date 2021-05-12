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
const users_dao_1 = __importDefault(require("../daos/users.dao"));
const en_json_1 = __importDefault(require("../../../common/locales/en.json"));
const responseData_1 = __importDefault(require("../../../common/helper/responseData"));
const log = debug_1.default('app:users-service');
class UsersService {
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield users_dao_1.default.addUser(userData);
            return new responseData_1.default(200, true, { data }, en_json_1.default.ADD_SUCCESS);
        });
    }
    usersList(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield users_dao_1.default.getUsers();
            return new responseData_1.default(200, true, { list }, "FETCH_USERS_SUCCESS", request);
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLGtFQUF5QztBQUN6Qyw4RUFBcUQ7QUFDckQsdUZBQStEO0FBRS9ELE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFlBQVk7SUFDUixNQUFNLENBQUMsUUFBYTs7WUFFdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxPQUFPLElBQUksc0JBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsaUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsT0FBWTs7WUFDeEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxzQkFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUM5RSxDQUFDO0tBQUE7Q0FDSjtBQUdELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==