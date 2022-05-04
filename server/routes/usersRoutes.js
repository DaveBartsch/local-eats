// var express = require("express");
// var router = express.Router();
// var debug = require("debug")("server:routes");
// var User = require("../db/models/userModel");
// var passport = require("passport");
// const session = require("express-session");

// var LocalStrategy = require("passport-local").Strategy;
// const {
//   getUserById,
//   getUserByName,
//   createUser,
//   updateUser,
//   verifyPassword,
// } = require("../db/models/userModel");


// passport.use(
//   new LocalStrategy(async function (username, password, done) {
//     try {
//       const user = await getUserByUsername(username);
//       if (!user) {
//         return done(null, false);
//       }
//       const passwordsMatch = await verifyPassword(password, user.password);
//       if (!passwordsMatch) {
//         return done(null, false);
//       }

//       return done(null, user);
//     } catch (error) {
//       return done(error, null);
//     }
//   })
// );

// passport.serializeUser(function (user, done) {
//   console.log("serializeUser", user);
//   done(null, user.id);
//   console.log("serializeUser", user.id);
// });

// passport.deserializeUser(async function (id, done) {
//   console.log("Passport is trying to recover user from cookie", id);

//   try {
//     const user = await getUserById(id);
//     if (!user) {
//       done(new Error("User not found"));
//       console.log("User not found");
//       return;
//     }
//     done(null, user);
//   } catch (err) {
//       console.log("Error in deserializeUser", err);
//     done(err);
//   }
// });

// passport.serializeUser(function (user, done) {
//   console.log("passport wants to store this user in a cookie", user);
//   done(null, user.id);
// });

// passport.deserializeUser(async function (id, done) {
//   console.log("passport is trying to recover the user from the cookie", id);
//   try {
//     const user = await getUserById(id);
//     if (!user) {
//       done(new Error("User not found or deleted"));
//       return;
//     }
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });

// router.post("/login", passport.authenticate("local"), (req, res) => {
//   res.send("success");
// });





// module.exports = router;

var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {
  getUserByUsername,
  createUser,
  getUserById,
  verifyPassword,
} = require("../db/models/userModel");

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await getUserByUsername(username);
      if (!user) {
        return done(null, false);
      }
      const passwordsMatch = await verifyPassword(password, user.password);
      if (!passwordsMatch) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  })
);

passport.serializeUser(function (user, done) {
  console.log("passport wants to store this user in a cookie", user);
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  console.log("passport is trying to recover the user from the cookie", id);
  try {
    const user = await getUserById(id);
    if (!user) {
      done(new Error("User not found or deleted"));
      return;
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("success");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("successfully logged out");
});

module.exports = router;