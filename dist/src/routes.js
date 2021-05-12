"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const tsoa_1 = require("tsoa");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const users_controller_1 = require("./api/users/controllers/users.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const admin_controller_1 = require("./admin/controllers/admin.controller");
const authentication_1 = require("./common/middleware/authentication");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "ResponseData": {
        "dataType": "refObject",
        "properties": {
            "status": { "dataType": "any" },
            "success": { "dataType": "any" },
            "result": { "dataType": "any", "required": true },
            "msg": { "dataType": "any", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "firstName": { "dataType": "string", "required": true },
            "lastName": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new tsoa_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/api/users', function (request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new users_controller_1.usersController();
        const promise = controller.createUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/users', authenticateMiddleware([{ "api_token": [] }]), function (request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new users_controller_1.usersController();
        const promise = controller.getList.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/', function (request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            language: { "in": "header", "name": "accept-language", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new admin_controller_1.adminController();
        const promise = controller.adminHome.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return (request, _response, next) => {
            let responded = 0;
            let success = false;
            const succeed = function (user) {
                if (!success) {
                    success = true;
                    responded++;
                    request['user'] = user;
                    next();
                }
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            const fail = function (error) {
                responded++;
                if (responded == security.length && !success) {
                    error.status = error.status || 401;
                    next(error);
                }
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    let promises = [];
                    for (const name in secMethod) {
                        promises.push(authentication_1.expressAuthentication(request, name, secMethod[name]));
                    }
                    Promise.all(promises)
                        .then((users) => { succeed(users[0]); })
                        .catch(fail);
                }
                else {
                    for (const name in secMethod) {
                        authentication_1.expressAuthentication(request, name, secMethod[name])
                            .then(succeed)
                            .catch(fail);
                    }
                }
            }
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode;
            if (isController(controllerObj)) {
                const headers = controllerObj.getHeaders();
                Object.keys(headers).forEach((name) => {
                    response.set(name, headers[name]);
                });
                statusCode = controllerObj.getStatus();
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
                data.pipe(response);
            }
            else if (data || data === false) { // === false allows boolean result
                response.status(statusCode || 200).json(data);
            }
            else {
                response.status(statusCode || 204).end();
            }
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "controllerPathGlobs": ["./src/**/**/controllers/*controller.ts"], "specVersion": 2 });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "controllerPathGlobs": ["./src/**/**/controllers/*controller.ts"], "specVersion": 2 });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "controllerPathGlobs": ["./src/**/**/controllers/*controller.ts"], "specVersion": 2 });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.', { "controllerPathGlobs": ["./src/**/**/controllers/*controller.ts"], "specVersion": 2 });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "controllerPathGlobs": ["./src/**/**/controllers/*controller.ts"], "specVersion": 2 });
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9KQUFvSjtBQUNwSiwrQkFBNEY7QUFDNUYsb0pBQW9KO0FBQ3BKLCtFQUEyRTtBQUMzRSxvSkFBb0o7QUFDcEosMkVBQXVFO0FBQ3ZFLHVFQUEyRTtBQUczRSxvSkFBb0o7QUFFcEosTUFBTSxNQUFNLEdBQXFCO0lBQzdCLGNBQWMsRUFBRTtRQUNaLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFlBQVksRUFBRTtZQUNWLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7WUFDL0IsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtZQUNoQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDakQsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1NBQ2pEO1FBQ0Qsc0JBQXNCLEVBQUUsSUFBSTtLQUMvQjtJQUNELG9KQUFvSjtJQUNwSixNQUFNLEVBQUU7UUFDSixVQUFVLEVBQUUsV0FBVztRQUN2QixZQUFZLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDbkQsV0FBVyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQ3ZELFVBQVUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUN0RCxVQUFVLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7U0FDekQ7UUFDRCxzQkFBc0IsRUFBRSxJQUFJO0tBQy9CO0lBQ0Qsb0pBQW9K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