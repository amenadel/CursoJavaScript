const express    = require('express')
const exphbs     = require('express-handlebars')
const app        = express()
const path       = require('path')
const db         = require('./db/connection')
const bodyParser = require('body-parser')
const Job        = require('./models/job')
const Sequelize  = require('sequelize')
const Op         = Sequelize.Op;


const PORT = 3000;


app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`)
})

//Body parser

app.use(bodyParser.urlencoded({extended: false}))

//handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

//static folder
app.use(express.static(path.join(__dirname, 'public' )))


//db connection

db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso")
    })
    .catch(err => {
        console.log("erro: ", err)
    })


//Routes

app.get('/', (req, res) => {

    let search = req.query.job
    let query  ='%'+search+'%'//Ph > PHP

    if(!search){
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index',{
                jobs
            })
        })
        .catch(err => console.log(err))
    }else{
        Job.findAll({
        where: {title: {[Op.like]: query}},    
        order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index',{
                jobs
            })
        })
    }  
});

// jobs routes

app.use('/jobs', require('./routes/jobs'))
