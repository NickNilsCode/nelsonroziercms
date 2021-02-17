import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
import Cryptr from 'cryptr';
const cryptr = new Cryptr(config.key);
import config from './config';
import passportConfig from './config/passport';

import userCtrl from './controllers/userCtrl';
import blogCtrl from './controllers/blogCtrl';

import { ListRoot, LoginRoot, BlogRoot } from './roots';

var PORT = process.env.PORT || 3003;
passportConfig(passport);

const app = express();
app.use(session({
    secret: 'banana',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
loginBundle = "",
listBundle = "",
blogBundle = "";

fs.readFile('./dist/js/login.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  loginBundle = data || "";
});
fs.readFile('./dist/js/list.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  listBundle = data || "";
});
fs.readFile('./dist/js/blog.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogBundle = data || "";
});
app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, LoginRoot, "login"));
});
app.get('/login', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, LoginRoot, "login"));
});
app.get('/list', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, listBundle, ListRoot, "list"));
});
app.get('/new', (req, res) => {
  let data = {
    id: "",
    edit: false
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "new"));
});
app.get('/edit/:id', (req, res) => {
  let data = {
    id: req.params.id,
    edit: true
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "edit"));
});;

app.get('/api/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.post('/api/auth', passport.authenticate('local-login'), userCtrl.login);
app.post('/api/signup', passport.authenticate('local-signup'), userCtrl.login);

app.get('/api/getMe', userCtrl.getMe);
app.get('/api/logout', userCtrl.logout);
app.get('/api/users', userCtrl.read);

app.get('/api/blogs/getAll', blogCtrl.read);
app.get('/api/blogs/getThree', blogCtrl.readThree);
app.get('/api/blogs/getOne/:id', blogCtrl.readOne);
app.post('/api/blogs/add', blogCtrl.create);
app.put('/api/blogs/update/:id', blogCtrl.update);
app.get('/api/blogs/delete/:id', blogCtrl.destroy);


app.get('/health', (req, res) => res.send('OK'));

console.log("crash", process.env.MONGODB_URI);
var mongoUri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://'+cryptr.decrypt(config.dbuser)+':'+cryptr.decrypt(config.dbpass)+'@nelsonrozier.1dnpj.mongodb.net/nelsonrozier?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
 console.log("Connected to mongoDB");
});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <style>
                  body { margin: 0; font-family: 'PT Sans'; }
                  a { text-decoration: none; color: #000; }
                </style>
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Open+Sans:wght@700&family=PT+Sans&display=swap" rel="stylesheet">
                <script src="https://kit.fontawesome.com/7fa747235e.js" crossorigin="anonymous"></script>

                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
