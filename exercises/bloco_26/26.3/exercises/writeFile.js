// const fs = require('fs').promises;

// async function createFile(fileName, content) {
//   await fs.writeFile(fileName, content);
//   return 'ok'
// };

// module.exports = createFile;

const fs = require('fs');

function createFile(fileName, content) {
  fs.writeFileSync(fileName, content);
  return 'ok'
};

module.exports = createFile;