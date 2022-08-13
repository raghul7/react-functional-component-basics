import Input from "../../Containers/Input";
import Button from "../../Containers/Button";
import {useState, useEffect} from "react";
import {BackToPrev} from "../../Containers/Rerouting/Reroute.js";
import { useLocation , useParams } from "react-router-dom"

function AddUpdate() {
    const params = useParams();    
    const [userData,setUserData] = useState({
        username : "",
        email: "",
        phone: ""
    })

    const onChangeUserDetails =(e) =>{
        const {
            target: { name, value }
          } = e;          
        setUserData((prevState) => ({
            ...prevState,
            [name] : value,
          }));
    }
    
    useEffect(() =>{
        params.id && fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then(data => setUserData(data));  
    },[params])

    const onUserSubmit =() =>{
        console.log(userData)
        alert("user submitted successfully")
    }
    
    return (<div>
        Addupdate
        <Input type='text' value = {userData.username} name ='username' labelName={'Name'} onChangeFunction={onChangeUserDetails}/>
        <Input type='text' value = {userData.email} name ='email' labelName={'Email'} onChangeFunction={onChangeUserDetails}/>
        <Input type='text' value = {userData.phone} name ='phone' labelName={'Phone'} onChangeFunction={onChangeUserDetails}/>
        <Button onClickFunction={onUserSubmit} buttonName={'Submit user Details'}/>
        <Button onClickFunction={BackToPrev} buttonName={'Back'}/>
    </div>  );
}

export default AddUpdate;