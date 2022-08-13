import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';


function Home() {    
    return ( <div>        
        <div><Link to="/user">User Component</Link></div>
        <div><Link to="/listcollege">College list</Link></div>
    </div> );
}

export default Home;