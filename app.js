var express = require('express');
var logger = require('morgan');


var cors = require('cors');
const { PORT = 4000 } = process.env;

var pokemonRouter = require('./routes/pokemon');

var app = express();

app.use(cors());

app.use(logger('dev'));

app.use('/pokemon', pokemonRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Server sucessfully runing on Port ${PORT}`)
})

module.exports = app;


