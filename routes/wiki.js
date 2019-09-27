const express = require ("express");
const router = express.Router();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Page } = require("../models");
const {addPage} = require("../views")
const {main} = require("../views")


router.get
router.get("/", (req, res) => {
  //try{
  res.send(main())
  //}catch{}
})

router.post('/', async (req, res, next) => {
  console.log(req.body)
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
    res.redirect(`/wiki/${page.slug}`);
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

router.get('/:slug', async (req, res, next) => {
  try{
    const page = await Page.findOne({
      where:{
        slug: req.params.slug
      }
    });
    res.json(page);
  }
  catch(error){next(error)}
});

module.exports = router;
