document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      // Adiciona ou remove a classe 'active' ao botão clicado
      item.classList.toggle('active');

      // Remove a classe 'active' dos outros botões
      menuItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
});
