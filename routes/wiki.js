const express = require ("express");
const router = express.Router();
const { addPage } = require("../views/addPage")

router.get("/", async (req, res) => {
  try{res.send("WORKING")}
  catch{}
})

router.get("/add", async (req, res) => {
  try{
    res.send(addPage());
  }
  catch (error){
    console.log(error);
  }
})

router.post("/", async (req, res) => {
  try{res.send("WORKING")}
  catch{}
})

module.exports = router;
