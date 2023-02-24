let questionsArr =[

 {
    question: "1. What is JavaScript?",
    option1: "JavaScript is a scripting language used to make the website interactive",
    option2: " JavaScript is an assembly language used to make the website interactive",
    option3: " JavaScript is a compiled language used to make the website interactive",
    option4: "None of the mentioned",
    answer: 1 
},
{
    question: "2. Which of the following is correct about JavaScript?",
    option1: "JavaScript is an Object-Based language",
    option2: "JavaScript is Assembly-language",
    option3: "JavaScript is an Object-Oriented language",
    option4: " JavaScript is a High-level language",
    answer: 2
},
{
    question: "3. Among the given statements, which statement defines closures in JavaScript?",
    option1: " JavaScript is a function that is enclosed with references to its inner function scope",
    option2: " JavaScript is a function that is enclosed with references to its lexical environment",
    option3: " c) JavaScript is a function that is enclosed with the object to its inner function scope",
    option4: "  d) None of the mentioned",
    answer: 2
},

{
    question: "4. Arrays in JavaScript are defined by which of the following statements?",
    option1: "It is an ordered list of values",
    option2: "It is an ordered list of objects",
    option3: "It is an ordered list of string",
    option4: "It is an ordered list of functions",
    answer: 1
},
{
    question: "5. Which of the following is not javascript data types?",
    option1: "Null type",
    option2: "Undefined type",
    option3: "Number type",
    option4: "All of the mentioned",
    answer: 4
},
{
    question: "6. Where is Client-side JavaScript code is embedded within HTML documents?",
    option1: "A URL that uses the special javascript:code",
    option2: " A URL that uses the special javascript:protocol",
    option3: "A URL that uses the special javascript:encoding",
    option4: "A URL that uses the special javascript:stack",
    answer: 2
},
{
    question: "7.  Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    option1: "Position",
    option2: "Window",
    option3: "Standard",
    option4: "Location",
    answer: 2
},
{
    question: "8. Which of the following can be used to call a JavaScript Code Snippet?",
    option1: "Function/Method",
    option2: "Preprocessor",
    option3: "Triggering Event",
    option4: "RMI",
    answer: 1
},
{
    question: "9. Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
    option1: "will work perfectly well on a Windows Machine",
    option2: "will be displayed as JavaScript text on the browser",
    option3: " will throw errors and exceptions",
    option4: " must be restricted to a Unix Machine only",
    answer: 1
},
{
    question: "10. Which of the following scoping type does JavaScript use?",
    option1: "Sequential",
    option2: "Segmental",
    option3: " Lexical",
    option4: " Literal",
    answer: 3
}
];




let heading=document.querySelector("h3");
let finalScore=document.getElementById("heading");

let label1=document.getElementById("label1");
let label2=document.getElementById("label2");
let label3=document.getElementById("label3");
let label4=document.getElementById("label4");
let btn=document.getElementById("button");

console.log(btn);
    let i=0;
    let score=0;

btn.addEventListener("click",checkForCorrectness);

   


function setQuestion(){
    let radioBtn=document.getElementsByTagName("input");

    for(let i=0;i<4;i++){
        
           radioBtn[i].disabled=false;
         
    } 
       document.getElementById("showOutput").innerHTML=''
       document.getElementById("showOutput").style.height='0px'
        if(i<10){

        
        i++;
        heading.innerHTML=questionsArr[i].question;
        label1.innerHTML=questionsArr[i].option1;
        label2.innerHTML=questionsArr[i].option2;
        label3.innerHTML=questionsArr[i].option3;
        label4.innerHTML=questionsArr[i].option4;
        btn.innerHTML="submit";
       
            btn.removeEventListener("click",setQuestion);
            btn.addEventListener("click",checkForCorrectness);
            console.log("Inside setQuestion")
        }
       
}

function LoadResultPage(){
            finalScore.innerHTML=`Score: ${score}`;
            //clearing the container
            form.innerHTML=''; 
            let ul=document.createElement("ul");
            ul.style.listStyle="none"
            for(let x=0;x<10;x++){
                let li=document.createElement("li");
                li.innerHTML=`${questionsArr[x].question}-answer: ${questionsArr[x].answer}`;
                ul.appendChild(li);
            }
            let restart=document.createElement("button");
            restart.onclick= reload;
            restart.innerHTML="Restart";
            
            form.appendChild(ul);
            form.appendChild(restart);
           

}    
function reload(){
    location.reload();
}
                 
            
        
     



function checkForCorrectness(){
    //  checking for the solution correct or not
    console.log("dbaane to de")
        let checked=-1;
        let radioBtn=document.getElementsByTagName("input");
       
        for(let i=0;i<4;i++){
            radioBtn[i].disabled=true;
             if(radioBtn[i].checked){
               checked=radioBtn[i].value;
               radioBtn[i].checked=false;
               console.log("kitne baar chal rha h")
               
             }
        }
          if(checked==-1){
            let skipped=document.getElementById("showOutput");
                  //  skipped.setAttribute("class","newElement");

                    skipped.style.backgroundColor="orange";
                    skipped.style.color="white";
                    skipped.style.height="20px"
                    // skipped.style.width="50px";
                    skipped.innerHTML="skipped"
                    
                    
                    // form.insertBefore(skipped,form.children[4])
          }
           else{
                 
                 let correct=document.getElementById("showOutput");
                 if(checked==questionsArr[i].answer){
                //    let correct = document.createElement("div");
                 //  correct.setAttribute("class","newElement");

                   correct.style.backgroundColor="green";
                   correct.style.color="white";
                //    correct.style.width="50px"
                   correct.style.height="20px"
                   correct.innerHTML="correct"
                //    correct.id="my-div";
                //    form.insertBefore(correct,form.children[4]);
                   score++;  
                 }    
                 else {
                    let incorrect = document.getElementById("showOutput");
                   // incorrect.setAttribute("class","newElement");
                    incorrect.style.backgroundColor="red";
                    incorrect.style.color="white";
                    incorrect.style.height="20px";
                    // incorrect.style.width="60px"
                    incorrect.innerHTML="incorrect"
                    // incorrect.id="my-div";
                    // form.insertBefore(incorrect,form.children[4])  
                 }  
            }
            btn.innerHTML="next";
            console.log("kar na bhai")
            btn.removeEventListener("click",checkForCorrectness);
            if(i!=9){
             btn.addEventListener("click",setQuestion);
            }
            else {
             btn.addEventListener("click",LoadResultPage)
            }

        }
