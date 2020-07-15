//etape4
const express = require('express')
var fs = require('fs');
var bodyParser = require('body-parser');


var name = [];
var capital = [];
var pays = [];


const app = express()
const port= 3000;

app.get('/all', function(req, res){
    var contents = fs.readFileSync('country.json', 'utf8');
console.log(contents);

    res.status(200).send(contents)
})

//etape5
app.get('/names/all', function(req, res){
    var contents = fs.readFileSync('country.json', 'utf8');
console.log(contents);
contents = JSON.parse(contents)
for (i= 0; i<contents.length; i++){
    console.log(contents[i].name)
    name.push(contents[i].name);
}
    res.status(200).send(name)

})

//etape6
app.get('/names/all', function(req, res){
    var contents = fs.readFileSync('country.json', 'utf8');
console.log(contents);
contents = JSON.parse(contents)
const map1 = contents.map(pays => pays.name);
//res.json(map1);
  
  res.status(200).json(map1)
})
  
//etape7
app.get('/capitals/all', function(req, res){
    var contents = fs.readFileSync('country.json', 'utf8');
    console.log(contents);
    contents = JSON.parse(contents)
    for (i= 0; i<contents.length; i++){
        console.log(contents[i].capital)
        capital.push(contents[i].capital);
    }
    res.status(200).send(capital)

})

//etape8
app.get('/capitals/all', function(req, res){
    var contents = fs.readFileSync('country.json', 'utf8');
    console.log(contents);
    contents = JSON.parse(contents)
    const map2 = contents.map(pays => pays.capital);
//res.json(map2);
  
   res.status(200).json(map2)
})

//etape9
app.get('/country/:name', function(req, res) { 
    var contents = fs.readFileSync('country.json', 'utf-8'); 
    contents = JSON.parse(contents);
    const name = req.params.name; 
    var paysinfo = '';
     contents.forEach(function(country) { 
         if (country.name.toUpperCase() === name.toUpperCase()) {
        paysinfo = country;
    }
    
    });
    
    if (paysinfo) {

        res.status(200).json(paysinfo);
         }else {
            res.status(404).send('Not Found'); 
         }
        
         
    //res.json(paysinfo)
     
});

//etape10
app.get('/regions/:regionName', function(req, res) { 
    var contents = fs.readFileSync('country.json', 'utf-8'); 
    contents = JSON.parse(contents);
    const regionName = req.params.regionName; 
    var regioninfo = [];
     contents.forEach(function(country) { 
         if (country.region.toUpperCase() === regionName.toUpperCase()) {
        regioninfo.push(country.name)
        
    }
    
    });
    
    if (regioninfo.length) {

        res.status(200).send(regioninfo);
         } else {
            res.status(404).send('Not Found'); 
         }
        
         
    //res.json(paysinfo)
     
});

//etape11
app.get('/subregion/:subregionName', function(req, res) { 
    var contents = fs.readFileSync('country.json', 'utf-8'); 
    contents = JSON.parse(contents);
    const subregionName = req.params.subregionName; 
    var subregioninfo = [];
     contents.forEach(function(country) { 
         if (country.subregion.toUpperCase() === subregionName.toUpperCase()) {
        subregioninfo.push(country.name)
    }
    
    });
    
    if (subregioninfo.length) {

        res.status(200).json(subregioninfo);
         }else {
            res.status(404).send('Not Found'); 
         }
        
         
    //res.json(paysinfo)
     
});

//etape12
app.get('/currencies/:currency', function(req, res) { 
    var contents = fs.readFileSync('country.json', 'utf-8'); 
    contents = JSON.parse(contents);
    const currency = req.params.currency; 
    var currencyinfo = [];
     contents.forEach(function(country) { 
         if (country.currencies[0].name.toUpperCase() == currency.toUpperCase()) {
        currencyinfo.push(country.name)
    }
    
    });
    
    if (currencyinfo.length) {

        res.status(200).json(currencyinfo);
         }else {
            res.status(404).send('Not Found'); 
         }
        
         
    //res.json(paysinfo)
     
});

//etape13

//etape 14
app.put('/countries/:countryName', function(req, res){
    var contents = fs.readFileSync('country.json', 'utf8');
console.log(contents);
contents = JSON.parse(contents)
var tab = [];
const countryName = req.params.countryName; 
contents[countryName]["regionName"] = req.body.region;
contents[countryName]["subregionName"] = req.body.subregion;

// for (i= 0; i<contents.length; i++){
//     console.log(contents[i].name)
//     capital.push(contents[i].name);
//     console.log(countryName);
// }
 contents.forEach(function(country) { 
     if (countryName.name.toUpperCase() === countryName.toUpperCase()) {
    tab = countryName;
}

});

fs.writeFileSync('country.json', (JSON.stringify(contents)));
res.json(contents);
    //res.status(200).send(name)

})


















app.listen(port, () => {
    console.log("Server is running on "+ port +" port");
});