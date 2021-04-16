const navButtons = document.querySelectorAll('.nav-btn');
const navLists = document.querySelectorAll('.nav-list');

navButtons.forEach((el) => {
  el.addEventListener('click', (event) => {
    const clickedNavList = document.querySelector(
      `#${event.target.id} + .nav-list`,
    );
    const clickedButton = document.getElementById(event.target.id);

    removeActiveClass();

    clickedNavList.classList.toggle('active');
    clickedButton.classList.toggle('active');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('nav-btn')) {
    removeActiveClass();
  }
});

const removeActiveClass = () => {
  navLists.forEach((el) => {
    el.classList.remove('active');
  });

  navButtons.forEach((el) => {
    el.classList.remove('active');
  });
};

const hamburgerMenu = document.querySelector('.hamburger > img');
hamburgerMenu.addEventListener('click', (event) => {
  const navWrapper = document.querySelector('.nav-wrapper');
  navWrapper.classList.toggle('active');
});
