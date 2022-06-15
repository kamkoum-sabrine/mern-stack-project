const Team = require('../models/Team');
const mongoose = require('mongoose');

function getTeam  (req, res, next) {
    Team.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
}
function getOneTeam(req, res, next){
    Team.findOne({_id:req.params.id})
    .then (things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
  }
function addTeam  (req, res, next){
    //delete req.body._id;
    const team = new Team({
        ...req.body
    });
    team.save()
    .then(()=>res.status(201).json({message: "Objet enregistré !"}))
    .catch(error => res.status(400).json({ error}));
    
}

function updateTeam  (req, res, next)  {
    //var id = mongoose.Types.ObjectId(req.params.id);
    Team.updateOne({_id:req.params.id}, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
}

function deleteTeam  (req, res, next)  {
   // var id = mongoose.Types.ObjectId(req.params.id);

    Team.deleteOne({ _id:req.params.id})
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}
module.exports = {
    getTeam ,
    getOneTeam, 
    addTeam ,
    updateTeam ,
    deleteTeam
}