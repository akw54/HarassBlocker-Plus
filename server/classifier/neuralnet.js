var brain = require('brain');

var harassClassifier = new brain.NeuralNetwork();

var neuralnet = {
    train: function(data) {
        harassClassifier.train(data);
    },
    classify: function(data) {
        return harassClassifier.run(data);
    }
};

module.exports = neuralnet;