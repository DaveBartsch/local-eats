const { createUser } = require("./models/userModel");

const User=require("./models/userModel");

const createNewUser = async () => {
  const newUser = {
    username: "Tewolde",
    password: "password123",
  };

  const createdUser = await createUser(newUser);
  console.log(`Created user: ${createdUser}`);
};

createNewUser();
console.log("Finished loading initial data.");
