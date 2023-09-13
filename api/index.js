const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authenticationRoute = require("./routes/auth")

dotenv.config();

app.use(express.json())

mongoose.connect(process.env.dbURL,
                {useNewUrlParser: true,
                useUnifiedTopology: true,
                // useCreateIndex: true,
            }).then(console.log("Connected to mongo"))
            .catch((err)=>console.log(err));

            app.use("/api/auth", authenticationRoute)


app.listen("5000",()=>{
    console.log("Backend is running")
})