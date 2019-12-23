const fs = require('fs')
const Mustache = require('mustache')
const data = './data.json'
const output = './build.html'
const template = './template.html'

function writeFile(outputPath, record) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(outputPath, record, function (err, data) {
      if (err) {
        reject(err)
      } else {
        console.log('Data has been recorded!')
        resolve()
      }
    })
  })
}
    
function readFile(dataPath, templatePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(dataPath, 'utf-8', function (err, data) {
      if (err) {
        reject(err)
      } else {
         resolve(Mustache.render(templatePath, JSON.parse(data)))
      }
    })
  })
}
    
function createHtml(dataPath, templatePath, outputPath) {
  return readFile(dataPath, templatePath)
  .then(record => {
    return writeFile(outputPath, record)
  })
}
    
createHtml(data, template, output)