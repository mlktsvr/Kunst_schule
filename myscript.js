function box1(){
    document.getElementById("mydropdown1").classList.toggle("show");
    clear_rest("mydropdown1");
}
function box2(){
    document.getElementById("mydropdown2").classList.toggle("show");
    clear_rest("mydropdown2");
}
function box3(){
    document.getElementById("mydropdown3").classList.toggle("show");
    clear_rest("mydropdown3");
}
function box4(){
    document.getElementById("mydropdown4").classList.toggle("show");
    clear_rest("mydropdown4");
}
function box5(){
    document.getElementById("mydropdown5").classList.toggle("show");
    clear_rest("mydropdown5");
}
function box6(){
    document.getElementById("mydropdown6").classList.toggle("show");
    clear_rest("mydropdown6");
}
function box7(){
    document.getElementById("mydropdown7").classList.toggle("show");
    clear_rest("mydropdown7");
}
function box8(){
    document.getElementById("mydropdown8").classList.toggle("show");
    clear_rest("mydropdown8");
}
function box9(){
    document.getElementById("mydropdown9").classList.toggle("show");
    clear_rest("mydropdown9");
}
function box10(){
    document.getElementById("mydropdown10").classList.toggle("show");
    clear_rest("mydropdown10");
}
function box11(){
    document.getElementById("mydropdown11").classList.toggle("show");
    clear_rest("mydropdown11");
}
function box12(){
    document.getElementById("mydropdown12").classList.toggle("show");
    clear_rest("mydropdown12");
}
function box13(){
    document.getElementById("mydropdown13").classList.toggle("show");
    clear_rest("mydropdown13");
}
function box14(){
    document.getElementById("mydropdown14").classList.toggle("show");
    clear_rest("mydropdown14");
}
function box15(){
    document.getElementById("mydropdown15").classList.toggle("show");
    clear_rest("mydropdown15");
}
function box16(){
    document.getElementById("mydropdown16").classList.toggle("show");
    clear_rest("mydropdown16");
}
function box17(){
    document.getElementById("mydropdown17").classList.toggle("show");
    clear_rest("mydropdown17");
}
function box18(){
    document.getElementById("mydropdown18").classList.toggle("show");
    clear_rest("mydropdown218");
}
function box19(){
    document.getElementById("mydropdown19").classList.toggle("show");
    clear_rest("mydropdown19");
}
function box20(){
    document.getElementById("mydropdown20").classList.toggle("show");
    clear_rest("mydropdown20");
}
function box21(){
    document.getElementById("mydropdown21").classList.toggle("show");
    clear_rest("mydropdown21");
}
function box22(){
    document.getElementById("mydropdown22").classList.toggle("show");
    clear_rest("mydropdown22");
}
window.onclick = function(event){
    if(!event.target.matches(".dropdown")){
        var dropwdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropwdowns.length; i++){
            var openDropdown = dropwdowns[i];
            if(openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }
}

function clear_rest(dropdown){
    for(i = 1; i <= 22; i++){
        var checking_dropdown = document.getElementById("mydropdown" + [i]);
        var checking = "mydropdown" + [i];
        if(checking != dropdown){
            if(checking_dropdown.classList.contains("show")){
                checking_dropdown.classList.remove("show");
                break;
            }
        }
    }
}

function scroll1(){
    document.getElementById("scrollknopf2").style.display = "block";
    document.getElementById("scrollknopf1").style.display = "none";

    document.getElementById("l0").style.display = "block";
    document.getElementById("l1").style.display = "block";
    document.getElementById("l2").style.display = "block";
    document.getElementById("l3").style.display = "block";
    document.getElementById("l4").style.display = "none";
    document.getElementById("l5").style.display = "none";
    document.getElementById("l6").style.display = "none";
}

function scroll2(){
    document.getElementById("scrollknopf1").style.display = "block";
    document.getElementById("scrollknopf2").style.display = "none";

    document.getElementById("l0").style.display = "none";
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "none";
    document.getElementById("l3").style.display = "none";
    document.getElementById("l4").style.display = "block";
    document.getElementById("l5").style.display = "block";
    document.getElementById("l6").style.display = "block";
}