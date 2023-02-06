const express = require('express')
const router = express.Router()

const Celebrities = require('../models/Celebrity.model')

router.get("/create",(req,res,next)=>{
    res.render("celebrities/new-celebrity")


})

router.post("/create", async (req,res) => {
    
    try{
    //const newCelebrity = req.body
    //console.log(newCelebrity)
    await Celebrities.create(req.body)
        res.render("celebrities/new-celebrity");
        res.redirect("/")
}
catch(error){
    console.log(error)
}

})

module.exports = router