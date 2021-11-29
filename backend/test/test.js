const assert = require("chai").assert
const app = require("..")
const chai = require("chai")
chai.use(require("chai-http"))
const expect = require("chai").expect;
const agent = require("chai").request.agent(app)



describe("Getting tickets",function()
{ 
  it("Fetched tickets",function(done)
  {``
      chai.request("http://localhost:3001")
      .get("/tickets")
      .end(function(err,res)
      {  
          expect(res.body.tickets).to.have.lengthOf(100)
          done()
      })
      
  }
  )
}
)



