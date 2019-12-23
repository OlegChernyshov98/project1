const company = require ('./Company')
const developer= require ('./Developer')
class Project { // класс проекта
    constructor () {
      this.status = 'new' || 'dev' || 'end'
      this.id = projectId()
      this.type = ''
      this.level = 0
      this.isFree = true // выполнен ли
      this.developers = []; 
      this.days = 0;
    }
  
    getType(project) {
      if (createRandom(0, 1) === 1) {
        project.type = 'web';
      } else project.type = 'mob'; // тип проекта
      return project.type
    }
  
    getLvl(project) {
     project.level = createRandom(1,3);
    }
  
    addDeveloper (project) { // добавление разраба в проект
      for (const developer of company.developers) {  
        
        if (developer.isFree && developer.type === project.type) {
          developer.freeDays = 0 // обнуляем потраченные дни
          this.developers.push(developer)
          --company.developer // добавляем разработчика в массив
      }
    }
  }
}

module.exports = Project;
