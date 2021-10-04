"use strict";
const firebase = require("../db");
const DataResponse = require("../models/dataResponse");
const Customers = require("../models/customers");

const firestore = firebase.firestore();

const add = async (req, res) => {
  try {
    const data = req.body;
    const phoneNumber = data.phoneNumber;
    console.log(phoneNumber);
    const file = new DataResponse(
      data.apiVersion,
      data.transactionId,
      data.data
    );
    await firestore
      .collection("customers")
      .doc(`${phoneNumber}`)
      .set(file.toMap());
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const get = async (req, res, next) => {
  try {
    const querystring = req.headers["x-querystring"];
    if (!querystring) res.status(400).send(error.message);
    const phoneNumber = querystring.trim().split(";")[1].split("=")[1];

    if (!phoneNumber) res.status(400).send(error.message);

    const customers = await firestore.collection("customers").doc(phoneNumber);
    const data = await customers.get();
    if (!data.exists) {
      res.status(404).send("Customer with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  add,
  get,
};
