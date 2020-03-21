var btn = document.getElementById('gen-name');
var currNameContainer = document.getElementById('curr-name');

btn.addEventListener('click', function(){
    var genderType = getGenderType();
    var allGender = genderType === 'male' ? maleNameList : femaleNameList;
    var randomGender = getRandElem(allGender);
    currNameContainer.innerText = randomGender;
});

function getGenderType() {

    return document.querySelector('input[type="radio"]:checked').value;
}

function getRandElem(arr) {
    return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}