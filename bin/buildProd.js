const sass = require('sass');
const fs = require('fs');

// build site for production

var result = sass.renderSync({
    file: "scss/index.scss",
    outputStyle: "compressed"
});

fs.writeFileSync("public/css/style.css", result.css);
