const company = require ('./Company')
const project = require ('./Project')
class Developer { // класс разработчик
    constructor (type) {
      this.id = developerId()
      this.type = type;
      this.isFree = true // свободен ли
      this.freeDays = 0 // число потраченных дней
      this.level = 0 
  // число выполненных проектов
      this.day = 0;
      this.notFreedevelopers = [] 
    }
  
    freeDevelopers () {
      for( const project of company.projects){
        if (project.status == 'end'){
        for (const developer of project.developers) { // проходим по участникам проекта и освобождаем их
          developer.isFree = true
          ++developer.level // +1 к выполненным проектам у разраба
        }
      }
    }
  }
  }
module.exports = Developer;