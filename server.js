require('dotenv').config()
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT

app.set('view engine', 'ejs')

app.use(express.static("public"));

app.get('/old',function(req,res){
  res.render('v1.ejs')
});

app.get('/',function(req,res){
  const { name="Amiguit@", family="Ema" } = req.query
  const phone = family && family === "Carla" ? process.env.PHONE_CARLA : process.env.PHONE_EMA
  const confirmMessage = encodeURIComponent(`Genial! Contá conmigo ${family}.`)
  const cancelMessage = encodeURIComponent(`Gracias ${family}, pero no puedo ir.`)
  const whatsappConfirmLink = `https://wa.me/+540${phone}/?text=${confirmMessage}`
  const whatsappCancelLink = `https://wa.me/+540${phone}/?text=${cancelMessage}`

  res.render('v2.ejs', { name, whatsappConfirmLink, whatsappCancelLink })
});

app.get('/lax.min.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/lax.js/lib/lax.min.js');
});

app.get('/js/animation.js', function(req, res) {
  res.sendFile(__dirname + '/js/animation.js');
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});