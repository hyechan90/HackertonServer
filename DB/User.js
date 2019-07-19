var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user');
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection Error:'));
db.once('open',function callback(){
    console.log('DB On!');
});

var Article = new mongoose.Schema();
Article.add({
    title: String,
    text: String,
    comment: [String],
    date:Date,
    option:String
});
var articleModel = mongoose.model('article', Article);
exports.Article = articleModel;

var User = new mongoose.Schema();
User.add({
    id: String,
    passwd: String,
    email: String,
    article: [Article]
});
var userModel = mongoose.model('user', User);
exports.User = userModel;
