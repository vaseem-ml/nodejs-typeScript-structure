"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
function expressAuthentication(request, securityName, scopes) {
    console.log('you are listening in authentication file');
    return Promise.resolve({
        id: 1,
        msg: 'wroking'
    });
    // if (securityName === 'api_token') {
    //     let token;
    //     if (request.query && request.query.access_token) {
    //         token = request.query.access_token;
    //     }
    //     if (token === 'abc123456') {
    //         return Promise.resolve({
    //             id: 1,
    //             name: 'Ironman'
    //         });
    //     } else {
    //         return Promise.reject({});
    //     }
    // }
    // if (securityName === 'jwt') {
    //     const token = request.body.token || request.query.token || request.headers['x-access-token'];
    //     return new Promise((resolve, reject) => {
    //         if (!token) {
    //             reject(new Error("No token provided"))
    //         }
    //         jwt.verify(token, "[secret]", function (err: any, decoded: any) {
    //             if (err) {
    //                 reject(err)
    //             } else {
    //                 // Check if JWT contains all required scopes
    //                 // for (let scope of scopes) {
    //                 //     if (!decoded.scopes.includes(scope)) {
    //                 //         reject(new Error("JWT does not contain required scope."));
    //                 //     }
    //                 // }
    //                 resolve(decoded)
    //             }
    //         });
    //     });
    // }
}
exports.expressAuthentication = expressAuthentication;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL21pZGRsZXdhcmUvYXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsU0FBZ0IscUJBQXFCLENBQUMsT0FBd0IsRUFBRSxZQUFvQixFQUFFLE1BQWlCO0lBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQTtJQUN2RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbkIsRUFBRSxFQUFFLENBQUM7UUFDTCxHQUFHLEVBQUUsU0FBUztLQUNqQixDQUFDLENBQUE7SUFDRixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLHlEQUF5RDtJQUN6RCw4Q0FBOEM7SUFDOUMsUUFBUTtJQUVSLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IsSUFBSTtJQUVKLGdDQUFnQztJQUNoQyxvR0FBb0c7SUFFcEcsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4QixxREFBcUQ7SUFDckQsWUFBWTtJQUNaLDRFQUE0RTtJQUM1RSx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QiwrREFBK0Q7SUFDL0QsaURBQWlEO0lBQ2pELGdFQUFnRTtJQUNoRSx3RkFBd0Y7SUFDeEYsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsSUFBSTtBQUNSLENBQUM7QUE1Q0Qsc0RBNENDO0FBQUEsQ0FBQyJ9