import './style.css';

import {addAProject} from './projects.js';

let myList = [];

function createTitle() {
    const container = document.querySelector('.container');

    const name = document.createElement('div');
    name.className = "name";
    name.innerText = ".list";

    container.appendChild(name);
};

createTitle();

function projectButton() {
    const container = document.querySelector('.projectsContainer');

    const projectButton = document.createElement('div');
    projectButton.className = "projectButton";
    projectButton.innerText = "Add Project";

    container.appendChild(projectButton);
};

projectButton();
addAProject();