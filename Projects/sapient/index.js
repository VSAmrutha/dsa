//import "./style.css";

let productDetails = [];
let htmltags = '';
let appDiv = document.getElementById("app");
let submitButton = document.getElementById("submitButton");
//window.onload(()=>fetchdata())

const fetchdata = async (order = "asc") => {
  console.log("fetch data fired");
  htmltags='';
  let data = await fetch(`https://fakestoreapi.com/products?sort=${order}`);
  let productDetails = await data.json();
  console.log("productDetails",productDetails)
  productDetails.map((product,i) => {
    console.log(i,product.title);
    htmltags +=`<div class="flexitem" ><p class="title" >${product.title}</p><img class="imgProduct" src=${product.image} alt=${product.title}/><p>${product.price}$</p></div>`;
  });
  console.log("order",order,htmltags)
  appDiv.innerHTML = `${htmltags}`;

};
//fetchdata();
window.onload = (event) => {
  console.log("page is fully loaded");
  fetchdata()
};
submitButton.addEventListener("click", () => {
  console.log("onclick data fired");
   let orderSelect = document.getElementById("selectOrder");
   let ordertype =orderSelect.value
   console.log(orderSelect.value,"orderSelect")
   fetchdata(ordertype);
 });
