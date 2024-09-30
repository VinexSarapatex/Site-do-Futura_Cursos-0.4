// const header = document.getElementById('bar');
// const headerClassList = bar.classList;
// window.addEventListener('scroll', () => {
//   if (window.scrollY >= 150) {
//     if (!headerClassList.contains('scrollHide')) {
//       headerClassList.add('scrollHide')
//     }
//   } else {
//     if (headerClassList.contains('scrollHide')) {
//       headerClassList.remove('scrollHide')
//     }
//   }
// })
var banner0 = document.getElementById('banner0');
var banner1 = document.getElementById('banner1');
var banner2 = document.getElementById('banner2');

setInterval(function() {
    banner1.style.opacity = 1
}, 5000);
setInterval(function() {
    banner2.style.opacity = 1
}, 10000);
setInterval(function() {
    banner1.style.opacity = 0
    banner2.style.opacity = 0
}, 15000);


function showMore() {
    var links = document.querySelector(".lateralbar");
    if (links.style.display === "none") {
        links.style.display = "flex";
        links.style.flexDirection =  "column";
        links.style.alignIntens =  "center";
    } else {
        links.style.display = "none";
    }
}