const fs = require('fs');
__path = process.cwd()
const DoaHarian = () => {
var rndm = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(__path +`/data/doaHarian/${bykir}.json`))
       console.log(scraper)
       const result = {
         nomor: scraper.no,
         title: scraper.title,
         arabic: scraper.arabic,
         latin: scraper.latin,
         translate: scraper.translation
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
}

module.exports = DoaHarian