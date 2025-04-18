document.querySelector('.adv').remove(); // удаление рекламы

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
