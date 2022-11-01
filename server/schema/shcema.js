import mongoose from 'mongoose'
import ai from 'mongoose-auto-increment'
const userSchema= mongoose.Schema({
    name:String,
    email:String,
    contact:String
})
ai.initialize(mongoose.connection)
userSchema.plugin(ai.plugin,'user')
const user=mongoose.model('user',userSchema)
export default user;
