var btn = document.getElementById('gen-name');
var currNameContainer = document.getElementById('curr-name');

btn.addEventListener('click', handleClick)
    
currNameContainer.addEventListener('change',function(){
    var color = updateNameColor();
    document.currNameContainer.style.color = color;
});

function handleClick(){
    var genderType = getGenderType();
    var validNames = genderType === 'male' ? maleNameList : femaleNameList;
    var firstName = getRandElem(validNames);
    var middleName = getRandFilteredElem(validNames, firstName);
    var lastName = document.getElementById('last-name').value;
    return currNameContainer.innerText = firstName + ' ' + middleName + ' ' + lastName;
} 

function enterLastName() {
    return document.getElementById('last-name').innerText;
  }

function getGenderType() {
    return document.querySelector('input[type="radio"]:checked').value;
}

function getRandElem(arr) {
    return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandFilteredElem(arr, filter){
    var randEl = getRandElem(arr);
    while(randEl === filter) {
       randEl = getRandElem(arr);
    }
    return randEl;
}

function updateNameColor() {
    if(femaleNameList.checked){
        return "magenta";
    } else {
        return "royalblue"
    }
    
}