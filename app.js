var potrace = require('potrace'),
fs = require('fs');
const inputFolder = './input/';
const outputFolder = './output/';


//Output Parameters by defect is #000000
var params = {
    //background: '#000000',
    //color: '#000000',
    //threshold: 120
};

//Read all files from inputFolder, convert to svg and save in otputFolder
fs.readdirSync(inputFolder).forEach(file => {
    potrace.trace('input/' + file, params,function(err, svg) {
        if (err) throw err;
        fs.writeFileSync(outputFolder + file.slice(0, -4) + ".svg", svg);
    });
})
