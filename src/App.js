import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import User from './Component/User';
import AddUpdate from './Component/User/AddUpdate';
import CollegeList from './Component/CollegeList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";  

function App() {
  return (
    <div className="App">
      <header className="App-header">      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUpdate />} />
          <Route path="/user/edit/:id" element={<AddUpdate />} />
          <Route path="/listcollege" element={<CollegeList />} />
        </Routes>
      </BrowserRouter>    
      
      </header>
    </div>
  );
}

export default App;
