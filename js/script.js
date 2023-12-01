const changingThem = document.getElementById('changingTheme');

const mainColor = document.getElementById('mainColor');

const switchComments = document.getElementById('switch-comments')

const catalogComents = document.getElementById('catalog__list__comments')


changingThem.addEventListener('click', function () {
  // Перевіряємо, чи має елемент клас
  if (changingThem.classList.contains('navigations__other-theme-active')) {
    // Якщо має, то видаляємо
    changingThem.classList.remove('navigations__other-theme-active');
    mainColor.classList.remove('white');
  } else {
    // Якщо не має, то додаємо
    changingThem.classList.add('navigations__other-theme-active');
    mainColor.classList.add('white');
  }
});


switchComments.addEventListener('click', function () {
  if (switchComments.classList.contains('switch-comments-active')) {
    switchComments.classList.remove('switch-comments-active');
    catalogComents.classList.remove('catalog__list_info-comments-list-off')
  } else {
    switchComments.classList.add('switch-comments-active');
    catalogComents.classList.add('catalog__list_info-comments-list-off');
  }
});
