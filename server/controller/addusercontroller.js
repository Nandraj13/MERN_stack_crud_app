import Schema from '../schema/shcema.js'

export const addUser=async(req,res)=>{
    const user=req.body
    const newuser= new Schema(user)
    try {
        await newuser.save()
        res.status(201).json(newuser)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}
export const allUser=async(req,res)=>{
    try {
        const users=await Schema.find({})
        res.status(201).json(users)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const selectedUserUpdate=async(req,res)=>{
    try {
        const users=await Schema.updateOne({"_id":req.body.id},{$set:{"name":req.body.name,"email":req.body.email,"contact":req.body.contact}})
        console.log(req.body)
        res.status(201).json(users)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const deleteUser=async(req,res)=>{
    try {
        const users=await Schema.deleteOne({"_id":req.body._id})
        console.log(req.body)
        res.status(201).json(users)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

