/**
 * Получает дату и возвращает ее в формате '19/01/2024, 19:46:30'
 * @param {Date} date
 * @returns {string}
 */
export function dateConvert(date) {
  const year = `${date.getFullYear()}`;
  const month = date.getMonth() + 1 >= 10 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
  const day = date.getDate() >= 10 ? `${date.getDate()}` : `0${date.getDate()}`;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}
