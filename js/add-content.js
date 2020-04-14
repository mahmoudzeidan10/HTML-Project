// just for testing
var mahmoud = new Date();
var today = mahmoud.getHours();
console.log(today);

var name = "mahmoud";
console.log(name);

var year = "2020";
console.log(year);

var hourNow = prompt('Type down your local time please!');
var g;

if (hourNow >= 18 && hourNow < 24) {
    g = 'Have a nice Evening';
} else if (hourNow >= 12 && hourNow < 18) { g = 'Have a nice Afternoon'; }
else if (hourNow >= 0 && hourNow<12) { g = 'Have a nice morning!'; }
else {
    g = 'Something wrong!';
} 
console.log(g);

 document.write('<h3>' + g + '</h3>');

 console.log(document);
