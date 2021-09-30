const shortid = require("shortid");

class Robot {
  constructor(description = null) {
    this._description = description;
    this._networks = [];
    this._id = shortid.generate();
  }
  //methods
  meet(robot) {
    if (!robot instanceof Robot) throw new Error("robot must be of the Robot instance");
    this._networks.push(robot.id);
    robot._networks.push(this.id);
  }

  //getters
  get description() {
    return this._description;
  }

  get network() {
    return this._networks;
  }

  get id() {
    return this._id;
  }
  //setters
  set description(newDescription) {
    if (newDescription.length === 0) throw new Error("description cannot be set to an empty value");
    this._description = newDescription;
  }

  set id(err) {
    throw new Error("cannot set id to something else");
  }

  set network(err) {
    throw new Error("Unable to change network");
  }
}

const hal = new Robot("A computer designed to control the Discovery One spacecraft");
const rob = new Robot("A robotic operating buddy");
const david = new Robot("An android in service of the Prometheus crew");

david.meet(rob);
david.meet(hal);
david.network; // [ <rob.id>, <hal.id> ]
rob.network; // [ <david.id> ]
hal.network; // [ <david.id> ]

// try {
//   rob.id = 1; // throws Error
// } catch (e) {
//   console.error(e);
// }

// try {
//   hal.description = ""; // throws Error
// } catch (e) {
//   console.error(e);
// }

// try {
//   david.network; // []
//   david.network = "social"; // throws Error
// } catch (e) {
//   console.error(e);
// }

// try {
//   david.meet({ name: "E.T." }); // throws Error
// } catch (e) {
//   console.error(e);
// }

module.exports = Robot;
