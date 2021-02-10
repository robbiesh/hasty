/**
 * @param  {string} f Filename
 * @param  {object} stat File System @see {@link http://nodejs.org/api/fs.html File System}
 */
const myFilter = (f, stat) => stat.isFile() && (f.includes('tailwind.config.js') );
module.exports = myFilter;