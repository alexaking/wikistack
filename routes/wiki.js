const express = require ("express");
const router = express.Router();
const {addPage} = require("../views")

router.get("/", async (req, res) => {
  try{res.send("WORKING")}
  catch{}
})


router.post("/", async (req, res) => {
  try{res.send("WORKING")}
  catch{}
})


router.get("/add", (req, res) => {
  // try{
    res.send(addPage());
  // }
  // catch (error){
  //   console.log(error);
  // }
})

module.exports = router;
