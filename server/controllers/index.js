// index:

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.response.body = 'welcome'
    }
};
