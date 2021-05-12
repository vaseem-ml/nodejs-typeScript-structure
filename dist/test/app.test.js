"use strict";
// //import supertest from "supertest";
// const { expect } = require('chai')
// const  app = require('../app');
// const supertest = require('supertest');
// const shortid = require('shortid');
// const mongoose= require('mongoose');
// let firstUserIdTest = '';
// const firstUserBody = {
//     email:'vasimkhan658@gmail.com',
//     password: 'thisispassword'
// }
// describe('users and auth endpoints', () => {    
//   //  let request: supertest.SuperAgentTest;
//   let request = supertest.agent(app);
//     beforeAll(() =>{
//      request = supertest.agent(app);
//     });
//     afterAll((done) => {
//         // shut down the Express.js server, close our MongoDB connection, then tell Mocha we're done:
//         app.close(() => {
//             mongoose.connection.close(done);
//         });
//     })
//     it('should allow a POST to /users', async() => {
//         const res = await request.post('/users').send(firstUserBody);
//         expect(res.status).to.equal(201);
//         expect(res.body).not.to.be.empty;
//         expect(res.body).to.be.an('object');
//         expect(res.body.id).to.be.a('string');
//         firstUserIdTest = res.body.id;
//     })
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2FwcC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1Q0FBdUM7QUFFdkMscUNBQXFDO0FBQ3JDLGtDQUFrQztBQUNsQywwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUV2Qyw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLHNDQUFzQztBQUN0QyxpQ0FBaUM7QUFDakMsSUFBSTtBQUdKLG1EQUFtRDtBQUNuRCwrQ0FBK0M7QUFDL0Msd0NBQXdDO0FBRXhDLHVCQUF1QjtBQUN2Qix1Q0FBdUM7QUFDdkMsVUFBVTtBQUNWLDJCQUEyQjtBQUMzQix3R0FBd0c7QUFDeEcsNEJBQTRCO0FBQzVCLCtDQUErQztBQUMvQyxjQUFjO0FBQ2QsU0FBUztBQUVULHVEQUF1RDtBQUN2RCx3RUFBd0U7QUFDeEUsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1QywrQ0FBK0M7QUFDL0MsaURBQWlEO0FBQ2pELHlDQUF5QztBQUN6QyxTQUFTO0FBRVQsS0FBSyJ9