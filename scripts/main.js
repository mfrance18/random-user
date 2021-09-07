console.log("You look marvelous!")
import { showData } from "./userDataList.js"



showData()

document.querySelector("#userButton").addEventListener("click",(event) => showData(event))




