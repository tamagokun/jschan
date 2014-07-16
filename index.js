
'use strict';

var jschan                = {};
module.exports            = jschan;

jschan.msg                = require('./lib/message');
jschan.memorySession      = require('./lib/memorySession');
jschan.spdyServerSession  = require('./lib/spdy/server');
jschan.spdyClientSession  = require('./lib/spdy/client');
