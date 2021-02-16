var BlogModel = require('./../models/blogModel');

module.exports = {
  create: function(req, res){
    let body = {...req.body};
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let dashTitle = body.title.split(" ").join("-");
    body["link"] = `/blog/${year}/${month}/${dashTitle}`;
    body["date"] = date;

    var blog = new BlogModel(body);
    blog.save(function(err, result){
      if(err){
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  },
  read: function(req, res){
    BlogModel
    .find()
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readThree: function(req, res){
    BlogModel
    .find(null, null, { limit : 3 })
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
