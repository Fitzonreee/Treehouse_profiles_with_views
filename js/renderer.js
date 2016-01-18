var fs = require('fs');

function view(templateName, values, response) {
  // Read from the templete files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html')
  // Insert values into contents

  // Write out the contents to the response
  response.write(fileContents);
}

module.exports.view = view;
