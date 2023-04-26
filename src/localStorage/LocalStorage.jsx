import { atom } from "recoil";

let datafromLocal=''

if(localStorage.getItem(user)){
    datafromLocal=JSON.parse(localStorage.getItem(user))
}

 export const  allDataFromLocalStorage= atom({
    key:'allDataFromLocalStorage',
    default:[datafromLocal]

})
