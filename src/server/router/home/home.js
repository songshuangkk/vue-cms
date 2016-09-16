"use strict";

import koaRouer from 'koa-router';

let router = koaRouer();

function* getList(next) {
  console.log('/home/list');
  this.body = {data: "Hell World"}
}

router.get('/list.json', getList);

export default router
