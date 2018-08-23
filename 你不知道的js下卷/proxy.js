var obj = { a: 1 },
    handlers = {
        get(target, key, context) {
            // 注意： target === obj,
            // context === pobj
            console.log("accessing: ", key);
            return Reflect.get(
target, key, context
            );
        }
    },
    pobj = new Proxy(obj, handlers);
console.log(obj.a);
// 1
console.log(pobj.a);
// accessing: a
// 1
try {
    new Function("( () => {} )");
    ARROW_FUNCS_ENABLED = true;
}
catch (err) {
    ARROW_FUNCS_ENABLED = false;
}