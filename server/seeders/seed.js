const db = require("../config/connection");
const { Profile, Product, Exercise } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const productSeeds = require("./productSeeds.json");
const exerciseSeeds = require("./exerciseSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Product.create(productSeeds);
    await Exercise.create(exerciseSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
