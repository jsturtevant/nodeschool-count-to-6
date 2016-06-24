module.exports = function makeImportant(phrase, bangcount = phrase.length ) {
        
        return phrase + '!'.repeat(bangcount)   ;
    };