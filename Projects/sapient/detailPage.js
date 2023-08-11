//**********************Detail Page */
let searchData=new URLSearchParams(window.location.search);
let productId=searchData.get("product")
console.log(JSON.parse(localStorage.getItem('cart')) ,"localStorage.getItem('cart') ")
let cartTemp=JSON.parse(localStorage.getItem('cart')) || [],cart=[];
console.log(searchData,productId)
const productDiv=document.getElementById('product')
const getStars=(rating)=>{
    let num=Math.ceil(rating);
    
    let starEle=''
    for(let i=1;i<=5;i++){
        starEle=starEle+`<span class="fa fa-star ${i>num?'':"checked"}"></span>`
    }
    return starEle
}

const fetchData=async()=>{
    const data=await fetch(`https://fakestoreapi.com/products/${productId}`)
    const productDetail=await data.json();
    console.log(productDetail)
    let renderElement=''
    renderElement=`
    <h1 class='detailH1'>${productDetail.title}</h1>
    <div class='detailDivImg'><img class='detailImg' src=${productDetail.image} alt=${productDetail.title}/></div>

    <p class='detailDesc'><span>Description: </span class='bold'>${productDetail.description}</p>
    <p class='detailCat'><span class='bold'>Category: </span>${productDetail.category}</p>
    <span class='detailRate'>Rating - ${getStars(productDetail.rating.rate)}</span><span class='detailCount'> Count- ${productDetail.rating.count}</span>
    <p class='detailPrice bold'>${productDetail.price}$</p>
    <button type="button" id="cartButton" class="btn">Add to Cart</button>
    `;
    console.log("renderElement",renderElement);
    productDiv.innerHTML=renderElement;
    const cartBtn=document.getElementById("cartButton");
cartBtn.addEventListener('click',function(args){
console.log(!cartTemp.includes(+productId),"!cartTemp.includes(productId)");
let itemFound=cartTemp.findIndex(item=>item.id==productId)
if(cartTemp.length==0 || itemFound==-1){
    productDetail.quantity=1;
    productDetail.quantityPrice=productDetail.quantity*productDetail.price;
    cartTemp.push(productDetail) 
}else{

  cartTemp=  cartTemp.map((item,index)=>{
        console.log(item.id==productDetail.id,item.id,productDetail.id)
        if(item.id==productDetail.id){
            console.log("equal",item.quantity,item)
            item.quantity++;
            item.quantityPrice=item.quantity*item.price;
            console.log(item)
            return item;
        }else{
            return item
        }
    })
   
}
console.log(cartTemp,"carttemp")
localStorage.setItem('cart',JSON.stringify(cartTemp));
})
}
fetchData()

