

const Course = require('../models/course');
const {mongooseListToObj} = require('../../mongooseTool/mongoose');
class SitesController{

    homeUrl(req, res, next){
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mongooseListToObj(courses)
                });
            })
            .catch(next)
    }
    contactUrl(req, res){
        res.render('contact');
    }
}

module.exports = new SitesController; 
