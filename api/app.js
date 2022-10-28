const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');

const passport_init = require('./auth');


//? Initialized
passport_init(passport)

mongoose.connect('mongodb+srv://vansh:vansh123@cluster0.tflxusx.mongodb.net/community?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//? Global vars
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(flash());

app.use(session({
    secret: 'my secret key',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


//? Routes
app.use('/auth', require('./routes/authenticate'))
app.use('/groovy', require('./routes/groovy'))
app.use('/posts', require('./routes/posts'))
app.use('/users', require('./routes/user'))


app.listen(8000, () => {
    console.log('Server is running on port 8000')
})