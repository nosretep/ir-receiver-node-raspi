var requirejs = require('requirejs');

requirejs.config({
    nodeRequire : require
});

requirejs([ 'child_process' ],

function(child_process) {
    
    exec = child_process.exec;
    var irw = exec('irw', function(error, stdout, stderr) {
        console.log(JSON.stringify(arguments));
    });
    
    irw.stdout.on('data', function(data) {
        data = String(data);
        console.log(data);
    });

});