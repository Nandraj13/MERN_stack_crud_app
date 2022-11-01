import { AppBar,Toolbar,styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header= styled(AppBar)`
background: #111111;
`;
const Tabs= styled(NavLink)`
font-size: 22px;
margin-right: 25px;
color: white;
text-decoration: none;
`;

const navbar=()=>{
    return(
       <Header position='static'>
            <Toolbar>
                <Tabs to='/'>User Manager</Tabs>
                <Tabs to='/adduser'>Add user</Tabs>
                <Tabs to='/alluser'>All users</Tabs>
            </Toolbar>
       </Header>
    )
}
export default navbar;