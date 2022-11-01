import mongoose from "mongoose"
const URL='mongodb://localhost:27017'
const connection=async()=>{
    try {
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log(`connection successfull`)
    } catch (error) {
        console.log(`error while connecting to database ${error}`)
    }
}

export default connection;