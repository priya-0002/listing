import logo from './logo.svg';
import './App.css';
import Nvbar from './Nvbar';
import Home from './Home';
import Greet from'./Greet';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  const t='welcome priya'
  const likes=90;
  const link="www.google.com";
  return (
    <Router>
    <div className="App">
      <Nvbar/>
     
     <div className="content">
     <Switch>
       <Route path="/">
         <Home/>
       </Route>
     </Switch>
     <div className="new">
      
     <Greet name="India" heroName="batman" subject="english"/>
     <Greet name="New-Zeland" heroName="batman" subject="english"/>
     <Greet name="New-Zeland" heroName="batman" subject="english"/>
   
     </div>

     </div>
    </div>
    </Router>
  );
}

export default App;
