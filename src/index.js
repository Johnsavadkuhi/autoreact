const chokidar  = require('chokidar'); 

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
    .on('add', path => {

    })
    
    .on('change', path => log(`File ${path} has been changed`))
    .on('unlink', path => log(`File ${path} has been removed`));
   
  