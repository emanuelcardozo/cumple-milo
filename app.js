const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.static("public"));

app.get('/',function(req,res){
  const name = req.query.name || "de 16 a 19hs"
  console.log(req.query)
  res.render('index.ejs', { name })
});

app.get('/lax.min.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/lax.js/lib/lax.min.js');
});

app.get('/js/main.js', function(req, res) {
  res.sendFile(__dirname + '/js/main.js');
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});