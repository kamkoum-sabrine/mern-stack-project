const express = require('express');
const router = express.Router();
const teamCtrl = require('../controllers/team')
const mongoose = require('mongoose');


router.post('/addTeam',teamCtrl.addTeam);
router.put('/updateTeam/:id', teamCtrl.updateTeam);
router.get('/getTeam',teamCtrl.getTeam );
router.get('/getOneTeam/:id',teamCtrl.getOneTeam);

router.delete('/deleteTeam/:id', teamCtrl.deleteTeam);

  module.exports = router;