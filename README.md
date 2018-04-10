# VPN Health Checker
This simple node app periodically pings a given url and sends a push notification when the url is unreachable.

## Setup
1. `cd` to project directory `vpn-health-checker/`
2. run the command: `npm install`

## Usage
`npm start [url to ping]`

> Note: Make sure the url is stable and can only be hit when behind your VPN. Also, for the notifications to work, you must allow notifications from __terminal-notifier__, which can be set in your System Preferences under Notifications.
