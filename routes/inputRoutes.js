const express = require('express');
const path = require("path");
const router = express.Router();
module.exports = router;
router.get("/addInput", (req, res) => {
    res.render("You have added a member");
});

router.post('/addlnput',(req, res)=>{
    console.log(req.body)
    res.json(req,res)
});