var gold = 0;
var goldPerClick = 1;

var minerPrice = 50;

document.getElementById("defaultOpen").click();

function openTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function ObtainGold(){
  gold+=goldPerClick;
  document.getElementById("goldcounter").innerHTML = "Gold: " + gold;
  document.getElementById("statsGold").innerHTML = "Current Gold: " + gold;
  document.getElementById("statsGPC").innerHTML = "Gold Per Click: " + goldPerClick;
}