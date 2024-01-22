const fs = require('fs');
__path = process.cwd()
const AyatKursi = () => {
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(__path +`/data/ayatKursi/ayatkursi.json`))
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

module.exports = AyatKursi