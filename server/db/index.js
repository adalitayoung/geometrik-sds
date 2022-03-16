const dbName = 'postgres'; 
var url = process.env.DB_URL

var _db;

module.exports = {
    connectToServer: function( callback ) {
        // MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client){
        //     _db  = client.db(dbName);
        //     return callback( err );
        // });
    },
    
    getDb: function() {
        return _db;
    }
}