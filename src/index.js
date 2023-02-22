import './style.css'
import header from './helpers/header'
import home from './helpers/home'
import foodContainer from './helpers/menu'
import contact from './helpers/contact'

const component = () => {
    const main = document.createElement('main');
    main.appendChild(home());
    main.appendChild(foodContainer());
    main.appendChild(contact());
    return main;
}
  
document.body.querySelector("#content").appendChild(header());
document.body.querySelector("#content").appendChild(component());