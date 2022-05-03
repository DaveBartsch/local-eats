var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");
var User = require("../models/User");
const {
  getUserById,
  getUserByName,
  createUser,
  updateUser,
  verifyPassword
} = require("../db/models/User");

const LocalStrategy = require("passport-local").Strategy;

passport.use(async function LocalStrategy(username, password, done) {
    const user =await getUserByName(username);
    if (!user) {
        return done(null, false, { message: "Incorrect username." });
    }
    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
        return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
});

