const path=require('path');

console.log(path.dirname('D:/Node.js_Riser/pathModules.js'));
console.log(path.extname('D:/Node.js_Riser/pathModules.js'));
console.log(path.basename('D:/Node.js_Riser/pathModules.js'));
const myPath= path.parse('D:/Node.js_Riser/pathModules.js');
console.log(myPath.root);
// console.log(myPath.name);