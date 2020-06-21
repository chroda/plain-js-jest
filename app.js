const getDistanceFromLatLonInKm = require("./src/getDistanceFromLatLonInKm.js");
const customers = require("./src/customers.json");
const office = require("./src/office.json");
const fs = require("fs");

let invites = [];
customers.map((customer) => {
  customer.distance = getDistanceFromLatLonInKm(
    office.latitude,
    office.longitude,
    customer.latitude,
    customer.longitude
  );

  if (customer.distance <= 100) {
    invites.push(customer);
  }
});

fs.writeFileSync("./output.txt", JSON.stringify(invites, null, 4));
