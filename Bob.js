const axios = require('axios')

class Bob {
  constructor(params) {
    this._params = params
    this._instance = axios.create({
      baseURL:'https://api.ciscospark.com/v1',
      headers: {
        'Authorization':'Bearer ' + this._params.token
      }
    })
  }

  canOperate() {
    if(this._params.token === "" || this._params.roomName===""
    || this._params.buildMessage===""
    )  {
      return false
    }
    return true
  }

  findRoomId(){
    return new Promise((resolve,reject)=> {
      this._instance.get('/rooms',{})
        .then(res=> {
          const index = res.data.items.findIndex(room=> room.title===this._params.roomName)
          if(index!=-1) {
            resolve(res.data.items[index].id)
          }
          else {
            reject("Cannot find the room of name: "+ this._params.roomName)
          }
        })
    })
  }

  sendMessage() {

    if(this._params.roomId==="") {
      throw new Error("RoomId does not exist")
    }
    const config_data={
      "roomId": this._params.roomId,
      "text": this._params.buildMessage
    }
    this._instance.post('/messages', config_data)
  }


  execute() {
    this.findRoomId()
      .then(id=>{
        this._params.roomId=id
        this.sendMessage()
      })
      .catch(error=>console.log(error))
  }
}


module.exports = Bob
