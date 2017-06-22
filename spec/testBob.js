var Bob = require("../Bob.js")

const testInput={
  token = "MDAyMzI1MDAtNGI5My00YWMzLThjYWItYzcyYmRkNTBhZDFhNmM5YmIwZDUtOWZj"
  roomName = "Drone Build Notifications on Spark"
  buildMessage = "This is a test message"
}

const testResult={
  roomId="Y2lzY29zcGFyazovL3VzL1JPT00vMjEzY2JmZjAtNTcwMi0xMWU3LWE5ZTktZjk5MWVlZjY1YmNi"
}


describe("Test Bob the Builder", function() {

  describe("Bob sends the message", function() {
    it("returns the correct roomId", function(done) {
      testBob = new Bob()
      const roomId = Bob.getRoomId(testInput.roomName)
      expect(roomId).toBe(testResult.roomId)
      done();
    })

    it("succesfully sends the message", function(done) {
      testBob = new Bob({token: testInput.token})
      const res = testBob.sendMessage(testResult.roomId, testInput.message )
      expect(res.statusCode).toBe(200)
      done();
    })
  })

})
