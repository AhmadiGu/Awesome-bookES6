import { DateTime } from './luxon.js';

const getDate = () => {
  const dateWrapper = document.querySelector('.date');
  const date = DateTime.now();
  const { year } = date;
  const { month } = date;
  const { day } = date;
  const time = DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS).toLocaleLowerCase();
  dateWrapper.innerText = `${year}/${month}/${day} 
   ${time}
  `;
};

export default getDate;
