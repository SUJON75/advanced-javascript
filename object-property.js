const students = [
    {id: 21, name: 'sujon'},
    {id: 31, name: 'Maa'},
    {id: 41, name: 'Madu'},
    {id: 71, name: 'Deepjole'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s=> s.id>40)
const biggerOne = students.find(s=> s.id>40)

console.log(biggerOne);