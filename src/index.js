const application = require('./application');
application.listen(application.get('port'), () => {
  console.log(`La API esta corriendo en el puerto ${application.get('port')}`);
});