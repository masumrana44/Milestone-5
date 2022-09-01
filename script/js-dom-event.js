// option 1: direcly set on the HTML element 
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */}


//Option 2: add onclick function
function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}
 
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

//Option 3: add onclick
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = makeBlue2;
function makeBlue2() {
    document.body.style.backgroundColor = 'blue';
}


const bodyMakeSkyBlue = document.getElementById('skyblue');
bodyMakeSkyBlue.onclick=

function makeSkyblue() {
    document.body.style.backgroundColor = 'skyblue';
}


// Option 4

const pinkButton = document.getElementById('make-pink');
 
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}



const oliveButton = document.getElementById('make-olive');
oliveButton.addEventListener('click', function ()
{
    document.body.style.backgroundColor = 'olive';
}
)



// important we will use this 
const grayButton = document.getElementById('make-gray').addEventListener('click', function ()
{
    document.body.style.backgroundColor = 'gray';
}
)