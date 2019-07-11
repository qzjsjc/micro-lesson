// index:
const fs = require('fs');
const path = require('path');
const listPath = '/usr/local/nginx/html/practice';
// const listPath = path.resolve(__dirname,'../practice');
module.exports = {
    'GET /': async (ctx, next) => {
        ctx.response.body = 'welcome'
    },
    'GET /list': async (ctx, next) => {
        let list = fs.readdirSync(listPath);
        ctx.response.body = list;
    }
};
