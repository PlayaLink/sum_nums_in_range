
function sumAll(arr) {
  var sum = 0;
  //ES5
  var min = arr.reduce(function(a, b){
    return Math.min(a, b);
  });
  //ES6
  var max = Math.max(...arr);
  for(let i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}
