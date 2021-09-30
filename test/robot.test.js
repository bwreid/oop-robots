const { expect } = require("chai");
const Robot = require("../src/robot");

describe("Robot", function () {
  describe("new Robot()", function () {
    it("should randomly generate a unique id upon creation", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      const shiela = new Robot("We out here botting away");
      expect(bob.id).to.not.equal(shiela.id);
    });
    it("should allow for a description property to be set in the constructor", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      expect(bob).to.have.property("description");
    });
    it("if the description is not set, it should be null", () => {
      const bob = new Robot();
      expect(bob.description).to.equal(null);
    });
  });

  describe("get id", function () {
    it("should return the id of the robot", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      expect(bob.id).to.be.ok;
    });
  });

  describe("set id", function () {
    it("should throw an error if an attempt is made to change the id", () => {
      const bob = new Robot();
      const test = () => (bob.id = 1);
      expect(test).to.throw();
    });
  });

  describe("get description", function () {
    it("should return the description", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      expect(bob.description).to.be.ok;
    });
  });

  describe("set description", function () {
    it("should throw an error if the value is empty", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      const test = () => (bob.description = "");
      expect(test).to.throw();
    });
    it("should set the description of the robot", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      bob.description = "The best bob in town";
      expect(bob.description).to.equal("The best bob in town");
    });
  });

  describe("get network", function () {
    it("should return an array of all the ids the robot has met", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      const hal = new Robot("A computer designed to control the Discovery One spacecraft");
      const rob = new Robot("A robotic operating buddy");
      const david = new Robot("An android in service of the Prometheus crew");
      bob.meet(hal);
      bob.meet(rob);
      bob.meet(david);
      expect(bob.network).to.eql([hal.id, rob.id, david.id]);
    });
  });

  describe("set network", function () {
    it("should throw an error if an attempt is made to change the network", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      const test = () => (bob.network = null);
      expect(test).to.throw();
    });
  });

  describe("#meet()", function () {
    it("should have a meet function that takes another instance of a robot", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      const hal = new Robot("A computer designed to control the Discovery One spacecraft");
      const test = () => bob.meet(hal);
      expect(test).to.not.throw();
    });
    it("should throw an error if the inserted value is not a robot instance", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      const hal = "lovely weather to break things with a non robot instance";
      const test = () => bob.meet(hal);
      expect(test).to.throw();
    });
    it("should add the robots ids to each other's networks", () => {
      const bob = new Robot("A lovely new robot, that just landed in the market");
      const hal = new Robot("A computer designed to control the Discovery One spacecraft");
      bob.meet(hal);
      expect(bob.network).to.include(hal.id) && expect(hal.network).to.include(bob.id);
    });
  });
});
