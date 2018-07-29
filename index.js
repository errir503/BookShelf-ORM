const Koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require|('koa-body');
const router = require('./Router');
const serve   = require('koa-static');

let app = new Koa();

app.use(koaBody({
    multipart : true,
}));

app.use(cors());

app.use(serve(__dirname + '/public' ));
app.use(router.routes);
app.listen(process.env.PORT || 3000);