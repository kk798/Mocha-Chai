const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
var assert = chai.assert;
chai.use(chaiHttp);

describe("Students", () => {
  describe("GET /", () => {
    // Test to get all students record
    it("should get all students record", done => {
      chai
        .request(app)
        .get("/get-students")
        .end((err, res) => {
          expect(res).to.have.status(200);
          assert.typeOf(res.body, "object");
          done();
        });
    });
    //Test to get single student record
    it("should get a single student record", done => {
      const id = 1;
      chai
        .request(app)
        .get(`/get-student/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          assert.typeOf(res.body, "object");
          expect(res.body).to.have.property("student");
          expect(res.body).to.have.property("message");
          done();
        });
    });

    //Test to get single student record
    it("should not get a single student record", done => {
      const id = 10;
      chai
        .request(app)
        .get(`/get-student/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("message");
          done();
        });
    });
  });

  describe("POST /", () => {
    // add student
    it("should add student", done => {
      chai
        .request(app)
        .post("/add-student")
        .send({
          id: 4,
          name: "Khushali Korat",
          age: 21
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          assert.typeOf(res.body.student, "object");
          done();
        });
    });
  });
});
