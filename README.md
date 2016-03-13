# crowdflower-node
A node client for the Crowdflower API

Usage:

``npm install crowdflower``

```
var Crowdflower = require('crowdflower');
var crowdflower = new Crowdflower(API_KEY);
crowdflower.addData(jobNumber,data);
```

Endpoints implemented:

*addData: add rows to an existing job

Implements the following rate limiting:

*10 requests per second
*6200 requests per hour