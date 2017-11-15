// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
    
var fs = require('fs'),
textarea = document.getElementsByTagName('textarea')[0],
button = document.getElementsByTagName('button')[0];

function writeFile() {
    var text = textarea.value;

    fs.writeFile('message.txt', text, 'utf8',function(err) {
        if (err) {
            throw err;
        } else {
            console.log('file saved!')
        }
    });
}

button.onclick = writeFile;