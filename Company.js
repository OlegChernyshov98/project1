const project = require ('./Project')
const developer= require ('./Developer')

class Company { // класс компаниии
  constructor () {
    this.developers = [] // разраб
    this.projects = [] // проекты
    this.hiredDevelopersCount = 0 // число нанятых разрабов
    this.dismissedDevelopersCount = 0 // число уволеных разрабов
    this.compconstedProjectsCounter = 0
    this.developer = null
    this.dismissalCandidate = null
  }
  
  addDeveloper (project) { // нанятие разраба 
    if (project.status == 'new'){ 
      ++this.hiredDevelopersCount
    if(project.type == 'web'){
      this.developers.push(new Developer('web'))
    } else this.developers.push(new Developer('mob'))
    }
  }
  
  getProject(project) { // каждый день получаем случайное кол-во проектов
    for (let j = 0; j < createRandom(0, 4); j++) {
      this.projects.push(project);
    }
  }
  
  test (project, developer) {
    if(project.status == 'dev') {
      if (developer.isFree && developer.type == 'QA') {
        project.days += 1
        project.status = 'end'
        this.compconstedProjectsCounter += 1;
      } else this.developers.push(new Developer('QA'))
    }
  }
  
  
  MakeProject (project){ // что?
    if(project.status = 'new'){
      for (const developer of project.developers){
        if(project.type == developer.type){
          if (project.type === 'web') {
            project.status = 'dev'
            developer.isFree = false
            project.days += 1;
          }
            if (project.type === 'mob' && developer.length === project.level) { // если это сайт, стартуем, когда число разрабов будет соответствовать уровню проекта
               project.days += Math.floor (project.level / project.developers.length)
               project.status = 'dev'
               developer.isFree = false
             }
        }
      }
    }
    }
  
    removeDeveloper () {
      for (const index in this.developers) {
        if (this.developers[index].id === this.dismissalCandidate.id) {
          this.developers.splice(index, 1)
        }
      }
      this.dismissalCandidate = null
      ++this.dismissedDevelopersCount
    }
  
    dismissedDevelopers () {
      for (const developer of this.developers) {
        if (developer.isFree && developer.freeDays <= 3) {
          ++developer.freeDays
        } else if (developer.isFree && developer.freeDays > 3) {
          if (this.dismissalCandidate == null) {
            this.dismissalCandidate = developer
          } else if (this.dismissalCandidate != null && this.dismissalCandidate.compconstedProjectsCounter > developer.compconstedProjectsCounter) {
            this.dismissalCandidate = developer
          }
        }
      }
      if (this.dismissalCandidate != null) {
        this.removeDeveloper()
      }
    }
}
  console.log(typeof(Company.test()))
//module.exports = Company;