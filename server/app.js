var express = require ( 'express' );
var app = express ();
var path = require ( 'path' );
var bodyParser = require ( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var pg = require( 'pg' );
var connectionString = "postgres://localhost:5432/animal";

var randomModule = require ( "../modules/randomModule.js");
// Setting static page-----------------------------------------------------------------------------------------------
app.use ( express.static( 'public' ) );

// Route to index.html (resovled path to html)-------------------------------------------------------------------------------------------------------
app.get ("/", function( req, res ){
  res.sendFile( path.resolve( "views/index.html" ));
});

// Post -------------------------------------------------------------------------------------------------------
app.post ( "/animalKingdom", urlencodedParser, function ( req, res ){
  // console.log( "animal is: " + req.body.type + " " + req.body.total );
  // var animalTotal = randomModule( req.body );
  // console.log(animalTotal);
// -------------------------------------------------------------------------------------------------------
  pg.connect( connectionString, function( err, client, done ){
    var random = randomModule( 1, 100 );
    client.query( "INSERT INTO zoo ( type, total ) VALUES ( $1, $2 )", [ req.body.type, random ] );
    // console.log( animalQuery );
    res.send(true);
  });
});
// -------------------------------------------------------------------------------------------------------
app.get ( "/animalData", urlencodedParser, function ( req, res ){
  console.log( "in get get get" );

  var allAnimals = [];
  pg.connect( connectionString, function( err, client, done ){
    var query = client.query( "SELECT * FROM zoo" );
    console.log( "query: " + query );

    var rows = 0;
      query.on( 'row', function ( row ){
          allAnimals.push( row );
        }); // end query push
        query.on( 'end', function (){
          return res.json( allAnimals );
        });
  }); // End pg.connect
}); // End app.get



// Setting up server-----------------------------------------------------------------------------------------------
app.listen ( 3000, 'localhost', function(){
  console.log( 'listening on server 3000' );
});
