import { useState } from "react";
const useMenuCard =()=>{
    let myData=[
        {   
            id:1,
            type:'boisson',
            name:'boisson gazeux',
            path:'./assets/img/kalibg.jpg',
            price: 2000,
            commande: false
        },
        {   
            id:2,
            type:'snacks',
            name:'snacks',
            path:'./assets/img/kali3.jpg',
            price: 3000,
            commande: false
        },
        {   
            id:3,
            type:'boisson',
            name:'Jus naturel',
            path:'./assets/img/kalibg.jpg',
            price: 8000,
            commande: false
        },
        {   
            id:4,
            type:'snacks',
            name:'snacks',
            path:'./assets/img/kali3.jpg',
            price: 5000,
            commande: false
        },
        {   
            id:5,
            type:'spaghetti',
            name:'spaghetti',
            path:'./assets/img/kali2.jpg',
            price: 8000,
            commande: false
        },
        {
            id:6,
            type:'soupe',
            name:'soupe',
            path:'./assets/img/kali1.jpg',
            price: 6000,
            commande: false
        },
        {
            id:7,
            type:'soupe',
            name:'soupe',
            path:'./assets/img/kali1.jpg',
            price: 7000,
            commande: false
        }
    ];
  const [DataObject, setDataobject]=useState(myData);
  
    
    return DataObject;
}
export default useMenuCard;