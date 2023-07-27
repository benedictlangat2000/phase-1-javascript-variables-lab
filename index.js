const fs = require('fs')
const path = require('path')
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

const companyName = 'Scuber';
let mostProfitableNeighborhood='Chelsea';
let companyCeo = 'Susan Smith'