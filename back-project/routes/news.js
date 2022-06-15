const express = require('express');
const router = express.Router();
const newsCtrl = require('../controllers/news')
const mongoose = require('mongoose');

router.post('/addNews',newsCtrl.addNews);
router.put('/updateNews/:id', newsCtrl.updateNews);
router.get('/getNews',newsCtrl.getNews );
router.get('/getOneNews/:id',newsCtrl.getOneNews);

router.delete('/deleteNews/:id', newsCtrl.deleteNews);

  module.exports = router;