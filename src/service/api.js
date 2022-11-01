import axios from 'axios'

const URL='http://localhost:8000'
export const addUsers=async(data)=>{
    try {
        return await axios.post(`${URL}/adduser`,data);
    } catch (error) {
        console.log("error while calling api",error);
    }
}

export const allUsers=async()=>{
    try {
        return await axios.get(`${URL}/alluser`);
    } catch (error) {
        console.log("error while fetching data",error);
    }
}
export const userDelete=async(data)=>{
    try {
        return await axios.post(`${URL}/alluser`,data);
    } catch (error) {
        console.log("error while fetching data",error);
    }
}

/*export const editUsers=async(data)=>{
    try {
        return await axios.post(`${URL}/updateuser`,data);
    } catch (error) {
        console.log("error while calling api",error);
    }
}*/

export const getSelectedUserData=async(data)=>{
    try {
        return await axios.post(`${URL}/updateuser`,data);
    } catch (error) {
        console.log("error while calling api",error);
    }
}
