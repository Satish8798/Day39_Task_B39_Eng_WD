const express = require( 'express' );
const taskRouter = require('./routers/taskRouter')

const app = express();

app.listen(8000);

app.use('/',taskRouter)


