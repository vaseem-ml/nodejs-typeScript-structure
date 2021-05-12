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
    tsoa_1.Post("/users"),
    __param(0, tsoa_1.Body())
], usersController.prototype, "createUser", null);
__decorate([
    tsoa_1.Get("/users")
    // @Tags("User List")
    ,
    tsoa_1.Security('api_token'),
    __param(0, tsoa_1.Request())
], usersController.prototype, "getList", null);
usersController = __decorate([
    tsoa_1.Route('/api'),
    tsoa_1.Tags("Users API")
], usersController);
exports.usersController = usersController;
//export default new usersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsZ0ZBQXVEO0FBQ3ZELCtCQUErSDtBQVUvSCxNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFJM0QsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBVTtJQUMzQzs7O01BR0U7SUFHVyxVQUFVO0lBQ25CLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ3pCLFdBQWlCOztZQUV6QixPQUFRLE1BQU0sd0JBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEQsQ0FBQztLQUFBO0lBR0UsZ0JBQWdCO0lBS0gsT0FBTyxDQUNULE9BQXdCO0lBRWxDLDhCQUE4Qjs7O1lBRzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQTtZQUN6RCxPQUFPLE1BQU0sd0JBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQXhCRztJQUZDLFdBQUksQ0FBQyxRQUFRLENBQUM7SUFNVixXQUFBLFdBQUksRUFBRSxDQUFBO2lEQUdiO0FBUUU7SUFKQyxVQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2QscUJBQXFCOztJQUNwQixlQUFRLENBQUMsV0FBVyxDQUFDO0lBR3JCLFdBQUEsY0FBTyxFQUFFLENBQUE7OENBT1Q7QUE5QlEsZUFBZTtJQUYzQixZQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2IsV0FBSSxDQUFDLFdBQVcsQ0FBQztHQUNMLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlO0FBa0M1Qix1Q0FBdUMifQ==