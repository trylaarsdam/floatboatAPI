
module.exports = {
  get
}

async function get(attachementID) {
  const floatplane = await (require("./instance")).getInstance()
  //types: video, audio, text iirc
  const vodInfo = await floatplane.cdn.delivery("download", attachementID);
  console.log(JSON.stringify(vodInfo, null, 2));

  return vodInfo
}