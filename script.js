const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const imgFrame = document.querySelector("#imgFrame");
//Get Elements from HTML

prevBtn.addEventListener('click', prevPic);
nextBtn.addEventListener('click', nextPic);

function prevPic(){
  console.log('prev');
  imgNum -= 1;
  if(imgNum < 1){
    imgNum = theNumOfFile;
  }
  imgFrame.src = 'images/' + imgNum + '.jpg'
};

function nextPic(){
  console.log('next');
  imgNum += 1;
  if(imgNum > theNumOfFile){
    imgNum = 1;
  }
  imgFrame.src = 'images/' + imgNum + '.jpg'
};
//if click the buttons these functions would be executed

let imgNum = 1;
//the first image in the folder would be opend when you run it

const theNumOfFile = 7;
//the number of images that in the folder. You must adjust this value as the number of images are changed.