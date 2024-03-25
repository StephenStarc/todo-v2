const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const listItems = []

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    res.render('index', {listItems})
})
app.post('/',(req,res)=>{
listItems.push(req.body.todoInput)

res.redirect('/')
})
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running');
})