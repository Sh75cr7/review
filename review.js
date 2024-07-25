const Btn=document.querySelector("#submit-btn");
const textArea=document.querySelector("#text-area");
const reviewField=document.querySelector("#review");
// console.lsog(Btn,textArea,reviewField)

Btn.addEventListener("click",function(){
    // console.log(textArea.value)
    const TextValue=textArea.value
    // console.log(TextValue)
    const p=document.createElement("p");
    p.innerText=TextValue
    // console.log(p)
    reviewField.appendChild(p)

    // field clear 
    textArea.value=""
})





// enter button dile kaj korbe 
textArea.addEventListener("keyup",function(event){
    // console.log(event);
    if(event.key==="Enter"){
        const TextValue=textArea.value
        // console.log(TextValue)
        const p=document.createElement("p");
        p.innerText=TextValue
        // console.log(p)
        reviewField.appendChild(p)
    
        // field clear 
        textArea.value=""
    }
})