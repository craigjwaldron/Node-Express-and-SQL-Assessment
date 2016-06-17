var totalNumber = function ( incomingObject ){
    console.log( "hello from randomModule.js" + incomingObject.type + incomingObject.total );
    // function randomNumber(min, max){ return Math.floor(Math.random() * (1 + max - min) + min); }
};

module.exports = totalNumber;
