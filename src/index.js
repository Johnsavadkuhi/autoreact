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

      if(path.extname(p)===".js"){
        
        fs.writeFile(p , `hello` , function(e){log(e)}); 



      }

    })
    