import koaRouer from 'koa-router'
import send from 'koa-send'
import path from 'path'

let router = koaRouer()

function *login(next) {
  yield next
}

function * logout(next) {
  yield next
}

router.get('/', login)

router.get('/logout', logout)

export default router
