var fetch = require('cross-fetch')
getAbout = async (req,res,next) =>{
    var response = await fetch('http://api.alquran.cloud/v1/ayah/9');
    var dataRes = await response.json();
    res.render('about',{
        title: "Surah Baqarah: Verse 2",
        verse: dataRes.data
    });
}

getAbout2 = (req,res,next) =>{
    console.log("Testing how to export multiple funtions");
}

//if there were two methods then we could have exported them using  
// module.exports = {function1, function2, .... }
module.exports = { getAbout, getAbout2};

