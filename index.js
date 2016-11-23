const express = require('express')
let app = express()

app.use(express.static(`${__dirname}/app`))


app.get('/wings', (req, res) => {
    
})

app.listen('9999', _ => {
    console.log('Listening on 9999')
})