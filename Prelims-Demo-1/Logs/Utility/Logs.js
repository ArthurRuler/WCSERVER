var log = {
    info: function(info) {
        console.log("Info:" + info);
    },

    warning: function(warning) {
        console.log("Warining:" + warning);
    },

    error: function(error) {
        console.log("Error:" + error);
    },
}

module.exports = log