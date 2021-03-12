let dbname = "artists";
let username = "george";
let password = "root";

// with backticks
exports.atlasURL = `mongodb+srv://${username}:${password}@cluster0.emsys.mongodb.net/${dbname}?retryWrites=true&w=majority`;
