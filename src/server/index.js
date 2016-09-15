import koa from 'koa'
import staticCache from 'koa-static-cache'
import path from 'path'
import ejs from 'koa-ejs'

import CONFIG from './config/config'
import router from './router/index'

const app = koa()

const opts = {
  gzip: true
}

app.use(staticCache(path.join(__dirname, '../../dist'), opts))

app.use(router.routes())

app.listen(CONFIG.PORT, (err) => {
  if (err) throw err
  console.log("Server stated! ", CONFIG.PORT);
});
