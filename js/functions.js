function showCount(){
    var count = getCookie("count");

    if (count == "")
        count = 0;

    document.getElementById("p_count").innerHTML = count;


}

function incrementCount(increment){
    var count = getCookie("count");

    if (count == "")
        count = increment;
    else
        count = parseInt(count) + increment;

    setCookie("count" , count, 999);

    document.getElementById("p_count").innerHTML = count;
}

function decrementCount(decrement){
    var count = getCookie("count");

    if (count == "")
        count = 0;
    else if (parseInt(count) <= 0)
        count = 0;
    else
        count = parseInt(count) - decrement;

    setCookie("count" , count, 999);

    document.getElementById("p_count").innerHTML = count;
}

function resetCount(){
    setCookie("count", 0, 999);
    showCount();
}

//hotfix show count afeter close modals
function onCloseModal(modal) {
  jQuery('#' + modal).removeClass('active');
  setTimeout(showCount, 100);
};