const fs = require('fs')
const path = require('path')
//taking large data from lorem to stream
const rs = fs.createReadStream(path.join(__dirname, 'new-files', 'lorem.txt'), { encoding: 'utf8'
 });

 const ws = fs.createWriteStream(
    path.join(__dirname, 'new-files',  'stream.txt')
 );


//  rs.on('data', (chunkedData) => {
//     ws.write(chunkedData);
//     console.log('chunked data stream successfully')
//  });


rs.pipe(ws)