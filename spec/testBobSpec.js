var Bob = require("../Bob.js")
describe("Test Bob the Builder", function() {
    it("should have necessary inputs to operate", function(done) {

      const params={
        token: process.env.PLUGIN_TOKEN,
        roomName: process.env.PLUGIN_ROOMNAME,
        buildMessage: process.env.PLUGIN_MESSAGE
      }

      testBob = new Bob(params)
      expect(testBob.canOperate()).toBe(true)
      done();
    });

    it("returns the correct roomId", function(done) {
      const params={
        token: process.env.PLUGIN_TOKEN,
        roomName: process.env.PLUGIN_ROOMNAME,
        buildMessage: process.env.PLUGIN_MESSAGE
      }

      testBob = new Bob(params)
      testBob.findRoomId().then(id=>{
        expect(roomId).toBe("Y2lzY29zcGFyazovL3VzL1JPT00vMjEzY2JmZjAtNTcwMi0xMWU3LWE5ZTktZjk5MWVlZjY1YmNi")
      })
      done();
    });

    /*it("succesfully sends the message", function(done) {
      testBob = new Bob({token: testInput.token})
      const res = testBob.sendMessage(process.env.TEST_ROOMID, process.env.TEST_MESSAGE)
      expect(res.statusCode).toBe(200)
      done();
    });*/
});
