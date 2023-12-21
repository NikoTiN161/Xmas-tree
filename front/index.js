
const items = document.querySelector('.items');
const templateToy = document.getElementById('toyTemplate');
let lorem = "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. s"

for (let i = 0; i < 10; i++) {
    templateToy.content.querySelector('.name').textContent = `От кого ${i}`;
    templateToy.content.querySelector('.description').textContent = `${lorem} ${i}`;
    templateToy.content.querySelector('.item').style.backgroundImage = `url(./img/toy${randomInteger()}.png)`
    items.append(templateToy.content.cloneNode(true))
}

//function random int from 1 to 4
function randomInteger() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}
