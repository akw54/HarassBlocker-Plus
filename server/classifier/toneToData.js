
var toneToData = function (tone) {
    // console.log(tone);
    var data = {};
    var toneCategories = tone.document_tone.tone_categories;
    for (var i = 0; i < toneCategories.length; i += 1) {
        // console.log(toneCategories[i]);
        var tones = toneCategories[i].tones;
        // console.log(tones);
        for (var j = 0; j < tones.length; j += 1) {
            var tone = tones[j];
            data[tone.tone_id] = tone.score;
        }
    }
    
    // console.log(data);
    return data;
};


module.exports = toneToData;