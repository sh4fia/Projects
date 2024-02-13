const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/users', (req, res) => {
    const users = [{
        id: 1,
        name: 'shafia'
    },
    {
        id: 2,
        name: 'hoshi'
    },
    {
        id: 3,
        name: 'dokyeom'
    }];

    res.json(users);
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})