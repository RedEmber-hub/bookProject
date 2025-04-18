// универсальная функция сортировки
const sortItems = (elements, getItemFn) =>
    elements.sort((a, b) => getItemFn(a) - getItemFn(b));

// получить номер книги из заголовка
const getBookNumber = el =>
    +el.querySelector('a').textContent.match(/\d+/)?.[0] || 999;

// вытаскиваем, сортируем книги и добавляем обратно в контейнер
const booksContainer = document.querySelector('.books');
const books = Array.from(document.querySelectorAll('.book'));
sortItems(books, getBookNumber);
books.forEach(book => booksContainer.appendChild(book));

// переименовываем заголовок книги 3
document.querySelectorAll('.book')[2].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';

// получить порядок главы по названию
const getChapterItem = el => {
    const text = el.textContent;

    if (text.startsWith('Введение')) return 0;
    if (text.startsWith('Предисловие')) return 1;
    if (text.startsWith('Глава')) return parseInt(text.match(/\d+/)?.[0]) || 99;
    if (text.startsWith('Приложение')) {
        const letter = text.match(/Приложение\s+([A-ZА-Я])/i)?.[1];
        return 100 + (letter ? letter.charCodeAt(0) : 0);
    }

    return 999;
};

// Сортировка глав в книге по индексу
const sortChaptersInBook = bookIndex => {
    const chapterList = document.querySelectorAll('.book')[bookIndex].querySelector('ul');
    const chapters = Array.from(chapterList.querySelectorAll('li'));
    sortItems(chapters, getChapterItem);
    chapters.forEach(ch => chapterList.appendChild(ch));
};

// Применяем к 2-й и 5-й книгам
sortChaptersInBook(1);
sortChaptersInBook(4);

// Добавление главы в 6-ю книгу
const addChapterToBook6 = () => {
    const book6 = document.querySelectorAll('.book')[5];
    const chapterList = book6.querySelector('ul');
    const newChapter = document.createElement('li');
    newChapter.textContent = 'Глава 8: За пределами ES6';

    const chapters = Array.from(chapterList.querySelectorAll('li'));
    const chapter7 = chapters.find(ch => ch.textContent.startsWith('Глава 7'));
    chapterList.insertBefore(newChapter, chapter7?.nextSibling || null);
};

addChapterToBook6();

// удаление рекламы
document.querySelector('.adv').remove();
//смена фона страницы
document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

