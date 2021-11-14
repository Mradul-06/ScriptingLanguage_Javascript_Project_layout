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
    link: "https://ping-pong-game-sl.netlify.app"
  },
  {
    id: 5,
    title: "Ludo",
    category: "Category-2",
    img: "./images/Ludo.png",
    desc: `Ludo - Multiplayer Game`,
    link: "https://ludo-game-sl.netlify.app"
  },
  {
    id: 6,
    title: "Biker Game",
    category: "Category-2",
    img: "./images/Biker.png",
    desc: `Biker Game`,
    link: "https://biker-game-sl.netlify.app"
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
    desc: `Pacman Game`,
    link:"https://pacman-by-rudraksh.netlify.app/"
  },
  {
    id: 9,
    title: "Maze-Game",
    category: "Category-4",
    img: "./images/Maze.png",
    desc: "Maze ",
    link:"https://maze-game-byrudraksh.netlify.app/"
  },
  {
    id: 10,
    title: "Clarity Master",
    category: "Category-4",
    img: "./images/clarity.jpeg",
    desc: `Ball Game`,
    link:"https://clarity-masterbyrudraksh.netlify.app/"
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
