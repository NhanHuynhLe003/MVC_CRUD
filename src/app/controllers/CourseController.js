
//luu y viec them field cho model

const Course = require('../models/home');
const {mongooseElementToObj} = require('../../mongooseTool/mongoose')
class CourseController{
    // /courses/:slug
    showCourse(req, res, next){
        //Course.findOne de lay param tren url va xu ly, req.params.slug de lay ra noi dung param, con voi ?id=123 thi req.query.id
        Course.findOne({slug: req.params.slug})
            .then(course => {
                 res.render('courses/courseDetail', {course: mongooseElementToObj(course)})
                console.log(123)
            })
            .catch(next)

    }
    
}

module.exports = new CourseController(); 
