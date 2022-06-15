const Tuto = require('../models/Tuto');
const mongoose = require('mongoose');

function getTuto  (req, res, next) {
    Tuto.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
}
function getOneTuto(req, res, next){
    Tuto.findOne({_id:req.params.id})
    .then (things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
  }

function addTuto  (req, res, next){
    //delete req.body._id;
    const tuto = new Tuto ({
        ...req.body
    });
    tuto.save()
    .then(()=>res.status(201).json({message: "Objet enregistré !"}))
    .catch(error => res.status(400).json({ error}));
    
}

function updateTuto  (req, res, next)  {
    //var id = mongoose.Types.ObjectId(req.params.id);
    Tuto.updateOne({_id:req.params.id}, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
}

function deleteTuto  (req, res, next)  {
   // var id = mongoose.Types.ObjectId(req.params.id);

    Tuto.deleteOne({ _id:req.params.id})
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}
module.exports = {
    getTuto,
    getOneTuto,
    addTuto,
    updateTuto,
    deleteTuto
}