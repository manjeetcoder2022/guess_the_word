function back(){
    window.location='activity_1.html'
}
function get_score(){
    score = localStorage.getItem("score")
    document.getElementById("update").style.display="block"
    document.getElementById("update").innerHTML="score : " + score
   
}