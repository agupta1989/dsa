const fs = require('fs');

const message = "Hello world this is me, a simple text.";

const writeStream = fs.createWriteStream(__dirname + '/dummy.txt');

writeStream.on('open', (fd) => {
  console.log('Write stream Open: FD', fd);
});

writeStream.on('ready', () => {
  console.log('Write stream is ready');
});

let i = 0;
const MAX_LIMIT = 1000;
let result = true;
while (i < MAX_LIMIT && result) {
  result = writeStream.write(`${i}. ${message}\n`);
  console.log(i, result)
  i += 1;
}
writeStream.close();

writeStream.on('close', () => {
  console.log('Write stream closed');
})
