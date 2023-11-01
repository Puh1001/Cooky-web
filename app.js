const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const morgan = require('morgan')

const route = require('./routes/index.route')

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname,'view','src')));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Web listen http://localhost:${port}`);
})