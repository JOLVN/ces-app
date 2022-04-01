
// Return an object with all the parameters of the URL
export function findParameters() {
    var params = {}
        location.search.slice(1).split("&").forEach(function(pair) {
            pair = pair.split("=");
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        })
    
    return params
}