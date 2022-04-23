const farmStandData = [
  {
    type: "Farm Stand",
    location_name: "Hillhurst Sunnyside Community Association",
    address: "1320 5 Avenue NW",
    hours: "Monday 4pm - 6pm",
    duration: "Year-round",
    community: "Hillhurst",
    sector: "Northwest",
    vendor_name: "Fresh Routes",
    vendor_description:
      "Fresh Routes is a not-for-profit social enterprise that is focused on creating new, innovative ways of providing healthy and affordable food to as many Canadians as possible ? especially those who need it most.",
    product_description: "Fresh produce, bread, eggs, dairy.",
    // mod_dt_utc: "2021-06-10T17:25:25.000Z",
    //point: { "type": "Point", "coordinates": [-114.092145, 51.057616]
  },
  {
    type: "Farm Stand",
    location_name: "Riverbend Community Association",
    address: "19 Rivervalley DR SE",
    duration: "Late Spring - Thanksgiving",
    community: "Riverbend",
    sector: "Southeast",
    vendor_name: "Michelle¿s Market",
    product_description: "",
  },
  {
    type: "Farm Stand",
    location_name: "Riverbend Community Association",
    address: "19 Rivervalley DR SE",
    duration: "Late Spring - Thanksgiving",
    community: "Riverbend",
    sector: "Southeast",
    vendor_name: "Michelle¿s Market",
    product_description: "",
  },
  {
    type: "Farm Stand",
    location_name: "Coach Hill Patterson Heights Community Association",
    address: "148 - 555 Strathcona Blvd SW",
    hours: "Friday 12pm - 4pm",
    duration: "Late Spring - Thanksgiving",
    community: "Aspen Woods",
    sector: "Southwest",
    vendor_name: "Shirley's Greenhouses",
    vendor_description:
      "We are a 36,000 square foot greenhouse located east of Didsbury, Alberta. We also grow 12 acres of field vegetables. What sets us apart from other greenhouse and garden growers is that we grow all our vegetables WITHOUT the use of synthetic pesticides. Our kids can walk into the greenhouse and eat fresh veggies right off the vine.",
    product_description:
      "We grow two different types of cucumbers, eight types of tomatoes, hot peppers, bell peppers, butter lettuce, and kale.",
  },
];

// import models
const FarmStand = require("./models/standSchema");

// load data
const loadInitialData = async () => {
  // load farm stands
  for (let farmStand of farmStands) {
    await farmStand.create(farmStand);
    console.log(farmStand);
  }
  console.log("Farm stands loaded");
};

loadInitialData();

//How to Stop this function
