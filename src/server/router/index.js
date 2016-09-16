import koaRouter from 'koa-router'
import login from './login/index'
import home from './home/home'

let router = koaRouter()

router.use('/', login.routes())

router.use('/home', home.routes())

export default router
