const endDate="09 Novemeber 2023 12:56 PM";
document.getElementById('end-date').innerHTML=endDate;
const inputs=document.querySelectorAll('input')
const clock=()=>{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;//converts to milliseconds to seconds
    //convert to days
    if(diff<0) return;
    inputs[0].value=Math.floor(diff / 3600  / 24)
    //convert to hours
    inputs[1].value=Math.floor(diff / 3600 )%24
    inputs[2].value=Math.floor(diff / 60 )%60
    inputs[3].value=Math.floor(diff % 60 )
}
clock()
setInterval(()=>{
    clock()
},1000)
