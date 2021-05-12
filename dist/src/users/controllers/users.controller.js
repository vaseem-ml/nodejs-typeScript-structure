"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.usersController = void 0;
const debug_1 = __importDefault(require("debug"));
const users_services_1 = __importDefault(require("../services/users.services"));
const tsoa_1 = require("tsoa");
const log = debug_1.default('app:users-controller');
let usersController = class usersController extends tsoa_1.Controller {
    /**
    * Retrieves the details of an existing user.
    * Supply the unique user ID from either and receive corresponding user details.
    */
    createUser(
    // @Path() id: number,
    // @Query() name?: string,
    // @Query() designation?: string,
    requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_services_1.default.create(requestBody);
        });
    }
    //get users list
    getList(request
    //   @Header() header: string,
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('now you hit in controller tranfer function');
            return yield users_services_1.default.usersList(request);
        });
    }
};
__decorate([
    tsoa_1.Post(),
    __param(0, tsoa_1.Body())
], usersController.prototype, "createUser", null);
__decorate([
    tsoa_1.Get()
    // @Tags("User List")
    ,
    tsoa_1.Security('api_token'),
    __param(0, tsoa_1.Request())
], usersController.prototype, "getList", null);
usersController = __decorate([
    tsoa_1.Route('/users'),
    tsoa_1.Tags("Users API")
], usersController);
exports.usersController = usersController;
//export default new usersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91c2Vycy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUUxQixnRkFBdUQ7QUFDdkQsK0JBQStIO0FBVS9ILE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUkzRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGlCQUFVO0lBQzNDOzs7TUFHRTtJQUdXLFVBQVU7SUFDbkIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDekIsV0FBaUI7O1lBRXpCLE9BQVEsTUFBTSx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0RCxDQUFDO0tBQUE7SUFHRSxnQkFBZ0I7SUFLSCxPQUFPLENBQ1QsT0FBd0I7SUFFbEMsOEJBQThCOzs7WUFHM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1lBQ3pELE9BQU8sTUFBTSx3QkFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBeEJHO0lBRkMsV0FBSSxFQUFFO0lBTUYsV0FBQSxXQUFJLEVBQUUsQ0FBQTtpREFHYjtBQVFFO0lBSkMsVUFBRyxFQUFFO0lBQ04scUJBQXFCOztJQUNwQixlQUFRLENBQUMsV0FBVyxDQUFDO0lBR3JCLFdBQUEsY0FBTyxFQUFFLENBQUE7OENBT1Q7QUE5QlEsZUFBZTtJQUYzQixZQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2YsV0FBSSxDQUFDLFdBQVcsQ0FBQztHQUNMLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlO0FBa0M1Qix1Q0FBdUMifQ==