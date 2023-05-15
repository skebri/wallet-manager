const express = require('express')
const cors = require('cors')
const app = express()
const port = 3030
const protocolListRouter = require('./src/routes/protocolList.route')
const walletRouter = require('./src/routes/wallet.route')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017")

app.use(cors())
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

app.use('/protocolList', protocolListRouter);
app.use('/wallet', walletRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
