"use strict";

import koaRouer from 'koa-router';

let router = koaRouer();

var params = {
  paramName: 'param',
  paramType: 'String',
  paramIsNeed: true,
  paramMemo: 'param memo',
  paramExample: 'asdlfjasd'
}
var json = {
  interfaceName: 'Text',
  creator: 'SongShuang',
  params: [
    params, params, params, params, params
  ]
}
var data = [
  json, json, json, json
]

function* getList(next) {
  console.log('/home/list');
  this.body = {data: data}
}

router.get('/list.json', getList);

export default router
