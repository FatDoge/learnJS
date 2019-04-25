const localStoragePro = {
  setItem(key, value) {
    Object.prototype.toString.call(value) === '[object Object]' || '[object Array]' ?
      localStorage.setItem(key, JSON.stringify(value)) :
      localStorage.setItem(key, value)
  }
}