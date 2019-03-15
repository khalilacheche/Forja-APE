var video = document.getElementsByTagName('video')[0];
isAd=false;
video.addEventListener('ended',function(e){
  //console.log(video.getAttribute('src'));
  if(!isAd)
    setTimeout(nextEpisode,5000);
},false);
console.log(document.getElementsByClassName("slick-current")[0].nextSibling.firstChild.attributes);
//nextEpisodeURL=document.getElementsByClassName("slick-current")[0].nextSibling.firstChild.getAttribute('episode-url');
//console.log(nextEpisodeURL);
video.onplay = function() {
    isAd=video.getAttribute('src').search('blob')==-1;
};
function nextEpisode () {
  console.log("next");
    console.log(video.getAttribute('src').search('blob')>-1);// What you want to do after the event
}
