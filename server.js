const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const  app = require("./app");

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE_CONNECTION_STRING;

mongoose.connect(DB).then((connection)=>{
    console.log("DB Connection Successfull")
});


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})



