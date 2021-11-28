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

          expect(res.body.tickets).to.have.lengthOf(5)
          done()
      })
      
  }
  )
}
)




describe("Getting null while fetching prev tickets",function()
{
   
  it("Fetched tickets",function(done)
  {
      chai.request("http://localhost:3001")
      .get("/tickets")
      .end(function(err,res)
      {   

        chai.request("http://localhost:3001")
        .get(`/tickets2/${res.body.meta.before_cursor}`)
        .end(function(err,resp)
        {   
     
            expect(resp.body.tickets.length).to.equal(0)
            done()
        })

      })
      
  }
  )
}
)

describe("Fetching next tickets",function()
{
   
  it("Fetched tickets",function(done)
  {
      chai.request("http://localhost:3001")
      .get("/tickets")
      .end(function(err,res)
      {   

        chai.request("http://localhost:3001")
        .get(`/tickets1${res.body.meta.after_cursor}`)
        .end(function(err,resp)
        {
            expect(res.body.tickets).to.have.lengthOf(5)
            done()
        })

      })
      
  }
  )
}
)


