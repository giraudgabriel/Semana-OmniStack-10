module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString ? arrayAsString.split(',').map(s => s.trim()) : [];
}