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

app.get('/list', (req, res) => {
    workDraftModel.find((err, works) => {
        if (err) {
            console.error(err);
        }
        res.send(JSON.stringify(works));
    });
});

app.get('/public/images/:id', (req, res) => {
    res.sendfile('./public/images/' + req.params.id);
});

app.get('/public/mainPicture', (req, res) => {
    res.sendfile('./public/images/main.jpg');
});

//
// app.get('/get', function (req, res) {
//     var params = {
//         "name": req.query.name,
//         "email": req.query.email
//     };
//     res.send("收到参数" + JSON.stringify(params));
// });
//
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
// let work001 = new workDraftModel({
//     name: '图书馆',
//     title: '图书馆效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/01.jpeg',
//     description: '大学毕设作品--图书馆，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work002 = new workDraftModel({
//     name: '火车站',
//     title: '火车站效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/02.jpeg',
//     description: '毕设作品--火车站，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work003 = new workDraftModel({
//     name: '图书馆',
//     title: '图书馆效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/03.jpeg',
//     description: '大学毕设作品--图书馆，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work004 = new workDraftModel({
//     name: '火车站',
//     title: '火车站效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/04.jpeg',
//     description: '毕设作品--火车站，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work005 = new workDraftModel({
//     name: '图书馆',
//     title: '图书馆效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/05.jpeg',
//     description: '大学毕设作品--图书馆，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work006 = new workDraftModel({
//     name: '火车站',
//     title: '火车站效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/06.jpeg',
//     description: '毕设作品--火车站，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work007 = new workDraftModel({
//     name: '图书馆',
//     title: '图书馆效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/07.jpeg',
//     description: '大学毕设作品--图书馆，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work008 = new workDraftModel({
//     name: '火车站',
//     title: '火车站效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/08.jpeg',
//     description: '毕设作品--火车站，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
//     author: 'LeeLucky'
// });
//
// let work009 = new workDraftModel({
//     name: '图书馆',
//     title: '图书馆效果图',
//     createTime: new Date(2012, 3, 11),
//     uploadTime: new Date(2018, 5, 6),
//     url: './public/images/09.jpeg',
//     description: '大学毕设作品--图书馆，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，' +
//     '啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢，啦啦啦啦啦啦啦好棒啊啊啊啊简直厉害了呢',
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
// work010.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work002.uploaded(work002.name);
// });
// work011.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work001.uploaded(work001.name);
// });
//
// work012.save((err) => {
//     if(err) {
//         return console.error(err);
//     }
//     work002.uploaded(work002.name);
// });
//
// workDraftModel.find((err, works) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('work from db: ' + works)
// }).remove().exec();

workDraftModel.find((err, works) => {
    if (err) {
        console.error(err);
    }
    console.log('work from db: ' + works)
});

