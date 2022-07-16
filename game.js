player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")

player1_score=0
player2_score=0

document.getElementById("player1_name").innerHTML= player1_name + " : "
document.getElementById("player2_name").innerHTML=player2_name + " : "

document.getElementById("player_question").innerHTML="Question Turn : " + player1_name
document.getElementById("player_answer").innerHTML="Answer Turn : " + player2_name

document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score


function send(){


    word_given=document.getElementById("word").value 
    word=word_given.toLowerCase()

    first= word.charAt(1)
    
    half = Math.floor(word.length / 2 )  
    console.log(half)
    
    second = word.charAt(half)
    console.log(second)

    last= word.length - 1

    third= word.charAt(last)
 console.log(third)
    remove1= word.replace(first , "_") 
    console.log(remove1)
    remove2= remove1.replace(second , "_") 
    console.log(remove2)
    remove3= remove2.replace(third , "_")

    console.log(remove3)

    questions_word= "<h4 id='question'>  Que. "+   remove3 + " </h4>"
   input_box="<br> <span> Ans. </span> <input type='text' id='answer' placeholder='write answer'  > "
button= "<br> <br> <button onclick='check()' class='btn btn-primary' > Check" + "</button>"
    row= questions_word +input_box +button
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value =""

    console.log(questions_word)



}

question_turn='player1'
answer_turn='player2'

function check(){
    answer_1=document.getElementById("answer").value
    answer=answer_1.toLowerCase()
  console.log(answer)
  console.log(word)
    if(answer==word){
        if(answer_turn=='player1'){
            player1_score=player1_score+1
            document.getElementById("player1_score").innerHTML=player1_score
        }else {
            player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML=player2_score
        }
    }else{
        if(answer_turn=='player1'){
            player1_score=player1_score-1
            document.getElementById("player1_score").innerHTML=player1_score
        }else {
            player2_score=player2_score-1
            document.getElementById("player2_score").innerHTML=player2_score
        }
    }
  
    if(question_turn=='player1'){
        question_turn='player2'
        document.getElementById("player_question").innerHTML="Question Turn : " + player2_name
    }else{
        question_turn='player1'
        document.getElementById("player_question").innerHTML="Question Turn : " + player1_name
    }
   
    if(answer_turn=='player1'){
        answer_turn='player2'
        document.getElementById("player_answer").innerHTML="Answer Turn : " + player2_name
    }else{
        answer_turn='player1'
        document.getElementById("player_answer").innerHTML="Answer Turn : " + player1_name
    }



document.getElementById("output").innerHTML=''

}