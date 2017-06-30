// 1. Define the JavaScript object that should be copied
var obj1 = {'name':'John', 'surname':'Doe', 'values':[1, 2, 3]};

// 2. Copy the object by using the JSON.stringify and JSON.parse libraries
var obj2 = JSON.stringify(obj1);
obj2 = JSON.parse(obj2);

// 3. Test wether the objects are ;independent 
obj1['name'] = 'George';
console.log(obj2['name']);