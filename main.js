//czechitas lesson 8

let index = 0;
let obrazky = [
  "lolita_1.jpg",
  "lolita_2.jpg",
  "lolita_3.jpg",
  "lolita_4.jpg",
  "lolita_5.jpg",
  "lolita_6.jpg",
  "lolita_7.jpg",
];

let btnPredchozi = document.querySelector("#predchozi");
let btnDalsi = document.querySelector("#dalsi");
let obrazek = document.querySelector("#hlavni img");
let predchoziNahled = document.querySelector("#predchozi img");
let dalsiNahled = document.querySelector("#dalsi img");
let pocitadlo = document.querySelector("#pocitadlo");

let ul = document.createElement("ul");
ul.setAttribute("class", "stripe-list");
let stripe = document.querySelector("#stripe").appendChild(ul);


btnPredchozi.addEventListener("click", predchoziObrazek);
btnDalsi.addEventListener("click", dalsiObrazek);

zobrazitObrazek();

function predchoziObrazek() {
  if (index === 0) {
    index = obrazky.length - 1;
  } else {
    index--;
  }
  zobrazitObrazek();
}

function dalsiObrazek() {
  if (index === obrazky.length - 1) {
    index = 0;
  } else {
    index++;
  }
  zobrazitObrazek();
}

function zobrazitObrazek() {
  obrazek.src = "img/" + obrazky[index];

  let predchoziIndex = index - 1;
  let dalsiIndex = index + 1;

  if (predchoziIndex === -1) {
    predchoziIndex = obrazky.length - 1;
  }

  if (dalsiIndex === obrazky.length) {
    dalsiIndex = 0;
  }
  predchoziNahled.src = "img/" + obrazky[predchoziIndex];
  dalsiNahled.src = "img/" + obrazky[dalsiIndex];

  zobrazIndex();
}

function zobrazIndex() {
  pocitadlo.textContent = `${index + 1} / ${obrazky.length}`;
  
}
obrazky.forEach(renderImgList);

function renderImgList(element, index, obrazky) {
  let li = document.createElement("li");
  li.setAttribute("class", "stripe-list");
  ul.appendChild(li);
  let liHtml = `<img src='img/${obrazky[index]}' class='stripe-img' id="stripe-img-${index}">`;
  li.innerHTML = liHtml;
 
}




 