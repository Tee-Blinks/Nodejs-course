const fs = require('fs')
const path = require('path')


// fs.readFile(path.join(__dirname, 'files', 'starter.txt'),)

// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
// if (err) throw err;
// // console.log(data.toString());
// console.log(data);
// });


//written files

fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'Hello, i am writting you', (err) => {
    if (err) throw err;
    console.log('written files is completed')

    fs.appendFile(path.join(__dirname, 'files', 'new.txt'), 
    "\n\n i have been updated",
    (err) => {
        if (err) throw err;
        console.log('file updated successfully')

        fs.rename(
            path.join(__dirname, 'files', 'new.txt'),
            path.join(__dirname, 'files', 'final.txt'),
            (err) => {
                if (err) throw err;
                console.log('Rename completed successfully')
            }
        )
    }
    )
})


fs.appendFile(path.join(__dirname,  'files', 'index.js'), "console.log('Hello')",
(err) => {
    if (err) throw err;
    console.log('updating 2 completed')
}
)



//   console.log('Hello World')


fs.unlink(path.join(__dirname, 'files', "index.js"), (err) => {
    if (err) throw err;
    console.log("file deleted successfully")
})


process.on('uncaughtException', (err, data) => {
console.error(`'there was an error processing the data:'${err}`);
process.exit(1);
})