var fs = require('fs');

var lineReader = require("../lineReader.js"); // file
var toneAnalyze = require("./toneAnalyze.js"); // watson
var neuralNet = require("./neuralnet.js"); // classifier neural net
var toneToData = require("./toneToData.js"); //

var trainingBatch = [];
var trainCount = 0;
var trainForSet = function(file, ouput) {
    lineReader(file, function(line) {
        trainCount++;
        console.log("Training from " + file + ": " + line);
        toneAnalyze.getTone(line, function(tone) {
            var data = toneToData(tone);
            var trainingData = {
                input: data,
                output: ouput
            };
            trainingBatch.push(trainingData);
            trainCount--;
            if (trainCount === 0) {
                console.log('END');
                neuralNet.train(trainingBatch);
            }
        });
    });
};

trainForSet("exclusionset.txt", {harass: 0});
trainForSet("harasstrainingset.txt", {harass: 1});

var isHarassMessage = function(message, callback) {
    toneAnalyze.getTone(message, function(tone) {
        var data = toneToData(tone);
        var classification = neuralNet.classify(data);
        // console.log(message + " : has : " + classification.harass);
        if (classification.harass > 0.5) {
            callback(true); // is harass message
        }
        else {
            callback(false);
        }
    });
};

var test = function(message) {
    isHarassMessage(message, function(isHarass) {
        if (isHarass) {
            console.log("HARASSMENT ALERT: "+message);
        } else {
            console.log("NO ALERT: "+message);
        }
    });
};

setTimeout(function() {
    console.log("SHOW TIME");
    test("You are great");
    test("I hate you");
    test("MAYBE YOU SHOULD JUST SHUT THE FUCK UP ASSHOLE");
    test("I love you");
    test("you suck");
}, 10000);

module.exports = {
    isHarassMessage: isHarassMessage
};
