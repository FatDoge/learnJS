process.stdin.setEncoding('utf8');

var arr = [];
var bool = 0;
var n = 0;
var longest = 1;
var a = [];
var dp = [];

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    arr.push(chunk.trim())
  }

  if (bool >= 2) {
    n = arr[0];
    process.stdin.emit('end')
  }

  bool++

});


process.stdin.on('end', function () {

  a = arr.slice(1).join(" ").split(" ").map(function (index, elem) {
    return parseInt(index);
  })

  for (let i = 0; i < n; i++) {
    dp[i] = 1;
  }

  for (let i = 1; i < n; i++) {

    for (let j = 0; j < i; j++) {
      if (a[i] > a[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
      longest = Math.max(dp[i], longest)
    }

  }

  console.log("最长长度为:" + longest);


  process.stdout.write('end');
});