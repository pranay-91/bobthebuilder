const Bob = require('./Bob.js')

const axios = require('axios')

const params= {
  token: process.env.PLUGIN_TOKEN,
  roomName: process.env.PLUGIN_ROOMNAME,
  roomId:"",
  buildStatus: process.env.DRONE_BUILD_STATUS,
  buildNumber: process.env.DRONE_BUILD_NUMBER,
  buildTag: process.env.DRONE_TAG,
  buildLink: process.env.BUILD_LINK,

  buildCommit: process.env.DRONE_BUILD_COMMIT,
  buildCommitSha: process.env.DRONE_COMMIT_SHA,
  buildCommitBranch: process.env.DRONE_COMMIT_BRANCH,
  buildCommitAuthor: process.env.DRONE_COMMIT_AUTHOR,

  buildRepoOwner: process.env.DRONE_REPO_OWNER,
  buildRepoName:process.env.DRONE_REPO_NAME,
  buildMessage: process.env.PLUGIN_MESSAGE
}



const bob = new Bob(params)
if(bob.canOperate()) {
    bob.execute()
}
else{
  throw new Error("The necessary params are missing!")
}
