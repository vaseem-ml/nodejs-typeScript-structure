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
const log = debug_1.default('app:users-service');
class UsersService {
    adminHomeService(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('this is response', response);
            // response.json({success: true})
            //return new ResponseData(200, true, {}, "FETCH_USERS_SUCCESS", request)
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRtaW4vc2VydmljZXMvYWRtaW4uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxrREFBMEI7QUFHMUIsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sWUFBWTtJQUVSLGdCQUFnQixDQUFDLE9BQVksRUFBRSxRQUFhOztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzFDLGlDQUFpQztZQUNoQyx3RUFBd0U7UUFDNUUsQ0FBQztLQUFBO0NBQ0o7QUFHRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=