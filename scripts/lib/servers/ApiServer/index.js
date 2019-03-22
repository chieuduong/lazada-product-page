var express = require('express');
var _ = require('lodash');
var fs = require('fs');
var app = express();
const { Server } = require('../constructors');

var productLists = JSON.parse(fs.readFileSync('scripts/lib/servers/ApiServer/data/products.json','utf8')); 


class ApiServer extends Server {
  constructor ({ ...config }) {
    super(config)
      
    this.app.get('/products',function(req,res){
      res.send(productLists);
      res.end();
    });
    
    this.start()

  }
}

module.exports = ApiServer;