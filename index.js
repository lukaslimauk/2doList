import express from "express";
const app = express()
const port = 3000
import ejs from 'ejs';
import bodyParser from 'body-parser';
import * as cheerio from 'cheerio';

let html = '';
const $ = cheerio.load(html);

// Altere o valor do campo de entrada "username"
//$('input[name="username"]').val('Lucrecia');

// Obtenha o HTML modificado
const modifiedHTML = $.html();
//console.log(modifiedHTML);


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));



let itemLista = [];
let itemListaDireita =  [];




app.post("/submit", (req, res) => {
  
  if (req.body.addTo == 'List 2'){
    itemListaDireita.push(req.body.itemLista);
    

  } else {
    
    itemLista.push(req.body.itemLista);

  };



  



  
    res.render('partials/index.ejs', {
    itemLista: itemLista,
    itemListaDireita: itemListaDireita
    

 });

});


app.get('/', (req, res) => {
 

  res.render('partials/index.ejs');
});


  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })