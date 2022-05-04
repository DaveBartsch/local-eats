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
  getFarmStandsBySector,
  getFarmStandByID,
  updateFarmStand,
  deleteFarmStand,
} = require("../db/models/standSchema");

const mustBeManager =  (req, res, next) => {
  console.log("mustbemanager middleware");
  if (req.user && req.user.isAgent) {
    next()
    return
  }
  res.sendStatus(401)
}

const mustbeOwnProfile = (req, res, next) => {
  console.log("must be own profile middleware");
  if(req.user && (req.user.isAgent || req.user.farmStandId===id)) {
     next();
     return
  }
  res.sendStatus(401);
}

// test page
router.get("/Home", async (req, res) => {
  res.json({ msg: "This is a test Farm stand" });
});

// Get All the farm stands
router.get("/", async (req, res) => {
  console.log(`req user: ${req.user}`);
  try {
    console.log(`Getting all farm stands...`);
    const farmStands = await getAllFarmStands();
    res.send(farmStands);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(`Error in data! Please try again.`);
  }
});

// Get Northeast farm stands
router.get("/ne", async (req, res) => {
  try {
    console.log(`Getting Northeast farm stands...`);
    const farmStands = await getFarmStandsBySector("Northeast");
    res.send(farmStands);
  } catch (err) {
    console.log(
      `Error getting NE farm stands! Error message is: ${err.message}`
    );
    res.status(400).send(`Error in data! Please try again.`);
  }
});

// Get Northwest farm stands
router.get("/nw", async (req, res) => {
  try {
    console.log(`Getting Northwest farm stands...`);
    const farmStands = await getFarmStandsBySector("Northwest");
    res.send(farmStands);
  } catch (err) {
    console.log(
      `Error getting NW farm stands! Error message is: ${err.message}`
    );
    res.status(400).send(`Error in data! Please try again.`);
  }
});

// Get Southeast farm stands
router.get("/se", async (req, res) => {
  try {
    console.log(`Getting Southeast farm stands...`);
    const farmStands = await getFarmStandsBySector("Southeast");
    res.send(farmStands);
  } catch (err) {
    console.log(
      `Error getting SE farm stands! Error message is: ${err.message}`
    );
    res.status(400).send(`Error in data! Please try again.`);
  }
});

// Get Southwest farm stands
router.get("/sw", async (req, res) => {
  try {
    console.log(`Getting Southwest farm stands...`);
    const farmStands = await getFarmStandsBySector("Southwest");
    res.send(farmStands);
  } catch (err) {
    console.log(
      `Error getting SW farm stands! Error message is: ${err.message}`
    );
    res.status(400).send(`Error in data! Please try again.`);
  }
});

// Get a farm Stand by ID
router.get("/:id", async (req, res) => {
  try {
    const farmStand = await getFarmStandByID(req.params.id);
    console.log(`Farm stand requested: ${farmStand.vendor_name}`);
    res.send(farmStand);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Error in data! Please try again.`);
  }
});

// create a farm Stand
router.post("/",mustBeManager, async (req, res) => {
  const newFarmStand = req.body;
  try {
    const farmStand = await createFarmStand(req.body);
    console.log(`Creating farmStand: ${farmStand.vendor_name}`);
    console.log(
      `Created farmStand ${newFarmStand.vendor_name} with id ${newFarmStand._id}`
    );
    res.send(farmStand);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(`Error in data! Please try again.`);
  }
});

//Update a farmStand after searching and getting it by ID
router.put("/:id", mustbeOwnProfile, async (req, res) => {
  const id=req.params.id;
  const updatedFarmStand = req.body;
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
    console.log(err.message);
    res.status(400).send(`Error in data! Please try again.`);
  }
});

// delete a farmStand
router.delete("/:id", async (req, res) => {
  try {
    console.log(`Deleting farm stand by ID: ${JSON.stringify(req.params.id)}`);
    const farmStand = await deleteFarmStand(req.params.id);
    res.send(farmStand);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(`Error in data! Please try again.`);
  }
});

// export router
module.exports = router;
