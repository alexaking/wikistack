const express = require ("express");
const router = express.Router();
const {addPage} = require("../views")


// router.get("/", (req, res) => {
//   //try{
//   res.send("WORKING")
//   //}catch{}
// })

router.get("/", (req, res) => {
  //try{
  res.redirect("/wiki")
  //}catch{}
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
