// Validation utility functions

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 6;
};

const validatePhone = (phone) => {
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone);
};

const validatePrice = (price) => {
  return !isNaN(price) && parseFloat(price) > 0;
};

const validateZip = (zip) => {
  const re = /^\d{5}(-\d{4})?$/;
  return re.test(zip);
};

module.exports = {
  validateEmail,
  validatePassword,
  validatePhone,
  validatePrice,
  validateZip
};
