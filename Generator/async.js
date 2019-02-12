const axios = require('axios');
const fetchData = async () => {
    const { data } = await axios.get('http://127.0.0.1:7001/')
    return data;
}

const main = async () => {
  const res = await fetchData();
  return res;
}

function *foo() {
  const res = yield fetchData();
  return res;
}

const it = foo()
it.next().value
.then(res => console.log(res))

main()
.then(res => console.log(res))