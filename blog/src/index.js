const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ADD STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('src'));

//HTTP LOGGER
app.use(morgan('combined'));

//TEMPLATE ENGINE
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//ROUTE
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
