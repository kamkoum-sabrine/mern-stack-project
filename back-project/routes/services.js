const express = require('express');
const router = express.Router();
const servicesCtrl = require('../controllers/services')
const mongoose = require('mongoose');

router.post('/addServices',servicesCtrl.addServices);
router.put('/updateServices/:id', servicesCtrl.updateServices);
router.get('/getServices',servicesCtrl.getServices );
router.get('/getOneService/:id',servicesCtrl.getOneService);
router.delete('/deleteServices/:id', servicesCtrl.deleteServices);

  module.exports = router;