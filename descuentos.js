//const precioOriginal = 100;
//const descuento = 15;



//funcion para calcular el porcentaje 

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/

const coupons = [
    {
        name: "verano20",
        discount: 15,
    },
    {
        name: "electronica10",
        discount: 10,
    },
    {
        name: "cyberweekend",
        discount: 10,
    },
];

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    //const inputDiscount = document.getElementById("InputDiscount");
    //const discountValue = inputDiscount.value;
    
    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue
    }

    const userCoupon = coupons.find(isCouponValueValid);

    //let descuento;

    if (!userCoupon) {
        document.getElementById("errorInputCoupon").innerText = "El cupón " + couponValue + " no es válido";
        ResultPrice.innerText = "Escribe un cupón de descuento válido";
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const ResultPrice = document.getElementById("ResultPrice");
        ResultPrice.innerText = "El precio con descuento es " + precioConDescuento + " €";  
    }

    
    
    
}






