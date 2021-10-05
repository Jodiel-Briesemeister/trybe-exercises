let emergencyTasks = document.querySelectorAll(".emergency-tasks h3")
for (index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.background = 'purple';
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3")
for (index = 0; index < noEmergencyTasks.length; index += 1) {
    noEmergencyTasks[index].style.background = 'black';
}

document.getElementById("header-container").style.background = 'green';
document.querySelector(".emergency-tasks").style.background = 'orange';
document.querySelector(".no-emergency-tasks").style.background = 'yellow';