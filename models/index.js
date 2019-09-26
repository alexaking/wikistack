const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',{
    logging : false
});

module.exports = {
  db
}

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      isAlphanumeric: true,
      defaultValue: "No Subject"
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  });

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "anonymous"
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {isEmail: true}
    }
  });

  module.exports = { db, Page, User };
