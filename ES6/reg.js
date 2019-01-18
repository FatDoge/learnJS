const provinceReg = /\d\d0000/
const a = 150500
console.log(provinceReg.test(a))


/**
 * 根据locationId反推出orgin:['root|provinceId|cityId']
 * @param {*} id
 */
const locationidToOrigin = id => {
  if (!id) return;
  const provinceReg = /\d\d0000/;
  const p = ['root'];
  const res = [];
  if(provinceReg.test(id)){
    p.push(id)
  } else {
    p.push(id - id % 10000, id);
  }
  return res.concat(p.join('|').toString());
};

console.log(locationidToOrigin(a))