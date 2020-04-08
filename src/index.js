'use strict';

const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

function autoreact() {

  const watcher = chokidar.watch('./src', {
    ignored: /index.js/,
    persistent: true,
    ignoreInitial: true,

  });

  const log = console.log.bind(console);

  watcher.on('add', (p, event) => {

    if (path.parse(p).name[0] !== path.parse(p).name[0].toUpperCase()) {
      log("need to be rename : ", p);

    }
    if (path.extname(p) === ".js") {
      fs.writeFile(p, `import React from 'react' \n
        
     function ${path.parse(p).name[0].toUpperCase() }${ path.parse(p).name.slice(1).toLowerCase()}(){
      return (<div></div>);

        }
        
        export default ${path.parse(p).name[0].toUpperCase()}${  path.parse(p).name.slice(1).toLocaleLowerCase()} ; 
        `, function (e) {
        if (e) log(e)
      });



    }

  })
}

module.exports = {
  autoreact
};