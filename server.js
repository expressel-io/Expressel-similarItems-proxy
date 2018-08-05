const express = require('express')
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3010;
// const redirectedPort = 3004;

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, './public')));
app.use('/item/:id', express.static(path.join(__dirname, 'public')));
console.log('hi')

//TODO: Redirect 4000 to 3003

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});

