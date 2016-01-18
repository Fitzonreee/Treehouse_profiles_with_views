var fs = require('fs');

function mergeValues(values, content) {
  // cycle over keys
  for(var key in values) {
    // replace al {{key}} with the value from the values
    content = content.replace("{{" + key + "}}", values[key]);
  }
  // return merged content
  return content;
}

function view(templateName, values, response) {
  // Read from the templete files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  // Insert values into contents
  fileContents = mergeValues(values, fileContents);
  // Write out the contents to the response
  response.write(fileContents);
}

module.exports.view = view;
