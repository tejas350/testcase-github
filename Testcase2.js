const fs = require('fs')

function readFileContent(fileName){
    fs.readFile(fileName, function(err, data){
        if(err){
            console.log("An error occurred"); // No specific error info
        }
        console.log("File content: " + data) // No check if data is undefined
    })
}

readFileContent("sample.txt")
