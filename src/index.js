import './style.css';

let myProjects = [];
let myList = [];

function createTitle() {
    const container = document.querySelector('.container');

    const name = document.createElement('div');
    name.className = "name";
    name.innerText = ".list";

    container.appendChild(name);
};

createTitle();

function addProject() {
    const container = document.querySelector('.container');

    const addProject = document.createElement('div');
    addProject.className = "addProject";
    addProject.innerText = "Add Project";

    container.appendChild(addProject);
};

addProject();