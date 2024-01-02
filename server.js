var express = require('express')
var port= process.env.PORT || 3000

var path= require('path')

const app= express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/Home.html'))
})

app.get('/Success', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/success.html'))
})

app.get('/Projects', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/projects.html'))
})

app.listen(port, ()=>{
    console.log(`Server Listening on port: ${port}`)
})