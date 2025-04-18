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

const book3 = document.querySelectorAll('.book')[2]; // третья книга
const heading = book3.querySelector('h2 a');
//замена названия книги
heading.innerHTML = 'Книга 3. this и Прототипы Объектов';

const sortChaptersByNumber = bookIndex => {
    const book = document.querySelectorAll('.book')[bookIndex];
    const chapterList = book.querySelector('ul');
    const chapters = Array.from(chapterList.querySelectorAll('li'));

    chapters.sort((a, b) => {
        const getOrder = text => {
            if (text.startsWith('Введение')) return 0;
            if (text.startsWith('Предисловие')) return 1;
            if (text.startsWith('Глава')) {
                return parseInt(text.match(/\d+/)?.[0]) || 99;
            }
            if (text.startsWith('Приложение')) {
                const letter = text.match(/Приложение\s+([A-ZА-Я])/i)?.[1];
                return 100 + (letter ? letter.charCodeAt(0) : 0);
            }
            return 999; // на всякий случай
        };

        return getOrder(a.textContent) - getOrder(b.textContent);
    });

    chapters.forEach(ch => chapterList.appendChild(ch));
};

sortChaptersByNumber(1); // вторая книга
sortChaptersByNumber(4); // пятая книга
