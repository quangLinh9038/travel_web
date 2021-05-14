require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true
}))

//Routes
app.use('/api', require('./routes/category.routes'))
app.use('/api', require('./routes/city.routes'))
app.use('/api', require('./routes/place.routes'))
app.use('/api', require('./routes/trip.routes'))
app.use('/api', require('./routes/upload'))

const db = require('./models');

// const dbConfig = require('./app/config/db.config');
// `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`

const Role = db.role;
const path = "mongodb+srv://l9931452:Anhthu123@cluster0.ifyuv.mongodb.net/User?retryWrites=true&w=majority"

db.mongoose.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully connect to MongoDB");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    })

app.get("/", (req, res) => {
    res.json({ message: "Application is running" })
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log("Added 'user' to roles collection")
            })

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log("added 'moderator' to roles collection")
            })

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log("added 'admin' to roles collection")
            })

        }
    })
}