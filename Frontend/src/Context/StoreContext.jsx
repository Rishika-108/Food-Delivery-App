import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext (null);

const StoreContextProvider =  (props)=> {

   const [cartItems, setCartItems] = useState({});
   const url = "https://food-delivery-app-backend-4k2b.onrender.com";
   const [token, setToken] = useState("");
   const [food_list, setFoodList] = useState([]);

   const addToCart = async(itemId)=> {
     
      if ( !cartItems[itemId]) {
        setCartItems((prev)=> ({...prev,[itemId]:1}))
      } else  {
        setCartItems ((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
      }
      if (token) {
         await axios.post(url+ "/api/cart/add" , {itemId}, {headers : {token}})
      }
   } 
   const removeFromCart = async(itemId) => {
    setCartItems ((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
    if (token) {
      await axios.post(url + "/api/cart/remove", {itemId}, {headers : {token}})
    }
   }
   const getTotalCartAmount = ()=> {
      let totalAmount = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product)=>product._id === String(item));
            //totalAmount += itemInfo.price*cartItems[item];
            if (itemInfo) { // Ensure itemInfo exists before accessing price
               totalAmount += itemInfo.price * cartItems[item];
            } else {
               console.warn(`Item with id ${item} not found in food_list`);
            }
         }
      }
      return totalAmount;
   }
   // Fuction to load food items from database to frontend
   
   const fetchFoodList = async()=>  {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data)
      //console.log(response.data.data);
      }
   

   // Function to save data on selected data on webpage even when reloaded
   
   const loadCartData = async(token)=> {
      const response = await axios.post(url+ "/api/cart/get", {}, {headers : token});
      setCartItems(response.data.cartData);
   }

   useEffect ( ()=> {
      
      async function loadData() {
           await fetchFoodList();  
           if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
         /*await loadCartData(localStorage.getItem("token"));*/
         }  
      }
           loadData();
      
   },[])

    const contextValue = {
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
       url,
       token,
       setToken
    } 

    return (
         <StoreContext.Provider value={contextValue}>
             {props.children}
         </StoreContext.Provider>
    )
}

export default StoreContextProvider;
