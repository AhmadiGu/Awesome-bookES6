import Books from './mainClass.js';
import BookMain from './showBook.js';
import CheckUp from './errorCheck.js';
import Data from './addLocal.js';

const add = (bookForm, collections) => {
  bookForm.add.addEventListener('click', (element) => {
    element.preventDefault();

    const { title } = bookForm;
    const { author } = bookForm;

    if (title.value === '' || author.value === '') {
      CheckUp.falseBook(title, author);
      CheckUp.trueBook(title, author);
    } else {
      CheckUp.trueBook(title, author);
      const book = new Books(title.value, author.value);
      Data.saveData(book);
      BookMain.showBook(collections, book);

      bookForm.reset();
    }
  });
};

const show = (collections) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      BookMain.showBooks(collections);
    },
  );
};

const singlePage = (item) => {
  item.forEach((link) => {
    link.addEventListener('click', () => {
      const page = document.querySelector(
        `#${link.getAttribute('data-trigger')}`,
      );

      document.querySelector('.active').classList.remove('active');

      link.classList.add('active');

      document.querySelector('.current').classList.remove('current');

      page.classList.add('current');
    });
  });
};

export { add, show, singlePage };