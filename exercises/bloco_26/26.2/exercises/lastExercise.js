const fs = require('fs').promises;

async function createArchives() {
  try{
    const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    
    await Promise.all(array.map((file, index) => {
      fs.writeFile(`file${index + 1}.txt`, file);
    }));

    const files = [
      'file1.txt',
      'file2.txt',
      'file3.txt',
      'file4.txt',
      'file5.txt',
    ];

    const allFiles = await Promise.all(files.map((file) => {
      return fs.readFile(file, 'utf-8')
    }))

    await fs.writeFile('fileAll.txt', allFiles.join(' '));
  }
  catch(err) {
    console.log(err);
  }
}

createArchives();