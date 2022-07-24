let myProjects = [];

function Projects(name) {
    this.name = name;
}

function addAProject() {
    const projectButton = document.querySelector('.projectButton');
    const projectsContainer = document.querySelector('.projectsContainer');

    projectButton.addEventListener('click', () => {
        const askName = document.createElement('input');
        projectsContainer.appendChild(askName);

        const submit = document.createElement('button');
        projectsContainer.appendChild(submit);
    })
}

export {addAProject};