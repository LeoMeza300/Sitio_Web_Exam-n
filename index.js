const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;


Let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartial(directory:__dirname + '/viewa/partials');
app.use(express.static(__dirname + '/public'));

app.use(fn:'/', pintoresRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://ProfeToledo:Toledo123@mezajacquez-io8l4.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(cadena, Options:{userNewUrlParser: true, useUnifiedTopology: true})
.then(()=>
    console.log('conexion establecida =oD');
})
.catch(err=> console.log(err));

app.listen(PUERTO,()=>{
    console.log('Escuchando El Puerto...')
});