// import express
var express = require("express");
const router = express.Router();
const FarmStand= require("../models/standSchema");

// Get All the farm stands
router.get("/",async (request, response) => {
  try {
    const farmStands = await FarmStand.find({});
    res.send(farmStands); 
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get a farm Stand by ID
router.get("/:id", async (req, res) => {
  try {
   const farmStand = await FarmStand.findById(req.params.id);
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

// create a farm Stand
router.post("/", async (req, res) => {
  try {
    const farmStand = await FarmStand.create(req.body);
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update a farmStand after searching and getting it by ID
router.put("/:id",async (req, res) => {
  try
   {
    const farmStand = await FarmStand.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.send(farmStand);
  } catch (err) {
   res.status(400).send(err);
  }
});

// delete a farmStand
router.delete("/:id",async (req, res) => {
  try {
    const farmStand = await FarmStand.findByIdAndDelete(req.params.id);
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
}});

// export router
module.exports = router;
