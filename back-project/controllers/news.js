const News = require('../models/News');
const mongoose = require('mongoose');

function getNews  (req, res, next) {
    News.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
}
function getOneNews(req, res, next){
    News.findOne({_id:req.params.id})
    .then (things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
  }
function addNews  (req, res, next){
    //delete req.body._id;
    const news = new News ({
        ...req.body
    });
    news.save()
    .then(()=>res.status(201).json({message: "Objet enregistré !"}))
    .catch(error => res.status(400).json({ error}));
    
}

function updateNews  (req, res, next)  {
    //var id = mongoose.Types.ObjectId(req.params.id);
    News.updateOne({_id:req.params.id}, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
}

function deleteNews  (req, res, next)  {
   // var id = mongoose.Types.ObjectId(req.params.id);

    News.deleteOne({ _id:req.params.id})
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}
module.exports = {
    getNews,
    getOneNews,
    addNews,
    updateNews,
    deleteNews
}