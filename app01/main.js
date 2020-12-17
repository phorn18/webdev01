const axios = require('axios');

axios
.get('https://api.exchangeratesapi.io/latest')
.then( function (res) {
        console.log(`สกุลเงินพื้นฐานแลกเปลี่ยน ${res.data.dase}`);
        console.log(`ต่อไทยบาท ${res.data.rates.THB}`);
});