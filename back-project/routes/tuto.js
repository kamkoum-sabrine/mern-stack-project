const express = require('express');
const router = express.Router();
const tutoCtrl = require('../controllers/tuto')
const mongoose = require('mongoose');

router.post('/addTuto',tutoCtrl.addTuto);
router.put('/updateTuto/:id', tutoCtrl.updateTuto);
router.get('/getTuto',tutoCtrl.getTuto );
router.delete('/deleteTuto/:id', tutoCtrl.deleteTuto);
router.get('/getOneTuto/:id',tutoCtrl.getOneTuto);

  module.exports = router;