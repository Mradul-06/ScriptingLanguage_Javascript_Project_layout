const menu = [
  {
    id: 1,
    title: "Tetris",
    category: "Category-1",
    img: "./images/tetris.jpeg",
    desc: `Arrange block in order`,
    link:"https://tetrisinjs-mradul.netlify.app"
  },
  {
    id: 2,
    title: "Memory Game",
    category: "Category-1",
    img: "./images/memorygame.png",
    desc: `Test Your Memory`,
    link:"https://memorygame-mradul.netlify.app"
  },
  {
    id: 3,
    title: "game_name-3",
    category: "Category-1",
    img: "./images/game-3.jpeg",
    desc: `Game 3 Description`,
  },
  {
    id: 4,
    title: "game_name-4",
    category: "Category-2",
    img: "./images/game-4.jpeg",
    desc: `Game 4 Description`,
  },
  {
    id: 5,
    title: "game_name-5",
    category: "Category-2",
    img: "./images/game-5.jpeg",
    desc: `Game 5 Description`,
  },
  {
    id: 6,
    title: "game_name-6",
    category: "Category-2",
    img: "./images/game-6.jpeg",
    desc: `Game 6 Description`,
  },
  {
    id: 7,
    title: "game_name-7",
    category: "Category-3",
    img: "./images/game-7.jpeg",
    desc: `Game 7 Description`,
  },
  {
    id: 8,
    title: "game_name-8",
    category: "Category-3",
    img: "./images/game-8.jpeg",
    desc: `Game 8 Description`,
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
      <a href=${item.link}>    
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      </header>
      <p class="item-text">
      ${item.desc}
      </p>
      </a>
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
