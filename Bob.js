const axios = require('axios')

class Bob {
  constructor() {
    this._token = process.env.PLUGIN_TOKEN
    this._roomName = process.env.PLUGIN_ROOMNAME
    this._roomId=""

    this._buildStatus = process.env.DRONE_BUILD_STATUS
    this._buildNumber = process.env.DRONE_BUILD_NUMBER
    this._buildTag = process.env.DRONE_TAG
    this._buildLink = process.env.BUILD_LINK

    this._buildCommit = process.env.DRONE_BUILD_COMMIT
    this._buildCommitSha = process.env.DRONE_COMMIT_SHA
    this._buildCommitBranch = proces.env.DRONE_COMMIT_BRANCH
    this._buildCommitAuthor = process.env.DRONE_COMMIT_AUTHOR

    this._buildRepoOwner = process.env.DRONE_REPO_OWNER
    this._buildRepoName = process.env.DRONE_REPO_NAME

    this._buildMessage = process.env.PLUGIN_MESSAGE

    this._instance = axios.create({
      baseURL:'https://api.ciscospark.com/v1',
      headers: {
        'Authorization':'Bearer' + this._token
      }
    })
  }

  canOperate() {
    if(this._token === "" || this._roomName==="" || this.buildMessage==="")  {
      return false
    }
    return true
  }

  getRoomId(roomName) {
    const roomId = this._instance.get('/rooms', {}).then( res=> {
      res.items.forEach(room => {
        if(room.title === roomName)
          return room.id
      })
    })
    return roomId
  }

  sendMessage(roomId, message) {
    const config_data={
      "roomId": roomId,
      "text": message
    }
     return this._instance.post('/messages', config_data)
  }

  execute() {
    this._roomId = getRoomId(this._roomName)
    sendMessage(this._roomId, this._buildMessage)
  }

}


export default Bob