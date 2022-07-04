let array1=JSON.parse(localStorage.getItem("cart_items"))||[];
var a=document.getElementById("cart_total");
a.innerText=700-array1.price;


const url=`https://grocery-masai.herokuapp.com/items`;
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    display(res.data)
})
.catch(function(err){
    console.log("err",err);
})

function display(data){
    data.map(function(ele,index){
        let datap=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.image;
        image.style.width="50%";
        image.style.height="70%";
        let name=document.createElement("p");
        name.innerText=ele.name;
        let price=document.createElement("p");
        price.innerText=ele.price;
        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
        btn.setAttribute("id","add_to_cart");
        btn.addEventListener("click",function(){
            startt(ele);
        })
        datap.append(image,name,price,btn)
        document.querySelector("#groceries").append(datap);
    })
}

function startt(el)
{
array1.push(ele)
localStorage.setItem("cart_items",JSON.stringify(array1));
window.location.reload();
}