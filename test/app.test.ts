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

