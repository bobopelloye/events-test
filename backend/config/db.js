const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bobopelloye:AxI62r7y1xAYz8EI@events.cup2rqr.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log('Failed to connect to MongoDB', err))