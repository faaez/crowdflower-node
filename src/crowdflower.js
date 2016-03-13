var request = require('request');
var limiter = require('limiter').RateLimiter;

function Crowdflower(API_KEY) {
    var API_KEY = API_KEY;
    var secondLimiter = new limiter(10,'second');
    var hourLimiter = new limiter(6200,'hour');

    this.addData = function(jobNumber,data) {
        hourLimiter.removeTokens(1,function(err,remainingRequests) {
            secondLimiter.removeTokens(1,function(err,remainingRequests){
                console.log('remainingRequests: '+remainingRequests);
                var request_url = "https://api.crowdflower.com/v1/jobs/"+jobNumber+"/units.json";
                console.log(request_url);
                var headers = {'content-type': 'application/json'}
                var payload = {
                            'key':API_KEY,
                            'unit': {
                                        'data': data
                                    }
                        }
                console.log(payload);
                request.post(request_url,{headers:headers,form:payload},function(err,response,body){
                    console.log(body);
                });
            });
        });
    }
}

module.exports = Crowdflower;


