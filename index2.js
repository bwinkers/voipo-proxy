var https = require('https'),
    http  = require('http'),
    util  = require('util'),
    path  = require('path'),
    fs    = require('fs'),
    colors = require('colors'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target: 'https://cp.voipwelcome.com',
  agent  : https.globalAgent,
  headers: {
    host: 'cp.voipwelcome.com'
  },
  hostRewrite: 'cp.ultrivox.com',
  autoRewrite: true,
  protocolRewrite: 'http'
}).listen(8000);