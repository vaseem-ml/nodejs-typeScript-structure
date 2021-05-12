"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseData {
    constructor(status = 200, success = true, result = {}, msgTitle = "", request = "") {
        let lang = request.headers['accept-language'] || 'en';
        const en = require('../locales/' + lang + '.json');
        this.status = status;
        this.success = success;
        this.result = result;
        this.msg = en[msgTitle];
    }
}
exports.default = ResponseData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VEYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9oZWxwZXIvcmVzcG9uc2VEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxZQUFZO0lBT2QsWUFBWSxTQUFXLEdBQUcsRUFBRSxVQUFnQixJQUFJLEVBQUUsU0FBVyxFQUFFLEVBQUUsV0FBaUIsRUFBRSxFQUFFLFVBQWMsRUFBRTtRQUNsRyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFBO1FBQ3JELE1BQU0sRUFBRSxHQUFJLE9BQU8sQ0FBQyxhQUFhLEdBQUMsSUFBSSxHQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDSjtBQUdELGtCQUFlLFlBQVksQ0FBQyJ9