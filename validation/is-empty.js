const isEmpty = value =>
  value === undefined ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof calue === 'string' && value.trim().length === 0);

module.exports = isEmpty;
