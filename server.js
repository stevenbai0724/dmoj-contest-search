const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();

// Use this to parse body params from POST requests
app.use(express.json());

// async / await pattern
app.post('/api/contest', async (req, res) => {



    // Uses req.body stores the "body" parameter passed in by fetch
    
    // PUT API KEY HERE
    const API_KEY = "AADIy9PvkshZYb4rYcBUY2VKnU7yOVl7H_GkWHpQtdBxXSIR"
    const requestOptions = {
        headers: { 
            Authorization: `Bearer ${API_KEY}`
        },
    }
    // DMOJ application call
    const res2 = await axios.get(`https://dmoj.ca/api/v2/contest/${req.body.contest}`, requestOptions)
    // All data stored under res2.data...
    var customers = (res2.data.data.object.rankings).slice();

    res.json(customers);

})



const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

