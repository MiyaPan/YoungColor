process.title = 'myApp';

let express = require('express');
let fs = require('fs');
let mongoose = require('mongoose');


/**
 * http server
 */
let app = express();

app.get('/', (req, res) => {
    res.sendfile('./src/client/pages/index.html');
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

app.get('/project-list', (req, res) => {
    workDraftModel.find({name: 'project'}, (err, works) => {
        if (err) {
            console.error(err);
        }
        res.send(JSON.stringify(works));
    });
});

app.get('/public/images/project/:id', (req, res) => {
    res.sendfile('./public/images/' + req.params.id);
});


// get single picture
app.get('/public/mainPicture', (req, res) => {
    res.sendfile('./public/images/main-big-background.jpg');
});

app.get('/public/images-01.jpeg', (req, res) => {
    res.sendfile('./public/images/images-01.jpeg');
});

app.get('/public/images-big.jpg', (req, res) => {
    res.sendfile('./public/images/images-big.jpg');
});


// app.post('/post', function (req, res) {
//
//     var file = req.files;
//
//     var des_file = "/Users/miyapan/myfile/test.txt";
//
//     fs.readFile(des_file, function (err, data) {
//         console.log("req.file[0].path: " + des_file);
//         fs.writeFile(des_file, data, function (err) {
//             if(err){
//                 console.log("err happened :" + err);
//             } else {
//                 res.send("你成功上传了文件");
//                 console.log(data);
//             }
//         })
//     })
// });
// app.configure(function () {
//     // 设置静态路径 set the static files location /public/img will be /img for users
//     app.use(express.static(__dirname + '/public'));
//     // 把所有的request的log打印到控制台
//     // app.use(express.logger('dev'));
// });

var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is ok, visit: " + host + ":" + port);
});


/*
* dataBase server
*/

let db = mongoose.connection;

mongoose.connect("mongodb://localhost:27017/mydb");

db.on('error', () => console.error.bind(console, 'connection error:'));
db.on('connected', () => console.log('db connected'));
db.once('open', () => console.log('db opened'));

let workDraftSchema = mongoose.Schema({
    name: String,
    title: String,
    createTime: Date,
    uploadTime: { type: Date, default: Date.now()},
    url: String,
    description: String,
    author: String,
    size: Number
});

workDraftSchema.methods.uploaded = (name) => {
    console.log(name + 'stored into db');
};

let workDraftModel = mongoose.model('workDraft', workDraftSchema);

// projects

// let work001 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-01.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work002 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-02.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work003 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-03.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work004 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-04.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work005 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-05.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work006 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-06.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work007 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-07.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work008 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-08.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work009 = new workDraftModel({
//     name: 'project',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/project/project-09.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let work010 = new workDraftModel({
//     name: '火车站',
//     title: '火车站效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/10.jpeg',
//     description: '毕设作品--火车站，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work011 = new workDraftModel({
//     name: '图书馆',
//     title: '图书馆效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/11.jpeg',
//     description: '大学毕设作品--图书馆，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work012 = new workDraftModel({
//     name: '火车站',
//     title: '火车站效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/main.jpg',
//     description: '毕设作品--火车站，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
// work001.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work001.uploaded(work001.name);
// });
//
// work002.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work002.uploaded(work002.name);
// });
//
// work003.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work001.uploaded(work001.name);
// });
//
// work004.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work002.uploaded(work002.name);
// });
//
// work005.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work001.uploaded(work001.name);
// });
//
// work006.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work002.uploaded(work002.name);
// });
//
// work007.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work001.uploaded(work001.name);
// });
//
// work008.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work002.uploaded(work002.name);
// });
//
// work009.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work001.uploaded(work001.name);
// });
//

// images

// let image001 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-01.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image002 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-02.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image003 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-03.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image004 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-04.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image005 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-05.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image006 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-06.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image007 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-07.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image008 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-08.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image009 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-09.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image010 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-10.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image011 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-11.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// let image012 = new workDraftModel({
//     name: 'image',
//     title: 'Architectural Visualization',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/image/image-12.jpg',
//     description: 'Saudi Arabia Villa',
//     author: 'LeeLucky'
// });
//
// image001.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image001.uploaded(image001.name);
// });
//
// image002.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image002.uploaded(image002.name);
// });
//
// image003.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image001.uploaded(image001.name);
// });
//
// image004.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image002.uploaded(image002.name);
// });
//
// image005.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image001.uploaded(image001.name);
// });
//
// image006.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image002.uploaded(image002.name);
// });
//
// image007.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image001.uploaded(image001.name);
// });
//
// image008.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image002.uploaded(image002.name);
// });
//
// image009.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image001.uploaded(image001.name);
// });
//
// image010.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image002.uploaded(image002.name);
// });
// image011.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image001.uploaded(image001.name);
// });
//
// image012.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     image002.uploaded(image002.name);
// });

// workDraftModel.find({name: 'image'}, (err, works) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('work from db: ' + works)
// }).remove().exec();

// workDraftModel.find((err, works) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('work from db: ' + works)
// });

