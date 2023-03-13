const ftpClient = require('ssh2-sftp-client');
require('dotenv').config();
const path = require('path');

const client = new ftpClient();
const sourcePath = path.join(__dirname,'dist');

const config = {
    host: 'access-5000011501.ud-webspace.de',
    port: 22,
    username: process.env.usr,
    password: process.env.pw
}

console.log(`Connecting to ${config.host}:${config.port} ...`);
client.connect(config).then(() => {
    console.log(`Connection successfully established`);
    console.log('Uploading Files...');
    return client.uploadDir(sourcePath,'/myProfile');
}).then(response => {
    console.log(response);
}).catch(err => {
    console.log(err, 'catch error');
});



