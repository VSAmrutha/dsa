const products=document.getElementById("products")
products.innerHTML=''
const fetchData=async(type='asc')=>{
    const res=await fetch(`https://fakestoreapi.com/products?sort=${type}`)
    const data=await res.json();
    console.log(data,'data')
    let str=''
    data.forEach((item,index)=>str=str + `<div class="card"><p>${item.title}</p><img src=${item.image} alt=${item.image}/><p>${item.price}$</p></div>`);
    console.log(str)
    products.innerHTML=str

}
function handlechange(event){
    fetchData(event.target.value)
}
fetchData()