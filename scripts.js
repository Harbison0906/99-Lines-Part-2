let btn = document.getElementById('sing');


btn.addEventListener('click', function () {

  let friends = ['Jesse', 'Clark', 'Dub', 'Jake', 'Jonathan'];

  for (let i = 0; i < friends.length; i++) {
    
    let div = document.createElement('div');
    div.classList.add('friend');
    let friendHeading = document.createElement('h3');
    friendHeading.textContent = friends[i].toUpperCase() + ':';
    div.appendChild(friendHeading);
    document.body.appendChild(div);
    // console.log(friends[i].toUpperCase() + ':');
    for (let x = 99; x >= 1; x--) {
      let lineA = document.createElement('p');
      lineA.textContent = (x + ' line of code in the file, ' + x + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.')
      if (x === 1) {
        friendHeading.appendChild(lineA);
        //  console.log(x + ' line of code in the file, ' + x + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
      } else {
        let next = (x - 1);
        let lineB = document.createElement('p');
        lineB.textContent = (x + ' lines of code in the file, ' + x + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + next + ' lines of code in the file');
        
        friendHeading.appendChild(lineB);
        //  console.log(x + ' lines of code in the file, ' + x + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + next + ' lines of code in the file');
      }
    }
  }
});