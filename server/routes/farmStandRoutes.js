// import express
var express = require("express");

//import router
const router = express.Router();

//import model
const FarmStand = require("../db/models/standSchema");

// import functions
const {
  createFarmStand,
  getAllFarmStands,
  getFarmStandByID,
  updateFarmStand,
  deleteFarmStand,
} = require("../db/models/standSchema");

// test page
router.get("/Home", async (req, res) => {
  res.json({ msg: "This is a test Farm stand" });
});

// Get All the farm stands
router.get("/", async (req, res) => {
  try {
    const farmStands = await getAllFarmStands();
    console.log(`Getting all farm stands...`);
    res.send(farmStands);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get a farm Stand by ID
router.get("/:id", async (req, res) => {
  try {
    const farmStand = await getFarmStandByID(req.params.id);
    console.log(`Farm stand requested: ${farmStand.vendor_name}`);
    res.send(farmStand);
  } catch (err) {
    res.status(500).send(err);
  }
});

// create a farm Stand
router.post("/", async (req, res) => {
  try {
    console.log(`Creating farmStand: ${farmStand.vendor_name}`);
    const farmStand = await createFarmStand(req.body);
    console.log(
      `Created farmStand ${newFarmStand.vendor_name} with id ${newFarmStand._id}`
    );
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update a farmStand after searching and getting it by ID
router.put("/:id", async (req, res) => {
  try {
    const farmStand = await updateFarmStand(req.params.id, req.body, {
      new: true,
    });
    console.log(
      `Updating farm stand: (${farmStand.vendor_name}) 
      with new data: (${JSON.stringify(req.body)})`
    );
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete a farmStand
router.delete("/:id", async (req, res) => {
  try {
    const farmStand = await deleteFarmStand(req.params.id);
    console.log(`Deleting farm stand by ID: ${id}`);
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

// export router
module.exports = router;
