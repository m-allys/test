#!/usr/bin/env node
'use strict';

const express = require('express');

const Main = class {};

Main.start = (function(){
   
   let server = express()
       .get("/", (req, res) => {
           res.send("<h1>  HELLO TEST ! </h1>");
       });
       
   server.listen(process.env.PORT || 5000);
   
})();
