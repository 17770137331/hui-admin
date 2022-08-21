const { MongoClient } = require("mongodb");

// "protocol" : "mysql",
// 		"host" : "42.192.151.251",
// 		"database" : "mydb",
// 		"user" : "mydb",
// 		"password" : "root",
// 		"port" : 3306
function database(collectionName) {  
    return MongoClient.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(client => {
       return client.db("project1").collection(collectionName);
    })
}

module.exports = database;