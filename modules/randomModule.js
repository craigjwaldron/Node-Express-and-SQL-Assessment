var totalNumber = function ( min, max ){
    // console.log( "hello from randomModule.js" + incomingObject.type + incomingObject.total );
    return Math.floor(Math.random() * (1 + max - 1) + min);
};

module.exports = totalNumber;
