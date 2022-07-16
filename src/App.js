
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Component/Login';
import Successful from './Component/Successful';
import LoginAs from './Component/LoginAs';
import Edit from './Component/Edit'
import Registration from './Component/Registration';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginAs/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/successful" element={<Successful/>}/>
          <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </Router>
  );
}

export default App;
