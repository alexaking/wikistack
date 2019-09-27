const express = require ("express");
const router = express.Router();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Page } = require("../models");
const {addPage} = require("../views")


router.get
router.get("/", (req, res) => {
  //try{
  res.send("")
  //}catch{}
})

router.post('/', async (req, res, next) => {
  res.json(req.body)
  
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: "req.body.title",
    content: "req.body.content"
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});


//add a wiki page
router.get("/add", (req, res) => {
  try{
    res.send(addPage());
  }
  catch (error){
    console.log(error);
  }
})

module.exports = router;
