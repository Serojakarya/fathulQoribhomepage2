function kocok(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// ------- PENGGUNAAN ------- //
//var acak = [1,2,3,4,5,6,7,8,9,10];
//acak2 = shuffle(acak);
//document.write(acak2);
//document.write("<br/>");
//document.write(acak2[0]);
//document.write(acak2[1]);
//document.write(acak2[2]);
//document.write(acak2[3]);
//document.write(acak2[4]);
//document.write(acak2[5]);
//document.write(acak2[6]);
//document.write(acak2[7]);
//document.write(acak2[8]);
//document.write(acak2[9]);
// window.sessionStorage.setItem("urut1",acak2[0]);
// window.sessionStorage.setItem("urut2",acak2[1]);
// window.sessionStorage.setItem("urut3",acak2[2]);
// window.sessionStorage.setItem("urut4",acak2[3]);
// window.sessionStorage.setItem("urut5",acak2[4]);
// window.sessionStorage.setItem("urut6",acak2[5]);
// window.sessionStorage.setItem("urut7",acak2[6]);
// window.sessionStorage.setItem("urut8",acak2[7]);
// window.sessionStorage.setItem("urut9",acak2[8]);
// window.sessionStorage.setItem("urut10",acak2[9]);