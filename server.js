const workDraftModel = require('./dataBase');
const express = require('express');
const bodyParser = require('body-parser');
process.title = 'myApp';

/**
 * http server
 */
let app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendfile('./src/client/views/index.html');
});

app.get('/dist/js/bundle.js', (req, res) => {
    res.sendfile('./dist/js/bundle.js');
});

app.get('/dist/styles.css', (req, res) => {
    res.sendfile('./dist/styles.css');
});

// get picture list
app.get('/image-list', (req, res) => {
    workDraftModel.find((err, works) => {
        if (err) {
            console.error(err);
        }
        res.send(JSON.stringify(works));
    });
});

app.get('/public/images/image/:id', (req, res) => {
    res.sendfile('./public/images/' + req.params.id);
});

app.post('/project-list', (req, res) => {
    const title = req.body.title;
    let query = title ? {name: 'project', title} : {name: 'project'};
    workDraftModel.find(query, (err, works) => {
        if (err) {
            console.error(err);
        }
        res.setHeader("Content-Type","application/json");
        res.send(JSON.stringify(works));
    });
});

app.get('/public/images/project/:id', (req, res) => {
    res.sendfile('./public/images/' + req.params.id);
});

// get detail
app.get('/project/detail/:id', (req, res) => {
    workDraftModel.find({_id: req.params.id}, (err, projectDetail) => {
        if (err) {
            console.error(err);
        }
        res.send(JSON.stringify(projectDetail));
    });
});

// detail pictures
app.get('/detail/:projectId/:detailId', (req, res) => {
    res.sendfile('./public/images/' + req.params.projectId + '-' + req.params.detailId);
});

// get single picture
app.get('/public/main-picture-01', (req, res) => {
    res.sendfile('./public/images/main-01.jpg');
});

app.get('/public/main-picture-02', (req, res) => {
    res.sendfile('./public/images/main-02.jpg');
});

app.get('/public/main-picture-03', (req, res) => {
    res.sendfile('./public/images/main-03.jpg');
});

app.get('/public/images-01.jpeg', (req, res) => {
    res.sendfile('./public/images/images-01.jpeg');
});

app.get('/public/images-big.jpg', (req, res) => {
    res.sendfile('./public/images/images-big.jpg');
});

var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is working, visit: " + host + ":" + port);
});
