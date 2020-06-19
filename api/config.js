const DBNAME = `todo-list`;
require('dotenv').config();
module.exports = {
    PORT: 3001,
    DBNAME,
    APPNAME: `My To-Do List`,
    DBURI: `mongodb+srv://${process.env.dbUSERNAME}:${process.env.dbPASSWORD}@helio-jxizz.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
};