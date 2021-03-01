const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');

//to database
connectDB();
//middleware usage
app.use(express.json({ extended: false }));
// app.get('/', (req, res) => res.json({ msg: 'Welcome to Contacts API' }));

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Production route
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server on 5000`));
