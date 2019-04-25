function MySet() {
  let items = {}
  this.has = function(value) {
    return items.hasOwnProperty(value)
  }
  this.add = function(value) {
    if(!items[value]) {
      items[value] = value
      return true
    } else {
      return false
    }
  }
  this.remove = function(value) {
    if(items[value]) {
      delete items[value]
      return true
    } else {
      return false
    }
  }
  this.clear = function() {
    items = {}
  }
  this.print = function() {
    return items
  }
  this.size = function() {
    return Object.keys(items).length
  }
  this.values = function() {
    let values = []
    for(let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }
}

let a = new MySet()
a.add(1)
console.log(a.size())
a.add(2)
console.log(a.print())
console.log(a.size())
console.log(a.values())
a.add(2)
console.log(a.print())
console.log(a.size())
a.remove(2)
console.log(a.print())
console.log(a.size())
console.log(a.values())