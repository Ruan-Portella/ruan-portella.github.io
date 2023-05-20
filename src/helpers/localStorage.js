export const getLanguage = () => {
  const language = localStorage.getItem('language');
  return language ? JSON.parse(language) : [];
};

export const setLanguage = (language) => {
  localStorage.setItem('language', JSON.stringify(language));
};

export const getColor= () => {
  const color = localStorage.getItem('color');
  return color ? JSON.parse(color) : [];
};

export const setColor = (color) => {
  localStorage.setItem('color', JSON.stringify(color));
};


