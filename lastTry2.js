/* eslint-disable max-classes-per-file */
function createRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Counter() {
  let number = 0;
  return function () {
    number++;
    return number;
  };
}

const projectId = new Counter();// генерация id проектов
const developerId = new Counter(); // генерация id разработчиков

class Company { // класс компаниии
  constructor() {
    this.developers = []; // разраб
    this.projects = []; // проекты
    this.hiredDevelopersCount = 0; // число нанятых разрабов
    this.dismissedDevelopersCount = 0; // число уволеных разрабов
    this.compconstedProjectsCounter = 0;
    this.developer = null;
    this.dismissalCandidate = null;
  }

  addDeveloper(project) { // нанятие разраба
    if (project.status === 'new') {
      ++this.hiredDevelopersCount
      if (project.type === 'web') {
        this.developers.push(new Developer('web'));
      } else this.developers.push(new Developer('mob'));
    }
  }

  getProject(project) { // каждый день получаем случайное кол-во проектов
    for (let j = 0; j < createRandom(0, 4); j++) {
      this.projects.push(project);
    }
  }


  test(project, developer) {
    if (project.status === 'dev') {
      if (developer.isFree && developer.type === 'QA') {
        project.days += 1;
        project.status = 'end';
        this.compconstedProjectsCounter += 1;
      } else this.developers.push(new Developer('QA'));
    }
  }

  MakeProject(project) { // что?
    if (project.status = 'new') {
      for (const developer of project.developers) {
        if (project.type == developer.type) {
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

class Developer { // класс разработчик
  constructor(type) {
    this.id = developerId();
    this.type = type;
    this.isFree = true; // свободен ли
    this.freeDays = 0; // число потраченных дней
    this.level = 0;
    this.day = 0;
    this.notFreedevelopers = []; 
  }

  freeDevelopers() {
    for( const project of company.projects){
      if (project.status == 'end'){
        for (const developer of project.developers) { // проходим по участникам проекта и освобождаем их
          developer.isFree = true;
          ++developer.level;// +1 к выполненным проектам у разраба
        }
      }
    }
  }  
}

class Project { // класс проекта
  constructor() {
    this.status = 'new' || 'dev' || 'end';
    this.id = projectId();
    this.type = '';
    this.level = 0;
    this.isFree = true; // выполнен ли
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

  addDeveloper(project) { // добавление разраба в проект
    for (const developer of company.developers) {  
      if (developer.isFree && developer.type === project.type) {
        developer.freeDays = 0 // обнуляем потраченные дни
        this.developers.push(developer)
        --company.developer // добавляем разработчика в массив
      }
    }
  }
}

const company = new Company();
const project = new Project();
const developer = new Developer();

class It {
  constructor() {
    this.days = 10;
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
      itcompany.workingNewProgect() // 2 выполняем существующие проекты и ли нанимаем новых разрабов 
      itcompany.testProject() //   шо то делаем с выполненными проектами 
      developer.freeDevelopers() // GJRF NFR
      company.getProject( new Project)
      for (let i =0; i < company.projects.length; i++){
        project.getLvl(company.projects[i])
        project.getType(company.projects[i])
      }
    }
console.log(company.compconstedProjectsCounter, 'выполненных проектов');
console.log (company.hiredDevelopersCount, 'нанято');
console.log (company.dismissedDevelopersCount, 'уволено');
  }
}
const itcompany = new It()
itcompany.rabota();

