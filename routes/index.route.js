const homeRouter = require('./home.route')
const siteRouter = require('./site.route')
const suggestRouter = require('./suggest.route')
const userRouter = require('./user.route')


function route(app) {

    app.get('/user.html', userRouter)
    app.get('/suggest.html', suggestRouter)
    app.get('/home', homeRouter)
    app.get('/', siteRouter)

}

module.exports = route
