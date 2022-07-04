var coll=JSON.parse(localStorage.getItem("cart_items"))
var pro=collect.reduce(function(sum,elem){
    return sum+elem.price
},0)
var hro=document.getElementById("cart_total")
hro.innerText=pro;
coll.map(function(elem,index){
    var y=document.createElement("div")
    var im=document.createElement("img");
    im.src=elem.image;
    var n=document.createElement("p");
    n.innerText=elem.name;
    var p=document.createElement("p");
    p.innerText=elem.price;

var ht=document.createElement("button");
ht.innerText="remove";
ht.addEventListener("click",function(elem,index){
    delete1(elem,index)
})

y.append(im,n,p,ht)
document.getElementById("cart").append(y)
})
function delete1(elem,index){
    coll.splice(index,1)
    localStorage.setItem("cart_items",JSON.stringify(collect))
    window.location.reload()
}
