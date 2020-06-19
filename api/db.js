const mongoose = require(`mongoose`);

let {
    APPNAME,
    DBURI
} = require(`./config`);

const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}

module.exports = () => {
    mongoose.connect(DBURI, dbOptions);

    mongoose.connection.on(`connected`, () => {
        console.log(`Mongoose connected to the database...`)
    });

    mongoose.connection.on(`error`, (err) => {
        console.log(`Mongoose encountered an error while connecting: ${err}`);
    });

    mongoose.connection.on(`disconnected`, () => {
        console.log(`Mongoose connection was disconnected...`);
    });

    process.on(`SIGINT`, () => {
        mongoose.connection.close(() => {
            console.log(`Mongoose connection closed due to ${APPNAME} closed or server interruption...`);
            process.exit(0);
        });
    });
};