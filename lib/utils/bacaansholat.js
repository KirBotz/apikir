const fs = require('fs');
__path = process.cwd()
const BacaanSholat = () => {
var rndm = ['1','2','3','4','5','6','7','8']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(__path +`/data/bacaanSholat/${bykir}.json`))
       console.log(scraper)
       const result = {
         nomor: scraper.no,
         name: scraper.name,
         arabic: scraper.arabic,
         latin: scraper.latin,
         terjemahan: scraper.terjemahan
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
}

module.exports = BacaanSholat