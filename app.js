const morgan = require ("morgan");
const express = require ("express");
const layout = require("./views/layout.js")
const models = require('./models');
const { db } = require('./models');

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

// const client = require('./db');
// const routes = require('./routes/posts');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(layout(""));
  });
  
//sync our database models
  const PORT = 3000;

const init = async() =>{
    await models.db.sync({force: true})
    app.listen(PORT, () => {
        console.log(`Server is listening in port ${PORT}`);
      });
}

init()