const express = require('express');
const bodyParser = require('body-parser');

require('./config/db')
require('dotenv').config({path: './.env'});
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const eventRoutes = require('./routes/eventRoute')

app.use('/api/events', eventRoutes)

app.get('/', (req, res) => {
    res.send('Hello events test')
})

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
})