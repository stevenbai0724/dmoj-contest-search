import './customers.css'
import React, {useState, useEffect} from 'react';
function List() {


    const [rankings, setRankings] = useState([])
    const [query, setQuery] = useState('');
    const [contest, setContest] = useState('');

    const search = evt => {
        if(evt.key === "Enter"){
            console.log('query ' + query);
            setContest(query);
            console.log('contest ' + contest);
            
            
        }
      }
    useEffect (() => {

        console.log("API CALL")
        const postBody = {
            contest: contest
        }
        fetch('/api/contest', {
            method: "POST", 
            body: JSON.stringify(postBody),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
            .then(users => {
                setRankings(users)
                console.log(users)
            })

    }, [contest])
    var rank = 1;
    var link = `https://dmoj.ca/contest/${contest}/ranking/`;
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Contest rankings</h1>

        <input
            type = "text"
            className = "search-box"
            placeholder = "Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          
          >
          </input>

        <h2>Rankings for <a href = {link} >{contest}</a> </h2>
        <ul>
        {rankings.map(user => <li>{rank++}. {user.user}  score: {user.score}</li>)}
        </ul>
         
      </header>
    </div>
  );
}
export default List;
