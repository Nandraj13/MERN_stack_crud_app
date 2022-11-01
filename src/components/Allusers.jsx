import { Table,TableBody, TableCell, TableHead, TableRow ,styled, Button} from "@mui/material";
import { allUsers,userDelete } from "../service/api";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
const Tab=styled(Table)`
    margin:5% auto 0 auto;
    width: 50%;
`
const  Header=styled(TableHead)`
    background: #000000;
`
const Tabcell=styled(TableCell)`
 color: white;
 font-size: 19px;
`

const Allusers=()=>{
    const nav=useNavigate()
    const [users,setUsers]=useState([])
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers=async()=>{
       let res= await allUsers()
       setUsers(res.data)
      }
    const setuserID=(usersdata)=>{
        nav('/updateuser')
        sessionStorage.setItem("id",usersdata._id)
        sessionStorage.setItem("name",usersdata.name)
        sessionStorage.setItem("email",usersdata.email)
        sessionStorage.setItem("contact",usersdata.contact)
    }
    const deleteUser=async(user)=>{
        await userDelete(user)
        getUsers()
    }
    return(
        <Tab>
            <Header>
                <TableRow>
                    <Tabcell>
                        ID
                    </Tabcell>
                    <Tabcell>Name</Tabcell>
                    <Tabcell>Email</Tabcell>
                    <Tabcell>Contact</Tabcell>
                    <Tabcell></Tabcell>
                    
                </TableRow>
            </Header>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.contact}</TableCell>
                            <TableCell>
                                <Button style={{marginRight:5}} onClick={()=>setuserID(user)}>Edit</Button>
                                <Button style={{marginRight:5}} onClick={()=>deleteUser(user)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Tab>
    )
}
export default Allusers;