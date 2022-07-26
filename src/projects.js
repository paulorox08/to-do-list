let myProjects = [];

class Projects{
    constructor(name) {
        this.name = name;
    }
};

Projects.prototype.createProject = function() {
    const projectsContainer = document.querySelector('.projectsContainer');

    const projectName = document.createElement('div');
    projectName.innerText = newProject.name;

    projectsContainer.appendChild(projectName)
};

function createModal() {
    const body = document.querySelector('body');

    const projectModal = document.createElement('div');
    projectModal.className = "projectModal";
    
    body.appendChild(projectModal);

    const projectModalContent = document.createElement('div');
    projectModalContent.className = "projectModalContent";

    projectModal.appendChild(projectModalContent);

    const askTitle = document.createElement('div');
    askTitle.className = 'askTitle';
    askTitle.innerText = "Enter Project Name";
    projectModalContent.appendChild(askTitle);

    const askName = document.createElement('input');
    askName.className = 'askName';
    projectModalContent.appendChild(askName);

    const submit = document.createElement('input');
    submit.className = 'submit';
    submit.type = 'submit'
    submit.value = "Enter";
    projectModalContent.appendChild(submit);
}

function projectModal() {
    createModal();
    const projectModal = document.querySelector('.projectModal');
    const projectButton = document.querySelector('.projectButton');

    projectButton.addEventListener('click', () => {
        projectModal.style.visibility = 'visible';
    })
}

export {projectModal};

function addAProject() {
    let askName = document.querySelector('.askName');

    newProject = new Projects(askName.value);
    myProjects.push(newProject);

    const submit = document.querySelector('.submit');

    submit.addEventListener('click', () => {
        newProject.createProject();
    })
}

export {addAProject};