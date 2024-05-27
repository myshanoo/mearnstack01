const express = require('express')
const dotenv =require('dotenv').config()
const mongoose =require('mongoose')
const cors =require('cors')
const app= express();

mongoose.connect(process.env.MONGOOSE_STRING).
then(()=>console.log('Datsbase Connected')).
catch((err)=>console.log('Database not Connected',err))

app.use(express.json())





app.use('/api/v1',require('./routes/authRoutes'))

const port=8000
app.listen(port,()=>console.log(`Server is running on port ${port}`))
