vid = document.getElementsByTagName('video')[0];
var buton=document.getElementsByClassName('vjs-big-play-button')[0];
vid.muted=true;
autoplay();
 vid.muted=false;
var isAd=true;
vid.onplay = function(){
  isad=vid.getAttribute('src').search('blob')==-1;
  console.log(isad);
};

vid.onended=function(e){
     console.log('end');
      if(!isad)
      {
        setTimeout(nextEpisode,5000);
      }
    };

function nextEpisode()
{
  var next=document.getElementsByClassName('slick-current')[0].nextSibling.firstElementChild;
  window.location.replace(next.getAttribute('episode-url'));

}
function autoplay(){
  var promise = document.querySelector('video').play();
   if (promise !== undefined) {
        promise.then(_ => {
          console.log("Autoplay");
          //$("button[title|='Fullscreen']").click();
    }).catch(error => {
       console.log(error);
     });
   }
}
