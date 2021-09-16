//import logo from './logo.svg';
import './App.css';
/*import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
*/

//componets and pages import`s
//import AppLayout from './pages/layout/AppLayout.jsx';
//import AboutMe from './pages/AboutMe.jsx'
import HomePage from './pages/HomePage';
import Proyects from './pages/Proyects.jsx';
import AppLayout from './pages/layout/AppLayout';

function App() {
  return (
    <div className="App">
      <AppLayout></AppLayout>
      <HomePage></HomePage>
      <Proyects></Proyects>

    </div>
  );
}

export default App;
