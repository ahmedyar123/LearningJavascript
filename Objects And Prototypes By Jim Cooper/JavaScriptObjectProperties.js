//JavaScript Object Properties
'use strict'

//Brackey Notation
var cat = {
    name: 'fluffy',
    color: 'white'
}
cat['Eye Color'] = 'Green';
console.log(cat['color']);

//Getters and Setters   

var cat1 = {
    name: { first: 'fluffy', last: 'white' },
    color: 'white'
}

Object.defineProperty(cat1, 'fullName', {
    get: function () {
        return this.name.first + ' ' + this.name.last;
    },
    set: function (value) {
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
})

cat1.fullName = 'Ahmed Abbasi'
console.log(cat1.fullName);
console.log(cat1.name.first);
console.log(cat1.name.last);