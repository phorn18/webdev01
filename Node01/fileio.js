const fs = require('fs');

fs.exists('nodeserver.js', (exists) => {
    console.log("มีไฟล์ nodeserver.js อยู่จริง");
});
console.log('แม่น...');
//fs.rename('nodeserver.js', 'tmp.js');
//fs.rm('tmp.js');