let slit = document.getElementsByClassName("image");
let slitNumber = slit.length;
let count = 0;

slitSee(count);

function left() {
  count--;
  slitSee(count);
}

function right() {
  count++;
  slitSee(count);
}

setInterval(() => {
  count++;
  slitSee(count);
}, 3000);

function slitSee(slitNo) {
  count = slitNo;

  if (slitNo >= slitNumber) {
    count = 0;
  }

  if (slitNo < 0) {
    count = slitNumber - 1;
  }

  for (let i = 0; i < slitNumber; i++) {
    slit[i].style.display = "none";
  }
  slit[count].style.display = "block";
}
