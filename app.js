const menu = [
  {
    id: 1,
    title: "Tetris",
    category: "Category-1",
    img: "./images/tetris.jpeg",
    desc: `Arrange Blocks in Order`,
    link:"https://tetrisinjs-mradul.netlify.app"
  },
  {
    id: 2,
    title: "Memory Game",
    category: "Category-1",
    img: "./images/memorygame.png",
    desc: `Test Your Memory :-)`,
    link:"https://memorygame-mradul.netlify.app"
  },
  {
    id: 3,
    title: "Tic-Tac-Toe (O - X)",
    category: "Category-1",
    img: "./images/tictactoe.jpeg",
    desc: `Tic-Tac-Toe`,
    link:"https://flamboyant-villani-f26815.netlify.app"
  },
  {
    id: 4,
    title: "Ping Pong",
    category: "Category-2",
    img: "./images/Ping-Pong.png",
    desc: `Ping Pong Game |o|`,
    link: "https://ping-pong-games.netlify.app"
  },
  {
    id: 5,
    title: "Catch Me If You Can",
    category: "Category-2",
    img: "./images/Catch-Me-If-You-Can.jpg",
    desc: `Try to Catch the "Catch Me"`,
    link: "https://catch-me-if-you-can-game.netlify.app"
  },
  {
    id: 6,
    title: "Dinosaur Game",
    category: "Category-2",
    img: "./images/Dinosaur-Game.png",
    desc: `Dinosaur Game`,
    link: "https://chrome-dinosaur-game.netlify.app/"
  },
  {
    id: 7,
    title: "Space Shooter",
    category: "Category-3",
    img: "./images/sapceshooter.png",
    desc: `Shoot Aliens Out Of The Sky`,
    link: "https://space-shooter-by-sarthak.netlify.app/"
  },
  {
    id: 8,
    title: "Pacman",
    category: "Category-3",
    img: "./images/pacman.png",
    desc: `Game 8 Description`,
    link:"https://pacman-by-rudraksh.netlify.app/"
  },
  {
    id: 9,
    title: "game_name-9",
    category: "Category-4",
    img: "./images/game-9.jpeg",
    desc: `Game 9 Description`,
  },
  {
    id: 10,
    title: "game_name-10",
    category: "Category-4",
    img: "./images/game-10.jpeg",
    desc: `Game 10 Description`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
      <a href="${item.link}" target="_self" >    
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      </header>
      </a>
      <p class="item-text">
      ${item.desc}
      </p>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
