/*
* dataBase server
*/
const projects = require('./src/projectsConfig');
const images = require('./src/imagesConfig');
let mongoose = require('mongoose');

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
    size: Number,
    detailPictures: []
});

workDraftSchema.methods.uploaded = (name) => {
    console.log(name + 'stored into db');
};

let workDraftModel = mongoose.model('workDraft', workDraftSchema);

// projects
// let works = [];
// projects.forEach(projectConfig => {
//     works.push(new workDraftModel(projectConfig));
// });
//
// works.forEach(work => {
//     work.save((err) => {
//         if(err) {
//             return console.error(err);
//         }
//         work.uploaded(work.name);
//     });
// });
//
// images
// let imageWorks = [];
// images.forEach(imageConfig => {
//     imageWorks.push(new workDraftModel(imageConfig));
// });
// imageWorks.forEach(image => {
//     image.save((err) => {
//         if(err) {
//             return console.error(err);
//         }
//         image.uploaded(image.name);
//     });
// });
//
// workDraftModel.find({name: 'project'}, (err, works) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('work from db: ' + works)
// }).remove().exec();
//
// workDraftModel.find({name: 'image'}, (err, works) => {
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

module.exports = workDraftModel;
