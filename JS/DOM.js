//document.write("Hello World!");
function result(){
    //get the value from input field and display it in paragraph
    let inputData= document.getElementById('myInput').value;
    document.getElementById('text').textContent=inputData;
    //valid age for voting 
    if(inputData>= 18){
        alert("You are eligible to vote");
    }
    else{
        alert("You are not eligible to vote");
    }
    //change the color of text and background
    let changeColor = document.getElementById('text');
    changeColor.style.color = "red";
    let bodyColor = document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor = "orange";
}

let para=document.getElementById('paratext');
function changetextColor(){
    para.style.backgroundColor ="#"+Math.floor(Math.random()*16777215).toString(16); 
}
para.addEventListener('mouseover',changetextColor);


