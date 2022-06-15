const Clients = require('../models/Clients');
const mongoose = require('mongoose');

function getClients  (req, res, next) {
    Clients.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
}
function getOneClient(req, res, next){
  Clients.findOne({_id:req.params.id})
  .then (things => res.status(200).json(things))
  .catch(error => res.status(400).json({ error }));
}

function addClients  (req, res, next){
    //delete req.body._id;
    const clients = new Clients ({
        ...req.body
    });
    clients.save()
    .then(()=>res.status(201).json({message: "Objet enregistré !"}))
    .catch(error => res.status(400).json({ error}));
    
}

function updateClients  (req, res, next)  {
    //var id = mongoose.Types.ObjectId(req.params.id);
    Clients.updateOne({_id:req.params.id}, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
}

function deleteClients  (req, res, next)  {
   // var id = mongoose.Types.ObjectId(req.params.id);

    Clients.deleteOne({ _id:req.params.id})
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}
/*function deleteClients  (req, res, next)  {
    Clients.findOne({ _id: req.params.id }).then(
      (clients) => {
        if (!clients) {
          res.status(404).json({
            error: new Error('No such Thing!')
          });
        }
        if (clients.userId !== req.auth.userId) {
          res.status(400).json({
            error: new Error('Unauthorized request!')
          });
        }
        Clients.deleteOne({ _id: req.params.id }).then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      }
    )
  };*/
module.exports = {
    getClients,
    getOneClient,
    addClients,
    updateClients,
    deleteClients
}