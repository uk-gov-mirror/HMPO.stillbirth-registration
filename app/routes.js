//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

router.get('/', (req, res) => {
  res.render('index');
});


// Import and attach other routes
require('./views/latest/_routes')(router);
require('./views/latest/informant/_routes')(router);
require('./views/latest/no-informant/_routes')(router);

require('./views/v1/_routes')(router);
require('./views/v1/informant/_routes')(router);
require('./views/v1/no-informant/_routes')(router);

require('./views/births/v1/_routes')(router);

require('./views/v2/_routes')(router);
require('./views/v2/informant/_routes')(router);
require('./views/v2/no-informant/_routes')(router);

require('./views/v3/_routes')(router);
require('./views/v3/informant/_routes')(router);
require('./views/v3/no-informant/_routes')(router);

require('./views/v4/_routes')(router);
require('./views/v4/informant/_routes')(router);
require('./views/v4/no-informant/_routes')(router);

module.exports = router;

// 




