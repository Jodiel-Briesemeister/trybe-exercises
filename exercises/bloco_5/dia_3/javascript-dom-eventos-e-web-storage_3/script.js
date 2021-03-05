function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysList(){
    let monthDays = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dezDaysItem = document.createElement('li');

        //dia 24 ao 31 = holiday
        if (index > 24 && index < 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32){
            dezDaysItem.className = 'day holiday';
            dezDaysItem.innerHTML = day;
            monthDays.appendChild(dezDaysItem);
        } else if (index === 5 || index === 12 || index == 19){
            dezDaysItem.className = 'day friday';
            dezDaysItem.innerHTML = day;
            monthDays.appendChild(dezDaysItem);
        } else if (index == 26) {
          dezDaysItem.className = 'day friday holiday';
          dezDaysItem.innerHTML = day;
          monthDays.appendChild(dezDaysItem);
        } else {
          dezDaysItem.className = 'day';
          dezDaysItem.innerHTML = day;
          monthDays.appendChild(dezDaysItem);
        }       
    };
};

createDaysList();

//Exercício 2
function createBtnHoliday(){
    const elementBtn = document.createElement('button');
    const location = document.querySelector('.buttons-container');
    elementBtn.id = "btn-holiday";
    elementBtn.innerHTML = 'Feriados';
    location.appendChild(elementBtn);
}

createBtnHoliday();


//Exercício 3
function btnHolidaySelect() {
    let btnHoliday = document.querySelector('#btn-holiday');
    let arrayHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
    
    btnHoliday.addEventListener('click', function() {
      for (let index = 0; index < arrayHolidays.length; index += 1) {
          
        if (arrayHolidays[index].style.backgroundColor === setNewColor) {
          arrayHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          arrayHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  btnHolidaySelect();

  //Exercício 4
  function createBtnFriday(){
    const elementBtn = document.createElement('button');
    const location = document.querySelector('.buttons-container');
    elementBtn.id = "btn-friday";
    elementBtn.innerHTML = 'Sexta-Feira';
    location.appendChild(elementBtn);
}

createBtnFriday();


//Exercício 5
function btnFridaySelect() {
  let btnHoliday = document.querySelector('#btn-friday');
  let arrayFridays = document.querySelectorAll('.friday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';
  
  btnHoliday.addEventListener('click', function() {
    for (let index = 0; index < arrayFridays.length; index += 1) {
        
      if (arrayFridays[index].style.backgroundColor === setNewColor) {
        arrayFridays[index].style.backgroundColor = backgroundColor;
      } else {
        arrayFridays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

btnFridaySelect();

//Exercício 6
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

//Exercício 7
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Cozinhar');

//Exercício 8
function newTaskDiv(cor) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.style.backgroundColor = cor;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

//Exercício 9
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

//Exercício 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
  