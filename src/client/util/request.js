class Request {

  doGet(url, cb) {
    fetch(url, {
      'method': 'GET',
      'content-type': 'text/json'
    })
    .then((value) => {  // check status
      if (value.status != 200) throw new Error("请求失败")
      return value;
    })
    .then((value) => {  // get json object
      return value.json()
    })
    .then((value) => {  // get data
      cb(value.data);
    })
    .catch((err) => {

    });
  }

  doPost(url, cb) {
    fetch(url, {

    })
    .then((value) => {})
    .catch((err) => {});
  }
}

var request = "";

if (!(request instanceof Request)) {
  request = new Request();
}

export default request
