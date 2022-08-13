import { useEffect,useState } from "react";
import Table from "../../Containers/Table";
import Button from "../../Containers/Button";
import { Link , useNavigate} from "react-router-dom";
import {BackToPrev} from "../../Containers/Rerouting/Reroute";

function User() {
    const [userData, setUserData] = useState([]);
    const [heading] = useState(["Name","Email","Phone"]);
    const [tableData , setTableData] = useState([]);
    let navigate = useNavigate();

    const routeChange = (path) =>{          
        navigate(path);
      }

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => setUserData(data));        
    },[]);

    useEffect(() =>{
        setTableData(userData.map((value, index) => ({
            id : value.id,
            username: value.username,
            email: value.email,
            phone : value.phone,
            editButton :<Link
            to={{
              pathname: "/user/edit/"+value.id,
              state: { id: value.id , isEdit : true },
            }}
          >
             <Button buttonName={"Edit"}  />
          </Link>
          })))
    },[userData])

    return (<div>
        <Button buttonName={"Add User"} onClickFunction={() => routeChange('/user/add')}/>
        <Button onClickFunction={BackToPrev} buttonName={'Back'}/>
        <Table heading = {heading} data={tableData}/>          
    </div> );
}

export default User;