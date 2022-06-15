const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients')
const mongoose = require('mongoose');

//const auth = require('../middleware/auth');

router.post('/addClients',clientsCtrl.addClients);
router.put('/updateClients/:id', clientsCtrl.updateClients);
router.get('/getOneClient/:id',clientsCtrl.getOneClient);
router.get('/getClients',clientsCtrl.getClients );
router.delete('/deleteClients/:id', clientsCtrl.deleteClients);

  module.exports = router;