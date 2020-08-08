import React,{useState} from 'react';
import Main from './components/Main';
import Update from './components/Update';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';

function App() {
  const [money,setMoney] = useState([{type:'dollar',value: 4},{type:'euro',value: 5},{type:'shekel',value: 1}]);
  const [results,setResults] = useState([]);
  function update(money,results){
    setMoney(money);
    setResults(results);
  }

  function back(money){
    setMoney(money);
  }

  return (
    <div>
      <Router>
         <Switch>
            <Route exact path="/" render={() => (<Main update={update} money={money} results={results}/>)}/>
            <Route exact path="/update" render={() => (<Update money={money} back={back}/>)}/>
          </Switch> 
            </Router>
    </div>
  );
}

export default App;
