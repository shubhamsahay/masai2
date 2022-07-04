var j=0;
function start2(event){
    event.preventDefault();
    setInterval(function(){
        if(j==0){
            alert("Your order is confirmed")
        }
        if(j==3){
            alert("Your order is being Packed")
        }
        if(j==8){
            alert("Your order is in transit")
        }
        if(j==10){
            alert("Your order is out for delivery")
        }
        if(j==12){
            alert("Order delivered")
        }
        j++
    },1000)
}