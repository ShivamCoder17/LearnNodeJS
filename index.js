console.log("Hi THESG!");

// I have installed 3rd party npm package cli-color and going to show how to use it
// We have to installed 3rd party packages whenever we want to use it.

// const cliColor = require('cli-color');
// console.log(cliColor.red("Stop!"));
// console.log(cliColor.yellow("Be Ready!"));
// console.log(cliColor.green("Go!"));
// console.log(cliColor.green.bgWhite.underline("Caption can be written here!"));


// Now demonstrating Core Modules and its uses
// Core Modules is installed at the beginning of the project and it contains all the default packages.
// Those default packages need not to be installed like 3rd party packages. They are already present inside node modules.
// Path Module
const path = require('path');
console.log("Gives us the Directory name ",__dirname);
console.log("Gives us the File name ",__filename);

console.log("Folder name ",path.dirname(__filename));
console.log("File name ",path.basename(__filename));
console.log("File extension name ",path.extname(__filename));
console.log("File Parse ",path.parse(__filename));
console.log("Join path ",path.join(__dirname,"shivam","server.js")); // it can join n number of strings with folder or file name

// OS Module - gives us the info on users OS
const os = require('os');
console.log("OS Type",os.type());
console.log("OS Platform",os.platform());
console.log("CPU Architecture",os.arch());
console.log("CPU Details",os.cpus());
console.log("CPU Free Memory",os.freemem());
console.log("CPU Total Memory",os.totalmem());

// FS Module -  helps us to create file and do dile related operations
const fs = require('fs');
fs.mkdir(path.join(__dirname,"shivam"),(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Folder created successfully!");
})