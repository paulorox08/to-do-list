let myProjects = [];

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
    askName.id = 'askName';
    projectModalContent.appendChild(askName);

    const submit = document.createElement('input');
    submit.className = 'submit';
    submit.type = 'submit'
    submit.value = "Enter";
    projectModalContent.appendChild(submit);
};

function projectModal() {
    createModal();
    const projectModal = document.querySelector('.projectModal');
    const projectButton = document.querySelector('.projectButton');

    projectButton.addEventListener('click', () => {
        projectModal.style.visibility = 'visible';
    })
};

export {projectModal};

function Project(stuff) {
    this.stuff = stuff;
};

export {Project};

Project.prototype.createProject = function() {
    const projectsContainer = document.querySelector('.projectsContainer');

    const projectName = document.createElement('div');
    projectName.innerText = document.querySelector('#askName').value;

    projectsContainer.appendChild(projectName);
};

function addAProject() {
    let newProject = new Project(document.querySelector('#askName').value);
    myProjects.push(newProject);
    newProject.createProject();
};

function add() {
    const submit = document.querySelector('.submit');

    submit.addEventListener('click', () => {
        addAProject();
        const projectModal = document.querySelector('.projectModal');
        projectModal.style.visibility = 'hidden';
        console.log(myProjects)
    })
}

export {add};