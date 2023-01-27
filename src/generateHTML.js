const fs = require('fs');
const writeFile = (contents) => {
    fs.writeFile('./dist/index.html', contents, (err) =>{
        if (err) {
            console.log(err)
        }
        else {
            console.log("Team profile html generated successfully")
        }
    })
}

module.exports = writeFile;