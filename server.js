var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var app = require('express').createServer(),
	twitter = require('ntwitter'),
	jsonfile = require('jsonfile'),
	fs = require('fs'),
	cronjob = require('cron').CronJob,
	readline = require('readline');

var events = require('events');
var eventEmitter = new events.EventEmitter();

/*app.get('/', function(req, res) {
  res.send('hello world');
});*/

app.listen(server_port, server_ip_address, function() {
	console.log( "Listening on " + server_ip_address + ", server_port ");
});

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

/*var keyword = [];
var rd = readline.createInterface({
	    input: fs.createReadStream('keyword.txt'),
	    output: process.stdout,
	    terminal: false
});

rd.on('line', function(line) {
	var r = /\\u([\d\w]{4})/gi;
	line = line.replace(r, function (match, grp) {
		return String.fromCharCode(parseInt(grp, 16)); 
	});
	line = unescape(line);
	keyword.push(line.toString());
});

rd.on('close', function(err) {
	var length = keyword.length-1;
	for(var i = length; i>=0; i--) {
		keyword.push("#" + keyword[i]);
	}
	eventEmitter.emit('fileread');
});

eventEmitter.on('fileread', function() {
	new cronjob('0 0 6 * * 1-5', function() {
		var date = new Date().addHours(12).toDateString().split(" ").join("_");
		var file = process.env.OPENSHIFT_DATA_DIR +"/tweets_"+ date +".json";
		var count = 0;

		var twit = new twitter({
			consumer_key: 'oCJMD8RsD2tLXZmlvubD9pIfg',
			consumer_secret: 'da3c724ozRUsZsg2MVrGNOBCisJ8ssSKOpYSuKxvb3gu8LGPi7',
			access_token_key: '1872179137-bORd018hRmxqwnU3w04IsdSO3ZD05vRbxY6F7D0',
			access_token_secret: 'LGhx0s0FmhvVbBwd4g65uXfSayvxlYHOdXFjWjVeMQE5U'
		});

		twit.stream('statuses/filter', { track: [ keyword ] ,language : "th"}, function(stream) {
			var end = 0;
			var start_time = new Date();
				
			stream.on('data', function(data) {
				count++;
				console.log("===========" + count + " Tweets Downloaded ===========");
				fs.appendFile(file, JSON.stringify(data) +"\n", function(err) {
					if (err) throw err;
				});
			});

			stream.on('destroy', function(response) {
				if(end == 0) {
					var end_time = new Date();
					console.log("Start: " + start_time);
					console.log("End: " + end_time);
					end++;
				}
			});
			setTimeout(stream.destroy, 64800000);
		});
	}, null, true, 'Asia/Bangkok');
});*/
