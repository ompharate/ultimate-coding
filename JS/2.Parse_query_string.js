function parse_query(query) {
    const params = new URLSearchParams(query);
    const result = {};

    for (const [key, value] of params.entries()) {
        if(result.hasOwnProperty(key)) {
            if(Array.isArray(result[key])) {
                result[key].push(value);
            } else {
                result[key] = [result[key], value];
            }
        } else {
            result[key] = value;
        }
    }
    return result;
}

console.log(parse_query("name=John&age=30&city=New%20York&lang=en%20US&lang=fr%20FR"));