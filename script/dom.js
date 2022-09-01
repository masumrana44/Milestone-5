// getElementsByTagName
// const liCollection = document.getElementsByTagName('li');
//     console.log(liCollection);
//     for(const li of liCollection){
//         console.log(li.innerHTML);
//     }

// //  getElementsByClassName
// const places = document.getElementsByClassName('places')
// // console.log(places);
// for (const place of places) {
//     console.log(place.innerHTML);
// }


// // getElementsById
// const furits = document.getElementById('furits-title')
// console.log(furits.innerText);


// // getElementBy querySelectorAll
// const jalli = document.querySelectorAll('.jalli-container li');
// console.log(jalli);
// for (const li of jalli) {
//     console.log(li.innerText);
// }



// more practice javascript selector
const sections = document.querySelectorAll('section')
// for (const section of sections) {
//     section.style.border = '2px solid blue'
//     section.style.marginBottom = '10px';
//     section.style.borderRadius = '5px';
// }
 
for (i = 0; i < sections.length; i++) {
    const section = sections[i];
    section.style.border = '2px solid tomato'
    section.style.marginBottom = '10px';
    section.style.borderRadius = '10px';
    section.style.marginLeft = '20';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray'
    section.style.textAlign = 'center'
    section.style.listStyle = 'none';
    
}

//1.Where to add
const furitsList = document.getElementById('furits-list');
//.what to be added
const li = document.createElement('li');

li.innerText = 'tomato';

// add the child
furitsList.appendChild(li);

 
const personList = document.getElementById('person-list');
const li2 = document.createElement('li');
li2.innerText = 'kuddos boyati';
personList.appendChild(li2);


// take firt section in js 
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Pc configration';
section.appendChild(h1);
mainContainer.appendChild(section);




// take second section in js
const secondSection = document.createElement('section');
const sectionTitle = document.createElement('h1');
sectionTitle.innerText = 'Component of Pc';
mainContainer.appendChild(secondSection);
secondSection.appendChild(sectionTitle);
const listItems = document.createElement('ul');
secondSection.appendChild(listItems);

const item = document.createElement('li');
item.innerText = 'SSD 256';
listItems.appendChild(item);
const item2 = document.createElement('li');
item2.innerText = 'Motherboard:gigabyte';
listItems.appendChild(item2);
const item3 = document.createElement('li');
item3.innerText = 'Value Top Casing';
const item4 = document.createElement('li');
item4.innerText = 'Havic Mouse';
listItems.appendChild( item4);


// set innerHtml direcly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress Section</h1>
<ul>
<li>T-shirts</li>
<li>Lungi</li>
<li>Gamca</li>
</ul>

`
mainContainer.appendChild(sectionDress);
