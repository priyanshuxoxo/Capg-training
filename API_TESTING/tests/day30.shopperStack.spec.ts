import { test } from "@playwright/test";


test("Shopper login", async ({ request }) => {
//!Login as a shopper and get the JWT token
    let r1= await request.post("https://www.shoppersstack.com/shopping/users/login", {
        data: {
  "email": "abc4477@gmail.com",
  "password": "abc@123",
  "role": "SHOPPER"
}, ignoreHTTPSErrors: true
    })
    let body=await r1.json()
    
    console.log(body);
    console.log(body.data.jwtToken);
    let shopperId=body.data.userId  
    console.log(shopperId);

//!Use the JWT token to access the products API
    let r2 = await request.get("https://www.shoppersstack.com/shopping/products/alpha", {
        ignoreHTTPSErrors:true,
    })
    const prod = await r2.json()
    let prodId=prod.data[0].productId
    console.log(prodId)
    console.log(prod.data[0].name)
    console.log(prod.data[0].price)


//!Get from wishlist

    let r3= await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist` , {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}`
    }, ignoreHTTPSErrors:true
})
    const wishlist= await r3.json()
    console.log(wishlist)
    let itemId=wishlist.data[0].itemId
    console.log(itemId)


//!add to wishlist
    let r4= await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}`
    },
    data: {
        "productId": prodId,
        "quantity": 2
    },
    ignoreHTTPSErrors:true
})

    const addToWishlist= await r4.json()
    console.log(addToWishlist)


//!Add product to cart
    let r5= await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` },
    data: {
        "productId": prodId,
        "quantity": 2
    },
    ignoreHTTPSErrors:true
})
    const addToCart= await r5.json()
    console.log(addToCart)


//!Get products in cart
    let r6= await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` }, ignoreHTTPSErrors:true
})
    const cart= await r6.json()
    console.log(cart)



//!Add Address
    let r7= await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` },
        data: {
  "addressId": 35,
  "buildingInfo": "35thane",
  "city": "Pune",
  "country": "India",
  "landmark": "abcschool",
  "name": "Priyanshu Srivastav",
  "phone": "6394226160",
  "pincode": "432102",
  "state": "Maharashtra",
  "streetInfo": "dalal street",
  "type": "Home"
},
        ignoreHTTPSErrors:true
    })
    const addAddress= await r7.json()
    console.log(addAddress)
    let addressId=addAddress.data.addressId
    console.log(addressId)


//!Get Address
    let r8= await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` }, ignoreHTTPSErrors:true
})
    const getAddress= await r8.json()
    console.log(getAddress)


//!Place order
    let r9= await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` },
    data: {
  "address": {
  "addressId":addressId,
  "buildingInfo": "35thanethane",
  "city": "Pune",
  "country": "India",
  "landmark": "abcschool",
  "name": "Priyanshu Srivastav",
  "phone": "6394226160",
  "pincode": "432102",
  "state": "Maharashtra",
  "streetInfo": "dalal street",
  "type": "Home"
},
  "paymentMode": "COD"
}
,        ignoreHTTPSErrors:true
    })
    const placeOrder= await r9.json()
    console.log(placeOrder)

//!Get orders
    let r10= await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` }, ignoreHTTPSErrors:true
})
    const getOrders= await r10.json()
    console.log(getOrders)
    let orderId=getOrders.data[0].orderId
    console.log(orderId)
    console.log("hii");
    


//!Update order status
    let r12= await request.patch(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders/${orderId}`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` },
        data: {
  "status": "DELIVERED"
}
,        ignoreHTTPSErrors:true, params:{status:"DELIVERED"}    
    })
    const updateOrderStatus= await r12.json()
    console.log(updateOrderStatus)

//!Add product review
    let r11= await request.post(`https://www.shoppersstack.com/shopping/reviews/?productId=${prodId}`, {
        headers: {
    Authorization: `Bearer ${body.data.jwtToken}` },
        data: {
    // "productId": prodId,
  "dateTime":"2026-03-28T07:16:28.041Z",

  "description": "Good Stuff",
  "heading": "Good Stuff",
  "rating": 4,
  "shopperId": shopperId,
  "shopperName": "Priyanshu Srivastav"
},        ignoreHTTPSErrors:true,params:{
    productId: prodId
}
    });
    const addReview= await r11.json()
    console.log(addReview)
console.log(prodId);

    console.log(await r11.status());
    

})