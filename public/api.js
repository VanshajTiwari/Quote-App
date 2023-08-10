async function fillData(){
    const {data}=await getting();
    console.log(data.data);
    data.data.forEach(element => {
       const Ele=document.createElement("div");
       Ele.classList.add('quote');
       Ele.innerHTML=`<div><h1>${element.quote}</h1>
            <h3 class=authorName>~ ${element.author}</h3>
    </div>
    <div><button class="shower" style="padding:0.6rem;background-color: green;color:white">view full Quote</button></div>`
    Queue.append(Ele); });
    const clicked=document.querySelectorAll(".shower");
    clicked.forEach(ele=>ele.addEventListener("click",(e)=>{
        const quote=e.target.closest('.quote');
        const author=(quote.querySelector('.authorName').innerHTML).split(" ")[1];
        brief(author);
    }));
   
    
}
async function brief(author){
   window.location.href = `http://127.0.0.1:8005/brief/${author}`;
}
async function sending(author,quote){
    const res=await axios({
        method:"POST",
        url:"http://127.0.0.1:8005/send",
        data:{author:author,quote:quote}
    }); 
    window.location.reload();
    return "done";
}

async function getting(){
    const res=await axios({
        method:"GET",
        url:"http://127.0.0.1:8005/Quotes"
    });
    return res;
}; 
