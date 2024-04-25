const fs = require("fs");
const path = "Task2.txt";
const text = "Hello, World!\n";

fs.appendFile(path, text, (err) =>{
    if (err) {console.log("Error");}
    else {console.log("Text included to the file");}
});