let projectsContainer = document.getElementById('projects-main-div');

/* wage description code */
let wageCalcButton = document.getElementById('wage-calc-button');
let wageCalcDescription = document.getElementById('wage-calc-description');
const wageCalcButtonDescriptionAnimationMouseIn = () => {
    wageCalcDescription.style.display = 'block';
}
const wageCalcButtonDescriptionAnimationMouseOut = () => {
    wageCalcDescription.style.display = 'none';
}
wageCalcButton.addEventListener('mouseenter', wageCalcButtonDescriptionAnimationMouseIn);
wageCalcButton.addEventListener('mouseout', wageCalcButtonDescriptionAnimationMouseOut);

/* guess the number description code */
let guessNumberButton = document.getElementById('guess-number-button');
let guessNumberDescription = document.getElementById('guess-number-description');
const guessNumberButtonDescriptionAnimationMouseIn = () => {
    guessNumberDescription.style.display = 'block';
}
const guessNumberButtonDescriptionAnimationMouseOut = () => {
    guessNumberDescription.style.display = 'none';
}
guessNumberButton.addEventListener('mouseenter', guessNumberButtonDescriptionAnimationMouseIn);
guessNumberButton.addEventListener('mouseout', guessNumberButtonDescriptionAnimationMouseOut);

/* bulk pick description code */
let bulkPickButton = document.getElementById('bulk-pick-button');
let bulkPickDescription = document.getElementById('bulk-pick-description');
const bulkPickButtonDescriptionAnimationMouseIn = () => {
    bulkPickDescription.style.display = 'block';
    projectsContainer.style.height = '300px';
    projectsContainer.style.transform =  'translate(0, 66.6%)';
}
const bulkPickButtonDescriptionAnimationMouseOut = () => {
    bulkPickDescription.style.display = 'none';
    projectsContainer.style.height = '200px';
    projectsContainer.style.transform =  'translate(0, 100%)';
}
bulkPickButton.addEventListener('mouseenter', bulkPickButtonDescriptionAnimationMouseIn);
bulkPickButton.addEventListener('mouseout', bulkPickButtonDescriptionAnimationMouseOut);

/* barneys trading cards description code */
let btcButton = document.getElementById('btc-button');
let btcDescription = document.getElementById('btc-description');
const btcButtonDescriptionAnimationMouseIn = () => {
    btcDescription.style.display = 'block';
}
const btcButtonDescriptionAnimationMouseOut = () => {
    btcDescription.style.display = 'none';
}
btcButton.addEventListener('mouseenter', btcButtonDescriptionAnimationMouseIn);
btcButton.addEventListener('mouseout', btcButtonDescriptionAnimationMouseOut);

/* pixelPaint description code */
let pixelPaintButton = document.getElementById('pixel-paint-button');
let pixelPaintDescription = document.getElementById('pixel-paint-description');

const pixelPaintButtonDescriptionAnimationMouseIn = () => {
    pixelPaintDescription.style.display = 'block';
}
const pixelPaintButtonDescriptionAnimationMouseOut = () => {
    pixelPaintDescription.style.display = 'none';
}
pixelPaintButton.addEventListener('mouseenter', pixelPaintButtonDescriptionAnimationMouseIn);
pixelPaintButton.addEventListener('mouseout', pixelPaintButtonDescriptionAnimationMouseOut);