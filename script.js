document.querySelector('.adv').remove(); // удаление рекламы
document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')"; //смена фона страницы

const booksContainer = document.querySelector('.books'); // контейнер для книг
const arraybooks = Array.from(document.querySelectorAll(".book")); // массив книг

//сортировка по номеру в заголовке книги
arraybooks.sort((a, b) => {
    const bookA = +a.querySelector('a').textContent.match(/\d+/)[0];
    const bookB = +b.querySelector('a').textContent.match(/\d+/)[0];

    return bookA - bookB;
});

// возвращаем отсортированную стопку книг в контейнер
arraybooks.forEach(book => booksContainer.appendChild(book)); 
