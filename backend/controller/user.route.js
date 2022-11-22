const express = require('express');
const app = express();
const userRoute = express.Router();

let Employee = require('../models/User');

userRoute.route('/createuser').post((req, res, next) => {
  Employee.create(req.body, (error, data) => {
    console.log("create user")
    if (error) {
      return next(error)
    } else {
      console.log("create user1")
      res.json(data)
    }
  })
});

userRoute.route('/').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = userRoute;