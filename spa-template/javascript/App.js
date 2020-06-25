import "../css/app.css";
import "./materialize.js";
import Glide from "@glidejs/glide";

import { Sliders } from "./Sliders";
import { MainSidenav } from "./Sidenav";
import { ObserverPageAnimations } from "./ObserverPageAnimations";
import { onElementVisible } from "./ObserverCallbacks";


let observer = null
const elementsToObserveArr = []

function onContentLoaded(event) {
    observer = ObserverPageAnimations(elementsToObserveArr, onElementVisible)

    const sliders = document.querySelectorAll(".glide")
    MainSidenav()
    Sliders(sliders, Glide)
}

document.addEventListener("DOMContentLoaded", onContentLoaded)

