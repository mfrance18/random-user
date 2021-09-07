import { userInfo } from "./userData.js";
import { getRandomUser } from "./DataManager.js";

export const showData = () => {
    const targetContent = document.querySelector(".userInfo")
    getRandomUser()
    .then((allInfo) => {
       targetContent.innerHTML = userInfo(allInfo)
    })
}



