export const dateTimeFormat = (dateString: number): string => {
  const date = new Date(dateString);
  const formatTemplate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short' });
  const formattedDate = formatTemplate.format(date);
  return formattedDate;
};

export const dateFormat = (dateString: number | string): string => {
  const date = new Date(dateString);
  const formatTemplate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short' });
  const formattedDate = formatTemplate.format(date);
  return formattedDate;
};
