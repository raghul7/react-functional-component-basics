import {useEffect,useState} from "react";
import Table from "../../Containers/Table";
import Button from "../../Containers/Button";
import {BackToPrev} from "../../Containers/Rerouting/Reroute";

function CollegeList() {
    const [getCollegeDetails,setGetCollegeDetails] = useState([]);
    const [heading] = useState(["College Name","Country","Webpage"]);
    const [tableData , setTableData] = useState([]);

    useEffect(() =>{
        fetch('http://universities.hipolabs.com/search?country=United+States')
        .then(response => response.json())
        .then(data => setGetCollegeDetails(data));        
    },[]);

    useEffect(() =>{
        console.log({getCollegeDetails})
        setTableData(getCollegeDetails.map((value, index) => ({            
            name: value.name,
            country: value.country,
            webpage : <a href={value.web_pages} target="blank">{value.web_pages}</a>,
            
          })))
    },[getCollegeDetails])

    return ( <div>
        <Button onClickFunction={BackToPrev} buttonName={'Back'}/>
        <Table heading = {heading} data={tableData}/>  
    </div> );
}

export default CollegeList;