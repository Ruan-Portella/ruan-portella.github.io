export const getLanguage = () => {
  const language = localStorage.getItem('language');
  return language ? JSON.parse(language) : [];
};

export const setLanguage = (language) => {
  localStorage.setItem('language', JSON.stringify(language));
};

