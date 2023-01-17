

const Course = require('../models/course');
class SitesController{

    homeUrl(req, res){
        Course.find({}, function(err, courses){
            if(!err){
                res.json(courses);
            }else{
                res.status(404).json({error: 'Page Not Found !'});
            }
        })
    }
    contactUrl(req, res){
        res.render('contact');
    }
}

module.exports = new SitesController; 
