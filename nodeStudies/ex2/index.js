const express = require('express')
const app =express()
app.get('/',(req,res)=>{
    res.send("ohhhh i neeed reeest")
})
app.listen(3000,()=>{
    console.log('server listening on: http://localhost:3000')
}) 
