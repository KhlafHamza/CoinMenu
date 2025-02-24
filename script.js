document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons and menus
  const buttons = document.querySelectorAll('.button');
  const menus = document.querySelectorAll('.menu');

  // Function to show the menu related to the clicked button
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('button--is-active'));

      // Add active class to the clicked button
      this.classList.add('button--is-active');

      // Hide all menus
      menus.forEach(menu => menu.classList.remove('menu--is-visible'));

      // Show the menu that matches the data-target
      const targetMenu = document.getElementById(this.getAttribute('data-target'));
      targetMenu.classList.add('menu--is-visible');
    });
  });
});

