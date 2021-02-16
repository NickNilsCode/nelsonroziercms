"use strict";

var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  categories: [{
    type: String
  }],
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": new Date().toLocaleString('en-US')
  },
  share: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  blurb: {
    type: String,
    required: true
  },
  content: [{
    type: {
      type: String
    },
    content: {
      type: String
    }
  }]
});
module.exports = mongoose.model('blogs', blogSchema);