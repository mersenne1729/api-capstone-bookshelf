/*include external resources*/

var express = require('express');
var unirest = require('unirest');
var events = require('events');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();
var Item = require('./models/item');
app.use(bodyParser.json());
app.use(express.static('public'));


/*declaration of api end points (app.get)*/



/* STEP 2 - creating objects and constructors*/
var runServer = function (callback) {
    mongoose.connect(config.DATABASE_URL, function (err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function () {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function (err) {
        if (err) {
            console.error(err);
        }
    });
};

//external api call function
var getFromApi = function (endpoint, args) {
    var emitter = new events.EventEmitter();
    unirest.get('https://api.spotify.com/v1/' + endpoint)
        .qs(args)
        //after api call we get the response inside the "response" parameter
        .end(function (response) {
            //success scenario
            if (response.ok) {
                emitter.emit('end', response.body);
            }
            //failure scenario
            else {
                emitter.emit('error', response.code);
            }
        });
    return emitter;
};

app.get('/search/:name', , function (req, res) {

    //    external api function call and response

    var searchReq = getFromApi('search', {
        q: req.params.name,
        limit: 1,
        type: 'artist'
    });

    //get the data from the first api call
    searchReq.on('end', function (item) {

        //get the artists and ID for use in next call
        artist = item.artists.items[0];
    });

    //error handling
    searchReq.on('error', function (code) {
        res.sendStatus(code);
    });


    //db connection and data queries

    //    Item.find(function (err, items) {
    //        if (err) {
    //            return res.status(500).json({
    //                message: 'Internal Server Error'
    //            });
    //        }
    //        res.status(200).json(items);
    //    });
});

app.post('/items', function (req, res) {

    //db connection and data queries
    //    Item.create({
    //        name: req.body.name
    //    }, function (err, item) {
    //        if (err) {
    //            return res.status(500).json({
    //                message: 'Internal Server Error'
    //            });
    //        }
    //        res.status(201).json(item);
    //    });
});

/*server settings (listener)*/
