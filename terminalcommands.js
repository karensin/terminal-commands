const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {

 fs.exists('newFolder.txt', (exists) => {
      if(exists){
      console.log('file already existed');
    }else {
      fs.writeFile('newFolder.txt', 'this is a new file', 'utf8', (err) => {
	       if (err) throw err;
	        console.log('file created');
        });
  	}
  })
}

module.exports.mkdir = () => {
  fs.mkdir('./terminalcommands', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('new directory created')
});


};
