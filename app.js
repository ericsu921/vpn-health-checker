// usage: npm start [url to ping]

const notifier = require('node-notifier');
const ping = require('ping');

var host = process.argv[2]
var interval = 3000;
var alertShown = false;
var numFailures = 0;

setInterval(() => fetch(host), interval);

function fetch(host) {
  ping.sys.probe(host, function(reachable) {
    if (!reachable && !alertShown) {
      numFailures += 1;
      if (numFailures > 5) {
        notifier.notify(notification(host));
        alertShown = true;
      }
    } else if (reachable) {
      numFailures = 0;
      alertShown = false;
    }

    var msg = reachable
      ? 'host ' + host + ' is alive'
      : 'host ' + host + ' is dead';

    console.log(msg);
  });
}

function notification(host) {
  return {
    title: 'Your VPN has disconnected',
    message: 'Unable to reach ' + host
  }
}