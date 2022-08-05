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

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});