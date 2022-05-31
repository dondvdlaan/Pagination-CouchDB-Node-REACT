'use strict';
//-------------Imports-------------
const cors = require('cors');

// WEBSERVER
const express = require('express');
const server = express();

server.use(express.static('public', {extensions:['html']}));

// DATENBANK
const db = require('nano')('http://admin:Patoduck2804@localhost:5984').db;


//-------------Middle-ware-------------
// JSON-Daten aus einer Post-Anfrage bereitstellen
server.use(express.json());
server.use(cors());


//-------------Constants-------------
const dbName = 'cities';
const port = 2000;
// Simulated cities in the CouchDB
const nrOfCities = 31000;


//-------------Routen-------------
// Show all cities w/o Pagination
server.get('/allCities', (request, response) => {
    loadAllCities().then(
        // Dokumente an Client ausliefern
        res => response.send(JSON.stringify(res))
        )
    })

// Add a city
server.post('/addCity', (request, response) => {
    const city = request.body;
    console.log('addCity: ',city);
    addCity(city)
    .response.send(JSON.stringify('OK'));
    // loadAllCities().then(
    //     // Dokumente an Client ausliefern
    //     res => response.send(JSON.stringify(res))
    //     )
    })

// Add a bulk of cities
server.get('/addCities', (request, response) => {
    console.log('addCities: received');
    // For simulation, xx cities are loaded in couchDB
    addBulkCities(nrOfCities)
    .then(res => response.send(JSON.stringify('OKKK') ));

    // loadAllCities().then(
    //     // Dokumente an Client ausliefern
    //     res => response.send(JSON.stringify(res))
    //     )
    })

// Send totalCities for Pagination
server.get('/totalCities', (request, response) => {
    loadAllCities().then(
        // Extract totalCities
        res => res.length
        ).then(
            // Dokumente an Client ausliefern
            // res => console.log(res)
            res => response.send(JSON.stringify(res))
            )
    })

// Show all Cities w Pagination
server.get(
    '/allCities/:pageNr',
    (req,res) => {
  
    // Reading pageNr from the URL
    const pageNr = req.params.pageNr;
    // console.log(('PageNr: ' ,pageNr));
    const citiesPerPage = 5;
    // loadAllCities
    loadAllCities().then
        // Slice first cities per page
        // (res => res.slice(0,5))
        (res => res.slice(citiesPerPage * (pageNr -1),citiesPerPage * pageNr))

        .then(cities =>res.send(JSON.stringify(cities)))
    }
)
//-------------Functions-------------
const loadAllCities = () => {
    return db.use(dbName)
    .list({ include_docs: true })
    .then(
        // Aus dem Rückgabewert nur die Dokument-Daten selektieren
        res => res.rows.map(el => el.doc)
        ).then(
            // Alle Designdokumente ausfiltern
            res => res.filter(el => !el._id.startsWith('_design/'))
            )
}

const addCity = (city) => {
    return db.use(dbName)
    .insert(city)
    // .list({ include_docs: true })
    .then(res => console.log('res: ', res)
        // res => res.rows.map(el => el.doc)
        // Aus dem Rückgabewert nur die Dokument-Daten selektieren
        )
        //         .then(
        //             // Alle Designdokumente ausfiltern
        //             res => res.filter(el => !el._id.startsWith('_design/'))
        //             )
}

// Bbulk of cities to be loaded to the database
const addBulkCities = (nrOfCities) =>{
    // Constants & Variabels
    let cities = [];
    let state = "";

    for (let counter = 0; counter < nrOfCities; counter++) {
        
        const city= {name: `City ${counter}`,
        country: `Country ${counter}`,
        founded: new Date(),
        habitants: counter * 1000
        }
    
        cities.push(db.use(dbName).insert(city));
    }
    
        try{ state = Promise.all(cities)
            .then(values => console.log('State/values Promise.all: ',state, values));
        } 
        catch (e) {
            // failed
            console.error(e)
        }
        return state;
     
}
const init = () => {
    server.listen(port, err => console.log(err || `Server läuft: ${port}`));
            
    // Datenbank checken, ob sie existiert
    db.list().then(
      res => {
        if (!res.includes(dbName)) return db.create(dbName);
        }
    ).catch(
        console.log
    )
}
                
//-------------Initialisation-------------
init();