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
exports.adminController = void 0;
const express_1 = require("express");
const debug_1 = __importDefault(require("debug"));
const admin_services_1 = __importDefault(require("../services/admin.services"));
const tsoa_1 = require("tsoa");
const log = debug_1.default('app:admin-controller');
let adminController = class adminController extends tsoa_1.Controller {
    adminHome(request, 
    // @Header('x-access-token') authentication: string,
    language) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield admin_services_1.default.adminHomeService(request, express_1.response);
        });
    }
};
__decorate([
    tsoa_1.Get(),
    tsoa_1.Response(422, "Validation Failed"),
    __param(0, tsoa_1.Request()),
    __param(1, tsoa_1.Header('accept-language'))
], adminController.prototype, "adminHome", null);
adminController = __decorate([
    tsoa_1.Route(),
    tsoa_1.Tags("Admin")
], adminController);
exports.adminController = adminController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb250cm9sbGVycy9hZG1pbi5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE0QztBQUM1QyxrREFBMEI7QUFDMUIsZ0ZBQXVEO0FBQ3ZELCtCQUEyRjtBQUUzRixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFJM0QsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBVTtJQUk5QixTQUFTLENBQ1AsT0FBd0I7SUFDcEMsb0RBQW9EO0lBQ3hCLFFBQWdCOztZQUUzQyxPQUFPLE1BQU0sd0JBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQVEsQ0FBQyxDQUFDO1FBQ25FLENBQUM7S0FBQTtDQUNKLENBQUE7QUFQRztJQUZDLFVBQUcsRUFBRTtJQUNMLGVBQVEsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUM7SUFFOUIsV0FBQSxjQUFPLEVBQUUsQ0FBQTtJQUVULFdBQUEsYUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0RBRzdCO0FBVlEsZUFBZTtJQUYzQixZQUFLLEVBQUU7SUFDUCxXQUFJLENBQUMsT0FBTyxDQUFDO0dBQ0QsZUFBZSxDQVczQjtBQVhZLDBDQUFlIn0=