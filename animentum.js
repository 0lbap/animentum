function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var url="https://www.assets.hawkbydesign.com/randomanime/images/anime/"+getRandomInt(1556)+"/anime-l.jpg";
bannerdiv = document.getElementsByClassName("visuel_ent_um")[0]
bannerimg = bannerdiv.getElementsByTagName("IMG")[0]
bannerimg.src=url;
bannerimg.style.height="auto";
bannerimg.style.maxHeight="none";
bannerdiv.style.height=280;
