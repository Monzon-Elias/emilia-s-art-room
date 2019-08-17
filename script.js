/*I will try to create img tags inside a div inside the body. The div will be a grid container*/

const parent = document.getElementById("container");

for(let i = 1; i < 40; i++){
  let x = document.createElement("IMG");
  if(i < 10) x.setAttribute("src", "images/IMG_20190815_WEB_000"+ i +".jpg");
  else x.setAttribute("src", "images/IMG_20190815_WEB_00"+ i +".jpg");
  parent.appendChild(x);
}
