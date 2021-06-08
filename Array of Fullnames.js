
function fullNames(names) {
    return names.map( value => `${value.firstname} ${value.lastname}`)
}

names = [{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}]
console.log(fullNames(names));