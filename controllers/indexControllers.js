var fetch = require('cross-fetch')
getQuran = async (_req, res)=>{
    var response = await fetch('http://api.alquran.cloud/v1/quran/en.asad')
    var dataRes = await response.json()
    res.render('index',{
        surahs:dataRes.data.surahs,
        title: "Quran"
    })
}

getSurah = async (req, res)=>{
    let surahNum = req.params.surahNumber
    console.log(req.params)
    console.log("SurahNum: "+ surahNum)
    let nameLinkArabic = "https://api.alquran.cloud/v1/surah/"+surahNum+"/ar.alafasy"
    var response = await fetch(nameLinkArabic)
    var dataResArabic = await response.json()
    res.render('surah',{
        surahsArabic:dataResArabic.data.ayahs,
        title: dataResArabic.data
    })
}

module.exports = {getQuran,getSurah}