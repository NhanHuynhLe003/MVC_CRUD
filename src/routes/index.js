

const coursesRoute = require('./courses')
const siteRouter =require('./site')
function route(app){
    app.use('/courses', coursesRoute)
    app.use('/', siteRouter)

}
module.exports = route
