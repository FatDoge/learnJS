var data = {
    key1: 'str1',
    key2: {
        key3: 'str3',
        key4: 'str4',
        key5: {
            key6: 'str6',
            key7: {
                key8: 'str8'
            }
        }
    },
    key9: 'str9'
    //...
}


function treeTraversal(data) {
    let path = new Array();

    function func(data) {
        for (let node in data) {
            path.push(node);
            if (typeof (data[node]) === 'object') {
                func(data[node])
            } else {
                console.log(path.join(' '), data[node]);
            }
            path.pop();
        }
    }
    func(data)
}
treeTraversal(data);