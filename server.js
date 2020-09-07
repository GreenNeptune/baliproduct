require('dotenv').config();

const connectDB = require('./config/DB');
const cors = require('cors');
connectDB();

const express = require('express');
const app = express();

// Middleware
app.use(cors())
app.use(express.json());


app.use('/api_v1/products', require('./routes/api/product'));
app.use('/api_v1/users', require('./routes/api/user'));
app.use('/api_v1/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))