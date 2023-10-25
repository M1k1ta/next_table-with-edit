function generateYYYYFromYY(YY: string) {
  const currentYear = new Date().getFullYear();

  const currentFirstTwoDigits = Number(currentYear.toString().slice(0, 2));
  const currentLastTwoDigits = Number(currentYear.toString().slice(2));
  let firstTwoDigits = String(currentFirstTwoDigits);

  if (Number(YY) > currentLastTwoDigits) {
    firstTwoDigits = String(currentFirstTwoDigits - 1);
  }

  const result = firstTwoDigits + YY;

  return result;
}


export const reverseDateFormat = (date: string) => {
  const reverseDate = date.split('-').reverse();
  reverseDate[0] = generateYYYYFromYY(reverseDate[0]);

  return reverseDate.join('-');
};
