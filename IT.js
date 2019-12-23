const company = require ('Company')
const project = require ('./Project')
const developer = require ('./Developer')

class IT {
  constructor () {
  this.days = 10
  }

  workingNewProgect() {
    for (const project of company.projects) { // проверяем проекты в компании (какие есть) 
      if (project.status == 'new' && project.isFree && company.developers.length === 0) {
        company.addDeveloper(project)
      }
      else if(project.status == 'new' && project.isFree && company.developers.length > 0){
        project.addDeveloper(project)
        company.MakeProject(project)
      } 
      if (project.status == 'new' && project.isFree) { // Если компетенция работников не совподает с проектом 
      company.addDeveloper(project)
      }
      if (project.status == 'dev' && project.level > project.days){
        project.days += 1
      }
  }
}

testProject() {
  for (const project of company.projects) {
    for( const developer of company.developers) {
     if (project.days == project.level) {
       company.test(project, developer)
     }      
    }
  }
}

  rabota() {
    for (let day = 0; day < this.days; day++) { // основной счетчик дней 
      company.dismissedDevelopers()  // 1 проверка есть ли кого уволить?
    //   for (const project of company.projects){
    //   if (project.status == 'dev'){
    //     console.log (project)
    //   }
    // }
      itcompany.workingNewProgect() // 2 выполняем существующие проекты и ли нанимаем новых разрабов 
      itcompany.testProject() //   шо то делаем с выполненными проектами 
      developer.freeDevelopers() // GJRF NFR
      company.getProject( new Project)
      for (let i =0; i < company.projects.length; i++){
        project.getLvl(company.projects[i])
        project.getType(company.projects[i])
      }    
    }  
        console.log(company.compconstedProjectsCounter, 'выполненных проектов')
       console.log (company.hiredDevelopersCount, 'нанято')
      console.log (company.dismissedDevelopersCount, 'уволено')
  }  

}
module.exports = IT;