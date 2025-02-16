const express = require('express');
const { sequelize } = require('./utils/database.js');
const productRoutes = require('./routes/products.js');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productRoutes);

app.get('/', (request, response) => {
  const data = { title: 'Home Page', message: 'Welcome to Node.js with EJS!' };
  response.render('home', data);
  response.json(data);
});

app.get('/store', (request, response) => {
  response.write("Store page")
  // response.write(`request.url : ${request.url} \n`);
  response.end();
})

// 404 Middleware 
app.use((req, res, next) => {
  next({ status: 404, message: "The page you are looking for was not found." });
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(statusCode).json({ status: statusCode, error: errorMessage });
  res.end();
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been");
  } catch (error) {
    console.log(`Error : ${error}`);
  }
  console.log(`server running on port ${PORT}`);
})
