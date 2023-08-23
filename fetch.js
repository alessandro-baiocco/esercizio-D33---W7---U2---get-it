let croceCarello = [];
let articoliCarello = [];
let libraryId = 0;
let carello = document.querySelector(".carello");
let numeroArticoli = 0;
fetch("https://striveschool-api.herokuapp.com/books")
  .then((compBook) => compBook.json())
  .then((uncompressedBook) => {
    let biblioteca = document.querySelector(".biblioteca");
    uncompressedBook.forEach((book) => {
      let cardForBook = document.createElement("div");
      cardForBook.classList.add(`lId${libraryId}`);
      libraryId++;
      cardForBook.classList.add("card");
      cardForBook.classList.add("col-4");
      cardForBook.classList.add("col-xl-3");
      cardForBook.classList.add("p-0");
      cardForBook.style = "max-width: 22%";
      cardForBook.innerHTML = `<img src="${book.img}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.price}$</p>
      </div>
      <button class = "eliminateThis">scarta</button>;
      <button class = "buyNow">buy now</button>`;
      biblioteca.appendChild(cardForBook);
    });
    //------------------------------------variables---------------------------
    let allCards = document.querySelectorAll("main .card");
    let allCardBtsEl = document.querySelectorAll("main .eliminateThis");
    let allCardBtsBn = document.querySelectorAll("main .buyNow");
    let allTitle = document.querySelectorAll(".card h5");
    let allPrice = document.querySelectorAll(".card p");

    //-----------------------------------------------addEventListener
    allCardBtsEl.forEach((cardbtn, index) => {
      cardbtn.addEventListener("click", () => {
        allCards[index].classList.add("d-none");
        localStorage.setItem(`articoli`, `${carello.innerHTML}`);
      });
    });
    //-----------------------------------------------addEventListener2
    allCardBtsBn.forEach((cardbtn, index) => {
      cardbtn.addEventListener("click", () => {
        let ordineLibro = document.createElement("li");
        ordineLibro.innerHTML = `${allTitle[index].innerText} price: ${allPrice[index].innerText}
        <button class = "togliDalCarello" >X</button>`;
        carello.appendChild(ordineLibro);
        localStorage.setItem(`articoli`, `${carello.innerHTML}`);
      });
    });
  });
const articoli = () => {
  croceCarello = document.querySelectorAll("nav div ul li button");
  articoliCarello = document.querySelectorAll("nav div ul li ");
  croceCarello.forEach((cardbtn, index) => {
    cardbtn.addEventListener("click", () => {
      articoliCarello[index].classList.add("d-none");
      localStorage.setItem(`articoli`, `${carello.innerHTML}`);
    });
  });
};

window.onload = () => {
  if (localStorage.getItem("articoli") !== null) {
    carello.innerHTML = `${localStorage.getItem("articoli")}`;
  }
};
