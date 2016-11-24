module.exports = {
 computeAverage: function(num1, num2, num3) {
 return(num1 + num2 + num3) /3;
},

computeFactorial: function(num) {
var factorial = 1;
for(var i =1; i <= num; i++) {
  factorial *=i;
 }
return factorial;
},

 convertTempFtoC: function(feh) 
{
 var c = (5/9)*(feh - 32);
return c;
},

convertTempCtoF: function(cel)
{
var f = (((9/5) * cel) + 32);
 return f;
}
}
