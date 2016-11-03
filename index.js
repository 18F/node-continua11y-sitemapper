#!/usr/bin/env node

'use strict';

let program  = require('commander');

program
  .arguments('<directory>')
  .action((directory) => {
    // eventually do something here
  })
  .parse(process.argv);
