if (process.env.NODE_ENV !== "production") {
    require("dotenv").load();
}

const mongodb = require("mongodb");

const uri = `mongodb://${process.env.MONGO_USER}:${
    process.env.MONGO_PW
}@ds159527.mlab.com:59527/test-db`;

exports.handler = (event, context, callback) => {
    mongodb.MongoClient.connect(
        uri,
        (err, client) => {
            if (err) throw err;
            console.log(client);

            const db = client.db("test-db");

            const images = db.collection("images");

            images.insert({ test: "value" }, (err, client) => {});
        }
    );

    callback(null, {
        statusCode: 201
    });
};
