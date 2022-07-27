import './style.css';
import './projects.css';

import {projectModal, add, createProject} from './projects.js';

let myList = [];

function createTitle() {
    const title = document.querySelector('.title');

    const name = document.createElement('div');
    name.className = "name";
    name.innerText = ".list";

    title.appendChild(name);
};

createTitle();

function projectButton() {
    const projectsButton = document.querySelector('.projectsButton');

    const projectButton = document.createElement('div');
    projectButton.className = "projectButton";
    projectButton.innerText = "Add Project";

    projectsButton.appendChild(projectButton);
};

projectButton();
projectModal();
add();