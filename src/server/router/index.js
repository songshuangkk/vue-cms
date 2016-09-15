import koaRouter from 'koa-router'
import login from './login/index'

let router = koaRouter()

router.use('/', login.routes())

export default router
