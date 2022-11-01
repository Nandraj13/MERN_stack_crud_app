import { FormControl, FormGroup, InputLabel ,Input, styled,Button} from "@mui/material";
import { addUsers } from "../service/api";
import { useNavigate } from "react-router-dom";
const Container= styled(FormGroup)`
margin:1% auto 0 auto;
width: 60%;
& > div{
    margin-top: 20px
    
}
`

const dataob={
    name:'',
    email:'',
    contact:''
}



const Adduser=()=>{
    const nav=useNavigate()
    function onValChange(e){
        if(e.target.name==="name"){
            dataob.name=e.target.value
        }
        else if(e.target.name==="email"){
            dataob.email=e.target.value
        }
        else{
            dataob.contact=e.target.value
        }
        //console.log(dataob)
        }
        async function adduserdata()
        {
         if(dataob.name===''||dataob.email===''||dataob.contact==='')
         {
            alert("all fields required")
         }
         else
         {
         await addUsers(dataob)
         nav('/alluser')}
        }
   
    return(
        <Container>
            <h1>Add User</h1>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValChange(e)} name="name" />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValChange(e)} name="email" />
            </FormControl>

            <FormControl>
                <InputLabel>Contact</InputLabel>
                <Input onChange={(e)=>onValChange(e)} name="contact"/>
            </FormControl>

            <FormControl>
            <Button variant="contained" onClick={adduserdata}>Submit</Button>
            </FormControl>
        </Container>
    )
}
export default Adduser;