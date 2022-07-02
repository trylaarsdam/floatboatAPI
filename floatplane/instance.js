const Floatplane = require("floatplane");
module.exports = {
  getInstance
}

var instance = null;

async function getInstance() {
  if(instance == null) {
    const floatplane = new Floatplane.Floatplane(); // Create a new API instance.
    // Run with async/await
    const login = await floatplane.login({
      username: "Nerdom",
      password: require("../config.json").password,
      token: "",
    });
    
    instance = floatplane
    return floatplane
  } else {
    return instance
  }

}
