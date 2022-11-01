import express,{Router} from 'express';
import { addUser, selectedUserUpdate,deleteUser } from '../controller/addusercontroller.js';
import { allUser } from '../controller/addusercontroller.js';

const router=express.Router();

router.post('/adduser',addUser)
router.get('/alluser',allUser)
router.post('/alluser',deleteUser)
//router.post('/updateuser')
router.post('/updateuser',selectedUserUpdate)

export default router;