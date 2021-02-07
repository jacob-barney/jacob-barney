let mainContainer = document.getElementById('main-container');

let homeButton = document.getElementById('home-button');
let homeContainer = document.getElementById('home-container');

const homeTransition = () => {
    homeContainer.style.display = 'block'
    aboutMeText.style.display = 'none';
    aboutMeContainer.style.opacity = '';
    aboutMeContainer.style.boxShadow = '';
    aboutMeContainer.style.width = '';
    aboutMeContainer.style.height = '';
    experienceText.style.display = 'none';
    experienceContainer.style.opacity = '';
    experienceContainer.style.boxShadow = '';
    experienceContainer.style.width = '';
    experienceContainer.style.height = '';
    educationText.style.display = 'none';
    educationContainer.style.opacity = '';
    educationContainer.style.boxShadow = '';
    educationContainer.style.width = '';
    educationContainer.style.height = '';
    trainingText.style.display = 'none';
    trainingContainer.style.opacity = '';
    trainingContainer.style.boxShadow = '';
    trainingContainer.style.width = '';
    trainingContainer.style.height = '';
    aboutMeContainer.style.display = 'block';
    experienceContainer.style.display = 'block';
    educationContainer.style.display = 'block';
    trainingContainer.style.display = 'block';
    projectsContainer.style.display = 'none';
    
}

homeButton.addEventListener('click', homeTransition);

let aboutMeButton = document.getElementById('about-me-button');
let aboutMeText = document.getElementById('about-me-text');
let aboutMeContainer = document.getElementById('about-me-container');

const aboutMeTransition = () => {
    aboutMeText.style.display = 'block';
    aboutMeContainer.style.opacity = '100%';
    aboutMeContainer.style.boxShadow = 'inset 0 0 4rem 0.25rem #fff';
    aboutMeContainer.style.width = '50rem';
    aboutMeContainer.style.height = 'fit-content';
    experienceText.style.display = 'none';
    experienceContainer.style.opacity = '';
    experienceContainer.style.boxShadow = '';
    experienceContainer.style.width = '';
    experienceContainer.style.height = '';
    educationText.style.display = 'none';
    educationContainer.style.opacity = '';
    educationContainer.style.boxShadow = '';
    educationContainer.style.width = '';
    educationContainer.style.height = '';
    trainingText.style.display = 'none';
    trainingContainer.style.opacity = '';
    trainingContainer.style.boxShadow = '';
    trainingContainer.style.width = '';
    trainingContainer.style.height = '';
    aboutMeContainer.style.display = 'block';
    experienceContainer.style.display = 'block';
    educationContainer.style.display = 'block';
    trainingContainer.style.display = 'block';
    projectsContainer.style.display = 'none';
    homeContainer.style.display = 'none'
    
}

aboutMeButton.addEventListener('click', aboutMeTransition);

let experienceButton = document.getElementById('experience-button');
let experienceText = document.getElementById('experience-text');
let experienceContainer = document.getElementById('experience-container');

const experienceTransition = () => {
    experienceText.style.display = 'block';
    experienceContainer.style.opacity = '100%';
    experienceContainer.style.boxShadow = 'inset 0 0 4rem 0.25rem #fff';
    experienceContainer.style.width = '50rem';
    experienceContainer.style.height = 'fit-content';
    aboutMeText.style.display = 'none';
    aboutMeContainer.style.opacity = '';
    aboutMeContainer.style.boxShadow = '';
    aboutMeContainer.style.width = '';
    aboutMeContainer.style.height = '';
    educationText.style.display = 'none';
    educationContainer.style.opacity = '';
    educationContainer.style.boxShadow = '';
    educationContainer.style.width = '';
    educationContainer.style.height = '';
    trainingText.style.display = 'none';
    trainingContainer.style.opacity = '';
    trainingContainer.style.boxShadow = '';
    trainingContainer.style.width = '';
    trainingContainer.style.height = '';
    aboutMeContainer.style.display = 'block';
    experienceContainer.style.display = 'block';
    educationContainer.style.display = 'block';
    trainingContainer.style.display = 'block';
    projectsContainer.style.display = 'none';
    homeContainer.style.display = 'none'
}

experienceButton.addEventListener('click', experienceTransition);

let educationButton = document.getElementById('education-button');
let educationText = document.getElementById('education-text');
let educationContainer = document.getElementById('education-container');

const educationTransition = () => {
    educationText.style.display = 'block';
    educationContainer.style.opacity = '100%';
    educationContainer.style.boxShadow = 'inset 0 0 4rem 0.25rem #fff';
    educationContainer.style.width = '50rem';
    educationContainer.style.height = 'fit-content';
    experienceText.style.display = 'none';
    experienceContainer.style.opacity = '';
    experienceContainer.style.boxShadow = '';
    experienceContainer.style.width = '';
    experienceContainer.style.height = '';
    aboutMeText.style.display = 'none';
    aboutMeContainer.style.opacity = '';
    aboutMeContainer.style.boxShadow = '';
    aboutMeContainer.style.width = '';
    aboutMeContainer.style.height = '';
    trainingText.style.display = 'none';
    trainingContainer.style.opacity = '';
    trainingContainer.style.boxShadow = '';
    trainingContainer.style.width = '';
    trainingContainer.style.height = '';
    aboutMeContainer.style.display = 'block';
    experienceContainer.style.display = 'block';
    educationContainer.style.display = 'block';
    trainingContainer.style.display = 'block';
    projectsContainer.style.display = 'none';
    homeContainer.style.display = 'none'
}

educationButton.addEventListener('click', educationTransition);

let trainingButton = document.getElementById('training-button');
let trainingText = document.getElementById('training-text');
let trainingContainer = document.getElementById('training-container');

const trainingTransition = () => {
    trainingText.style.display = 'block';
    trainingContainer.style.opacity = '100%';
    trainingContainer.style.boxShadow = 'inset 0 0 4rem 0.25rem #fff';
    trainingContainer.style.width = '50rem';
    trainingContainer.style.height = 'fit-content';
    experienceText.style.display = 'none';
    experienceContainer.style.opacity = '';
    experienceContainer.style.boxShadow = '';
    experienceContainer.style.width = '';
    experienceContainer.style.height = '';
    aboutMeText.style.display = 'none';
    aboutMeContainer.style.opacity = '';
    aboutMeContainer.style.boxShadow = '';
    aboutMeContainer.style.width = '';
    aboutMeContainer.style.height = '';
    educationText.style.display = 'none';
    educationContainer.style.opacity = '';
    educationContainer.style.boxShadow = '';
    educationContainer.style.width = '';
    educationContainer.style.height = '';
    aboutMeContainer.style.display = 'block';
    experienceContainer.style.display = 'block';
    educationContainer.style.display = 'block';
    trainingContainer.style.display = 'block';
    projectsContainer.style.display = 'none';
    homeContainer.style.display = 'none'
}

trainingButton.addEventListener('click', trainingTransition);

let projectsButton = document.getElementById('projects-button');
let projectsContainer = document.getElementById('projects-container');

const projectsTransition = () => {
    
    projectsContainer.style.display = 'block';
    aboutMeContainer.style.display = 'none';
    experienceContainer.style.display = 'none';
    educationContainer.style.display = 'none';
    trainingContainer.style.display = 'none';
    homeContainer.style.display = 'none'
}

projectsButton.addEventListener('click', projectsTransition);