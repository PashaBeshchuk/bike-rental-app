const app = require('./middleware');
const mongoose = require('mongoose')

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Pavel:ujmnhytgb567@cluster0-xdm4g.mongodb.net/bike-rental', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        app.listen(9090, ()=> {
            console.log("Server has been started")
        })
    } catch(e) {
        console.log(e)
    }
}
start()