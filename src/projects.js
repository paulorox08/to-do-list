let myProjects = [];

function Projects(name) {
    this.name = name;
}

function createModal() {
    const body = document.querySelector('body');

    const projectModal = document.createElement('div');
    projectModal.className = "projectModal";
    
    body.appendChild(projectModal);

    const projectModalContent = document.createElement('div');
    projectModalContent.className = "projectModalContent";

    projectModal.appendChild(projectModalContent);
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
    const projectButton = document.querySelector('.projectButton');
    const projectsButton = document.querySelector('.projectsButton');

    projectButton.addEventListener('click', () => {
        const askName = document.createElement('input');
        projectsButton.appendChild(askName);

        const submit = document.createElement('button');
        projectsButton.appendChild(submit);
    })
}

export {addAProject};