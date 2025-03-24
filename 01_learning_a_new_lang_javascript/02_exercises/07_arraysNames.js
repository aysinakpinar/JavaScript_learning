const friendsNames = ['Beren', 'Aybuke', 'Mesut', 'Can']
console.log(friendsNames);

console.log(`length of the array ${friendsNames.length}`);

console.log(`second name in the array ${friendsNames[1]}`);

const newNames = friendsNames.concat('Merve', 'Selin');
console.log(newNames);

friendsNames.forEach((name) => {
    console.log(name);
});

newNames.forEach((name) => {
    console.log(name);
})