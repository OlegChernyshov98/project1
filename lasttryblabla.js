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

const projectId = new Counter() // генерация id проектов
const developerId = new Counter() // генерация id разработчиков

class Company { // класс компаниии
  constructor () {
    this.developers = [] // разраб
    this.projects = [] // проекты
    this.hiredDevelopersCount = 0 // число нанятых разрабов
    this.dismissedDevelopersCount = 0 // число уволеных разрабов
    this.freeDevelopersCount = 0 // число свободных разрабов
    this.compconstedProjectsCounter = 0
    this.developer = null
    // this.days = 0;
    this.dismissalCandidate = null
  }

  addDeveloper (project) { // нанятие разраба
    ++this.hiredDevelopersCount
    if(project.type == 'web'){
      this.developers.push(new Developer('web'))
    } else this.developers.push(new Developer('mob'))
  }

  getProject(project) { // каждый день получаем случайное кол-во проектов
    for (let j = 0; j < createRandom(0, 4); j++) {
      this.projects.push(project);
              // return this.projects;
    }
  }
  addQA (project) {
    if (project.QA_specialist == null) { // если тестировщиков нет, нанимаем нового
      const developer = new Developer('QA')
      addDeveloper(developer)
      project.test(developer)
    }
  }
  MakeProject (project, developer) {
    // если разраб свободен и его компетенция совпадает с проектом  // если проект мобильный, одного разраба хватит
    project.type = 'dev' // 
    developer.isFree = false// 
    developer.level +=1
    if (project.type === 'web') {
      this.day += project.level;
    }
    if (project.type === 'mob' && project.developers.length === project.level) { // если это сайт, стартуем, когда число разрабов будет соответствовать уровню проекта
      this.day += Math.round(project.level / project.developers.length)
    }
  } 
}



class Developer { // класс разработчик
  constructor (type) {
    this.id = developerId()
    this.type = type;
    this.isFree = true // свободен ли
    this.freeDays = 0 // число потраченных дней
    this.level = 0 
    this.QA_specialist = null // число выполненных проектов
    this.day = 0;
    this.notFreedevelopers = [] 
  }

  test (project) {
    if(project.isTesting == false) {
      for (const developer of company.developers) { 
        if (developer.isFree && developer.type === 'QA') {
          this.QA_specialist = developer // назначается QA специалист
          this.days = 1
          project.isTesting = true
          --company.freeDevelopersCount
        }
      }
    }
  }
  Search(project) {
    for (const developer of company.developers) {   
      if (developer.isFree && developer.type === project.type) {
        this.notFreedevelopers.push(developer);
      }
    } 
  }
}



class Project { // класс проекта
  constructor () {
    this.id = projectId()
    if (createRandom(0, 1) === 1) {
      this.type = 'web';
    } else this.type = 'mob'; // тип проекта
    this.level = createRandom(1, 3)
    this.isFree = true
    this.isCompconsted = false // выполнен ли
    this.isTesting = false
    this.a = 0
  }
  // addDeveloper (developer) { // добавление разраба в проект
  //    developer.freeDays = 0 // обнуляем потраченные дни со словами 'опять работать!'
  //   this.developers.push(developer) // добавляем разработчика в массив
  //  }

  start () { // начало разработки проекта
    this.days = 1 + this.level - this.developers.length // высчитываются дни разработки в зависимости от числа трудящихся
    this.isFree = false
    this.a += 1
  }
}

class It {
  constructor () {
  this.days = 0
  }
}

 // console.log(developer)
const company = new Company();
const project = new Project();
const developer = new Developer();
    for (let day = 0; day < 5; day++) {
    company.getProject(new Project())
    for (let i =0;i < company.projects.length; i++){

   console.log(new Project()) 
    //  company.MakeProject (company.projects[i], developer.Search(company.projects));
    }
}
    console.log (developer.Search(company.projects))    

  































// class Company {
//   constructor() {
//     // для компании
//     this.newDevelopers = []; // массив новыхсотрудников
//     this.WebDevelopers = []; // вебщики
//     this.MobDevelopers = []; // мобильники
//     this.QADevelopers = []; // тестировщики
//     this.projects = []; // массив проектов
//     this.endedProjects = 0; //  количество оконченных проектов
//     this.days = 0;

//     // this.webProjects = []; // массив веб проектов
//     // this.mobProjects = []; // массив моб проектов
//     // для проекта
//     this.id = newCounter(); // номер?
//     this.status = 'new' || 'dev' || 'test' || 'done';
//     if (createRandom(0, 1) === 1) {
//       this.typeProject = 'web';
//     } else this.typeProject = 'mob'; // тип проекта
//     this.lvlProject = createRandom(1, 3); // уровень сложности проекта
//     // для сотрудника
//     this.id = Counter(); // номер?
//     this.type = 'new' || 'test' || 'mob' || 'web'; // тип
//     this.frees = true // занят или свободен
//     this.projectCounter = 0; // счетчик выполненных проектов сотрудника
//   }
//   getProject() { // каждый день получаем случайное кол-во проектов
//     for (let j = 0; j < createRandom(0, 4); j++) {
//       this.projects.push(new Project());
//       return this.projects;
//     }
//   }
//   makeNewDevelop() {

//   }

// // излишек
// //   raspredeleniePoTypu (Something) { // разбитие проектов на массивы по типу
// //     for (let i = 0; i < this.projects.length; i++) {
// //       if (this.projects[i].typeProject == 'mob') {
// //         this.mobProjects.push(this.projects[i]);
// //       } else this.webProjects.push(this.projects[i]);
// //     }
// //   }
//   makeProject(projects, developer) { // выполнение проекта
//     for (let i = 0; i < projects.length; i++) {
//       if ( projects[i].typeProject == 'web' /* &&  webDevelopers >&& они свободны */ ) {
        

//       }
//     }
//   }
// }