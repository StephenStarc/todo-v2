const bodyParser = require('body-parser')
const express = require('express')
const date = require(__dirname+'/day.js')
const app = express()
let listItems = []

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    const todayvalue = date.getDate()
    
    res.render('index', {listItems, todayvalue})
})
app.post('/',(req,res)=>{
listItems.push(req.body.todoInput)

res.redirect('/')
})

app.post('/reset',(req,res)=>{
    listItems = []
res.redirect('/')
})
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running');
})

app.use(express.static('public'))