module.exports = {
  get
}

async function get(type) {
  const floatplane = await (require("./instance")).getInstance()
  //types: video, audio, text iirc

  const subs = await floatplane.user.subscriptions();
  const videos = await floatplane.creator.blogPosts(subs[0].creator, { type: type });  
  return videos
}