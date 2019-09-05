const express = require('express');
const app = express();
const path = require('path');

const portNumber = process.env.PORT || 3000; //Heroku? no=local

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

//send every request to index.html and react app
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// local
app.listen(portNumber, () => { console.log('Server listening on 3000')});
