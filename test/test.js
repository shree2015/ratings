/* 
 * test.js - Main test file for the Vehicle ratings API
 * Author: Ojas Kale
 * Date: 12th May 2018
 * Version: 1
 */

var supertest = require('supertest');
var should = require('should');

var server = supertest.agent("http://localhost:8888");

describe("Base Route Test", function () {
    it("should return home page", function (done) {
        server.get('/')
        .expect(200)
        .end(function(err, res) {
            if(err) { done(err); }
            res.status.should.equal(200);
            done();
        });
    }); 
});

describe("Vehicle Route Test", function () {
    it("should return vehicle home page", function (done) {
        server.get('/vehicles')
        .expect(200)
        .end(function(err, res) {
            if(err) { done(err); }
            res.status.should.equal(200);
            done();
        });
    }); 
    
    it("should return 0 vehicles", function(done) {
        server.post('/vehicles')
        .send({"manufacturer": "Honda","model": "Accord"})
        .end(function(err, response) {
            if(err) { done(err); }
            response.status.should.equal(200);
            response.body.Count.should.equal(0);
            done();
        });
    });
});

