const counterE1 = document.querySelector('.counter');
let counterNumber = 0;

const updateCounter = setInterval(function(){
    counterNumber++;
    counterE1.textContent = counterNumber;

    if(counterNumber >= 1789){
        clearInterval(updateCounter)
    }
},1)

const projectE1 = document.querySelector('.projects');
let projectsNumber = 0; 

const updateProjects = setInterval(function(){
    projectsNumber++;
    projectE1.textContent = projectsNumber;
     
    if(projectsNumber >= 647){
        clearInterval(updateProjects)
    }
},2)
const worktE1 = document.querySelector('.work');
let workNumber = 0; 

const updatework = setInterval(function(){
    workNumber++;
    worktE1.textContent = workNumber;
     
    if(workNumber >= 4000){
        clearInterval(updatework)
    }
},3)
const countriesE1 = document.querySelector('.countries');
let countriesNumber = 0; 

const updatecountries = setInterval(function(){
    countriesNumber++;
    countriesE1.textContent = countriesNumber;
     
    if(countriesNumber >= 44){
        clearInterval(updatecountries)
    }
},4)