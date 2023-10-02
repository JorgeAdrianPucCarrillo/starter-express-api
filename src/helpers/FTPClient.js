const ftp = require('basic-ftp');
const fs = require('fs');

export class FTPClient {
  constructor(host = 'localhost', port = 21, username = 'anonymous', password = 'guest', secure = false) {
    this.client = new ftp.Client();
    this.settings = {
      host,
      port,
      user: username,
      password,
      secure,
    };
  }

  upload(sourcePath, remotePath) {
    const self = this;
    (async () => {
      try {
        await self.client.access(self.settings);
        await self.client.uploadFrom(fs.createReadStream(sourcePath), remotePath);
        // let permissions = await self.changePermissions(permissions.toString(), remotePath);
      } catch (err) {
        console.log(err);
      }
      self.client.close();
    })();
  }

  close() {
    this.client.close();
  }
}
