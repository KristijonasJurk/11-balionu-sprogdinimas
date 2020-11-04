let index = 0;

document.addEventListener('mouseover', function (e) {

    if (e.target.className === "balloon") {
        e.target.style.backgroundColor = 'bisque';
        e.target.textContent = 'SPROGT!'
        index++;
        allGood();
    }
})
function allGood() {
    if (index === 25) {


        let balloons = document.querySelector('#balloons').innerHTML = '';
        const h1 = document.createElement('H1');
        h1.setAttribute('class', 'balloons')
        const answer = document.createTextNode('Didžiausi sveikinimai, tu laimėjai žaidima, vau negaliu patikėti!!! Nerealuuuu!');
        h1.appendChild(answer);
        document.getElementById('balloons').appendChild(h1);
    }
}