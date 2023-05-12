const fs = require('fs')
const path = require('path')
//to create folder

if(!fs.existsSync(path.join(__dirname, 'files', 'folder'))){
    fs.mkdir(path.join(__dirname, 'files', 'folder'), (err) =>{
        if(err) throw err;
        console.log('directory successfully created')
        });

} else {
    console.log('directory already exists')
//the if and else statements will prevent the creation of the folder if it had been created previously


}

if (fs.existsSync(path.join(__dirname, 'files', 'directory')))
fs.rmdir(path.join(__dirname, 'files', 'directory'), (err) =>{
    if(err) throw err;
    console.log('directory successfully deleted')
    });

    //to remove an empty folder


