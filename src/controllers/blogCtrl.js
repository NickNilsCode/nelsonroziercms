var BlogModel = require('./../models/blogModel');

module.exports = {
  create: function(req, res){
    var blog = new BlogModel(req.body);
    blog.save(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function(req, res){
    BlogModel
    .find(req.query)
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function(req, res){
    BlogModel
    .findById(req.params.id)
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res){
    BlogModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    BlogModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
