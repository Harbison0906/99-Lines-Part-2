

let friends = ['Jesse', 'Clark', 'Dub', 'Jake', 'Jonathan'];

for (let i=0; i < friends.length; i++) {
  console.log(friends[i].toUpperCase() + ':');
  for (let x=99; x >= 1; x--) {
   if (x === 1) {
     console.log(x + ' line of code in the file, ' + x + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
   } else {
     let next = (x - 1);
     console.log(x + ' lines of code in the file, ' + x + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + next + ' lines of code in the file');
   }
  }
}