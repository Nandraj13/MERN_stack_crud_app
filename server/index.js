import express from 'express';
import Connection from './database/connection.js'
import routes from './routes/route.js'
import cors from 'cors'
import bodyparser from 'body-parser'
const app=express()
const PORT=8000
app.use(cors())
app.use(bodyparser.json({extended: true}))
app.use(bodyparser.urlencoded({extended: true}))
app.use('/',routes);
Connection();
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})