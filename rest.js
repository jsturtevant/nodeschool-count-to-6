module.exports = function average(...args) {
         var result = 0;
         var count = args.length;
        args.forEach(function (value) {
            result += value;
        });

        return result / count;
    };
