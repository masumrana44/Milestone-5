 

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const alltitile = document.getElementsByClassName('section-title');
console.log(alltitile);

const sectionId = document.getElementById('sectionid');
console.log(sectionId);
sectionId.style.color = 'tomato';
sectionId.style.border = '3px solid ';
sectionId.style.background = 'lightgray';

const firstSection = document.getElementById('first-section');
firstSection.style.fontSize = '15px';
firstSection.style.padding = '30px';
firstSection.style.margin = '20px';
firstSection.style.border = '3px dotted black';
const makeh2 = document.createElement('h2');
makeh2.innerText = 'My table component';
firstSection.appendChild(makeh2)
const li1 = document.createElement('li');
li1.innerText = 'Mouse';
 




const mainContainer = document.getElementById('main-container');
const createSection = document.createElement('section');

section.innerHTML=`

<h1>Favourite food</h1>
<ul>
<li>Gorom BHat</li>
<li>Baza Elish mach</li>
<li> R Elish macher naiburi and dim</li>

</ul>

`

mainContainer.appendChild(createSection);
