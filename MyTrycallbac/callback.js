const fs = require('fs') // модуль фс
const Mustache = require('mustache') // модуль усов
const template = require('./template.html')  // как,?
const data = './data.json' // что? 
const output = './build.html' // куда? 

function createHtml (dataPath, templatePath, outputPath, callback) {
  return callback()
}

createHtml(data, template, output, () => {
    fs.readFile ('data', {encoding: 'utf-8'}, function(err, data){
        if(!err) {
            createHtml(data, template, output, () => { 
                const record = Mustache.render (template, JSON.parse(data))
                fs.writeFile(output, record, function(err, data) {
                    if (!err) {
                        console.error('Успешно...')
                    } else {
                        console.error(err);
                    }
                })
            })
        } else {
           console.error(err);
        }
    })
})