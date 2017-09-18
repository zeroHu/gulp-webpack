var indexside = require('./index/indexSide.js'),
    util = require('./util.js');
$(function() {
    console.log('这个是index.js 运行的文件');
    indexside.init();
    util.show();
});