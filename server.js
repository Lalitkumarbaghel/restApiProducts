const express = require('express')
const app = express();
const PORT = 3000 || process.env.PORT;
const apiRoutes1 = require('./routes/web')
require('./db/connect')()
///console.log(apiRoutes1, apiRoutes2)
app.use('/api', apiRoutes1)
app.get('/', (req,res)=>{
    return res.send("Api")
})
app.listen(PORT, ()=>{
    try {
        console.log(`${PORT} server is connect`)
    } catch (error) {
        console.log(`${PORT} server is not connect`)
    }
})


//mongodb+srv://lalitbaghel:<db_password>@expressapix.vqaha.mongodb.net/?retryWrites=true&w=majority&appName=expressApix
// 2 mongodb username :- lalitbaghel password :- g2YgbfXQu1NAyHvU database :- expressApix