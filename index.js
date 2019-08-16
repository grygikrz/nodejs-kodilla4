var fs = require('fs');
var colors = require('colors');

fs.readdir('.', function(err, data) {
    console.log(data);
    fs.writeFile('./text.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
