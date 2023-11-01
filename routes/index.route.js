const homeRouter = require('./home.route')
const siteRouter = require('./site.route')
const suggestRouter = require('./suggest.route')
const userRouter = require('./user.route')
const searchRouter = require('./search.route')
const addNewFoodRouter = require('./addNewFood.route')
const interactRouter = require('./interact.route')
const dnRouter = require('./dn.route')
const dkdnRouter = require('./dkdn.route')
const dkRouter = require('./dk.route')
const quenmkRouter = require('./quenmk.route')


function route(app) {

    app.get('/addNewFood/vietmonthamgia', addNewFoodRouter)
    app.get('/addnewFood/thuthach1', addNewFoodRouter)
    app.get('/addnewFood/ten1', addNewFoodRouter)
    app.get('/addnewFood/ten2', addNewFoodRouter)
    app.get('/addnewFood/biquyet', addNewFoodRouter)
    app.get('/addnewFood/mon', addNewFoodRouter)
    app.get('/addnewFood', addNewFoodRouter)

    app.get('/quenmk', quenmkRouter)
    app.get('/dn', dnRouter)
    app.get('/dk', dkRouter)
    app.get('/dkdn', dkdnRouter)
    app.get('/interact', interactRouter)
    app.get('/search', searchRouter)
    app.get('/user', userRouter)

    app.get('/suggest/biquyet3', suggestRouter)
    app.get('/suggest/biquyet2', suggestRouter)
    app.get('/suggest/biquyet1', suggestRouter)
    app.get('/suggest/biquyet', suggestRouter)

    app.get('/suggest/cmt2', suggestRouter)
    app.get('/suggest/cmt1', suggestRouter)
    app.get('/suggest/cmt0', suggestRouter)
    app.get('/suggest/mon4', suggestRouter)
    app.get('/suggest/mon3', suggestRouter)
    app.get('/suggest/mon2', suggestRouter)
    app.get('/suggest/mon1', suggestRouter)
    app.get('/suggest', suggestRouter)

    app.get('/home', homeRouter)
    app.get('/', siteRouter)

}

module.exports = route
