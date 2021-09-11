import './App.css'; 
import React, {useState, useEffect} from 'react';
import List from './components/customers/list'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        

          
          <List></List>
        
      </header>
    </div>
  );
}
export default App;
