const Services = require('../models/Services');
const mongoose = require('mongoose');

function getServices  (req, res, next) {
    Services.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
}
function getOneService(req, res, next){
    Services.findOne({_id:req.params.id})
    .then (things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
}

function addServices  (req, res, next){
    //delete req.body._id;
    const services = new Services ({
        ...req.body
    });
    services.save()
    .then(()=>res.status(201).json({message: "Objet enregistré !"}))
    .catch(error => res.status(400).json({ error}));
    
}

function updateServices (req, res, next)  {
    //var id = mongoose.Types.ObjectId(req.params.id);
    Services.updateOne({_id:req.params.id}, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
}

function deleteServices  (req, res, next)  {
   // var id = mongoose.Types.ObjectId(req.params.id);

    Services.deleteOne({ _id:req.params.id})
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}
module.exports = {
    getServices,
    getOneService,
    addServices,
    updateServices,
    deleteServices
}