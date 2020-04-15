// just for testing
var mahmoud = new Date();
var today = mahmoud.getHours();
console.log(today);

var name = "mahmoud";
console.log(name);

var year = "2020";
console.log(year);

// START HERE

function creatG() {

    var hourNow = prompt('Type down your local time please!');
    var g;

    if (hourNow >= 18 && hourNow < 24) {
        g = 'Have a nice Evening';
    } else if (hourNow >= 12 && hourNow < 18) {
        g = 'Have a nice Afternoon';
    }
    else if (hourNow >= 0 && hourNow < 12) {
        g = 'Have a nice morning!';
    }
    else {
        g = 'Welcome!';
    }
    return g;
}





console.log(document);

function showType() {

    var type = prompt('What would you like to watch?');
    while (type !== 'move' && type !== 'series') {
        type = prompt('Chose move OR Series');
    }
    var numberOfOrder = prompt('how many movies or series do want to watch?')
    for (i = 0; i < numberOfOrder; i++) {
        console.log('index' , i)
        if (type === 'move') {
            type = type + '<img src="https://i.ytimg.com/vi/OsnSHP9Wcvo/maxresdefault.jpg">';
        }
        else if (type === 'series') {
            type = type + '<img src="https://c8.alamy.com/comp/H2X3RG/the-word-movie-written-in-watercolor-washes-over-a-white-paper-background-H2X3RG.jpg">';
        }
    }

     return type;


}
