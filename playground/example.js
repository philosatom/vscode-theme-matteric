import path from 'path';

const getFullPath = (filename) => {
  return path.join(__dirname, filename);
};

const fullPath = getFullPath('example.js');

const obj = {
  string: 'string',
  multiline: 's1\ns2',
  interpolated: `Full path: ${fullPath}`,
  number: 3.14,
  boolean: false,
  other: [null, undefined],
};

// highlight search results:
console.log(obj.multiline);
console.log(obj.other);

export default () => { fullPath, obj };
