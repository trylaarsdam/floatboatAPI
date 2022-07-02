// initialize express server at 7000
const express = require('express');
const app = express();
const server = app.listen(8888);
const blogPosts = require('./floatplane/blogPosts');
const videos = require('./floatplane/videos');

app.get("/", function(req, res) {
  res.send({
    status: "success"
  })
})

app.get("/videos", async function (req, res) {
  const response = await blogPosts.get("video");
  res.send(response);
})

app.get("/videos/:id", async function (req, res) {
  let fpRes = await videos.get(req.params.id);
  var response = {
    status: "success",
    quality360: "https://edge01-na.floatplane.com" + 
      fpRes.resource.uri.replace("{qualityLevels}", "360")
        .replace("{qualityLevelParams.token}", 
                  fpRes.resource.data.token),
    quality480: "https://edge01-na.floatplane.com" + 
    fpRes.resource.uri.replace("{qualityLevels}", "480")
      .replace("{qualityLevelParams.token}", 
                fpRes.resource.data.token),
    quality720: "https://edge01-na.floatplane.com" + 
    fpRes.resource.uri.replace("{qualityLevels}", "720")
      .replace("{qualityLevelParams.token}", 
                fpRes.resource.data.token),
    quality1080: "https://edge01-na.floatplane.com" + 
    fpRes.resource.uri.replace("{qualityLevels}", "1080")
      .replace("{token}", 
                fpRes.resource.data.token),
  }
  res.send(response);
})