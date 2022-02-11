export const getCartTotal =(cart)=>
cart.reduce((amount,item) => item.price + amount, 0)
