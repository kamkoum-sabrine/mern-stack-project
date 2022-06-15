const express = require('express');
const mongoose = require('mongoose');

const teamRoutes = require('./routes/team');
const newsRoutes = require('./routes/news')
const clientsRoutes = require('./routes/clients')
const servicesRoutes = require('./routes/services')
const tutoRoutes = require('./routes/tuto')
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb://localhost:27017/xd-meta',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
 
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/',teamRoutes);
app.use('/api/',newsRoutes);
app.use('/api/',clientsRoutes);
app.use('/api/',servicesRoutes);
app.use('/api/',tutoRoutes);
app.use('/api/auth', userRoutes);
module.exports = app;

