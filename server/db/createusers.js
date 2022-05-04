// 
const { createUser } = require("./models/userModel");

const createNewUser = async () => {
  const newUser = {
    username: "David",
    password: "123123",
   farmStandId: "626849f2174853ec196a2c56", //a specific farm stand
  };
  const newAgent = {
    username: "Amanuel",
    password: "password1",
    isAgent: true,
  };

  const createdUser = await createUser(newUser);
  const createdManager = await createUser(newAgent);
  console.log(
    `We created a new user: ${newUser.username} with an _id of ${createdUser._id}`,
    `We created a new user: ${createdManager.username} with an _id of ${createdManager._id}`
  );
};

createNewUser();