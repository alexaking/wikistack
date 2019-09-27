const morgan = require ("morgan");
const express = require ("express");
const layout = require("./views/layout.js")
const models = require('./models');
const { db } = require('./models');
const userRouter = require("./routes/user")
const wikiRouter = require("./routes/wiki")
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use("/wiki", wikiRouter)

app.get("/", (req, res, next) => {
  res.redirect('/wiki')
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

// const client = require('./db');
// const routes = require('./routes/posts');

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


//sync our database models

const init = async() =>{
    await models.db.sync({force: true})
    app.listen(PORT, () => {
        console.log(`Server is listening in port ${PORT}`);
      });
}

init()

const PORT = 3000;