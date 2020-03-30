const chokidar  = require('chokidar'); 
const fs = require('fs'); 
const path = require('path'); 

// Initialize watcher.
const watcher = chokidar.watch('./src', {
    ignored: /index.js/, // ignore dotfiles
    persistent: true , 
    ignoreInitial : true ,

  });
   
  // Something to use when events are received.
  const log = console.log.bind(console);
  
  // Add event listeners.
  watcher
    .on('add', p => {

      if(path.parse(p).name[0] !== path.parse(p).name[0].toUpperCase()){
        log(p);
        
     }
      if(path.extname(p)===".js"){
        fs.writeFile(p , `import React from 'react' \n
        
     function ${path.parse(p).name[0].toUpperCase() }${ path.parse(p).name.slice(1).toLowerCase()}(){
      return (<div></div>);

        }
        
        export default ${path.parse(p).name[0].toUpperCase()}${  path.parse(p).name.slice(1).toLocaleLowerCase()} ; 
        ` , function(e){log(e)});

     

      }

    })
     