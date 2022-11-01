import { FormControl, FormGroup, InputLabel ,Input, styled,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getSelectedUserData } from "../service/api";
import { useEffect } from "react";
const Container= styled(FormGroup)`
margin:1% auto 0 auto;
width: 60%;
& > div{
    margin-top: 20px
    
}
`
const dataob={
    id:'',
    name:'',
    email:'',
    contact:''
}


const Edituser=()=>{
    const nav=useNavigate()
    //console.log(id)
    dataob.email=sessionStorage.getItem("email")
    dataob.name=sessionStorage.getItem("name")
    dataob.contact=sessionStorage.getItem("contact")
    dataob.id=sessionStorage.getItem("id")
    function onValChange(e){
        if(e.target.name==="name"){
            dataob.name=e.target.value
            dataob.id=sessionStorage.getItem("id")
        }
        else if(e.target.name==="email"){
            dataob.email=e.target.value
            dataob.id=sessionStorage.getItem("id")
        }
        else{
            dataob.contact=e.target.value
            dataob.id=sessionStorage.getItem("id")
        }
        }
    
    async function setFields ()
    {
        nav('/alluser')
       await getSelectedUserData(dataob)

    }

    return(
        <Container>
            <h1>Update User</h1>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValChange(e)} name="name" defaultValue={sessionStorage.getItem("name")}/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValChange(e)} name="email" defaultValue={sessionStorage.getItem("email")}/>
            </FormControl>

            <FormControl>
                <InputLabel>Contact</InputLabel>
                <Input onChange={(e)=>onValChange(e)} name="contact" defaultValue={sessionStorage.getItem("contact")}/>
            </FormControl>

            <FormControl>
            <Button variant="contained" onClick={setFields}>Update</Button>
            </FormControl>
        </Container>
    )
}
export default Edituser;