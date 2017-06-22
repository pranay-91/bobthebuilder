var Bob = require("../Bob.js")

describe("Test Bob the Builder", function() {

  describe("Bob sends the message", function() {
    it("should have necessary inputs to operate", function(done) {
      expect(testBob.canOperate()).toBe(true)
      done()
    })

    it("returns the correct roomId", function(done) {
      testBob = new Bob()
      const roomId = Bob.getRoomId(process.TEST_ROOMNAME)
      expect(roomId).toBe(process.env.TEST_ROOMID)
      done();
    })

    it("succesfully sends the message", function(done) {
      testBob = new Bob({token: testInput.token})
      const res = testBob.sendMessage(process.env.TEST_ROOMID, process.env.TEST_MESSAGE)
      expect(res.statusCode).toBe(200)
      done();
    })
  })

})
