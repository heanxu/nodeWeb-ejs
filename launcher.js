/**
 * Created by heanhsu on 16/5/23.
 */
'use strict';
const cluster = require('cluster');

if (cluster.isMaster) {
    for (let i = 0; i < 2; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    require('./app.js');
}