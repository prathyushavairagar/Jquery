
let modal=document.getElementById('simplemodal');
let modalbtn=document.getElementById('modalbtn');
let buttonPopupClose=document.getElementById('button-popup-close');
let span=document.getElementsByClassName('closebtn');
// updated this will hide at load.
$(document).ready(function(){
  $(".modal").hide();
});


modal.onclick=() =>
{
    modal.style.display="none";
    $("#simplemodal" ).hide();
}

modalbtn.onclick=() =>
{
    modal.style.display="block";
}
span.onclick=() =>
{
    modal.style.display="none";
    $("#button-popup-close").hide();

}
buttonPopupClose.onclick=() =>
{
    modal.style.display="none";
    $("#button-popup-close").hide();

}
window.onclick=(e) =>
{
    if(e.target==simplemodal)
    {
        modal.style.display="none"
    }
}