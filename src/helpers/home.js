import ramsey from '../imgs/ramsey.jpg'

const home = () => {
    const amazing = document.createElement('div');
    amazing.classList.add("home");

    const amazingChild1 = document.createElement('div');
    amazingChild1.textContent = "Totally best tacos";

    const amazingChild2 = document.createElement('div');
    amazingChild2.textContent = "High quality tacos since 1962";

    const gordonRamsay = new Image();
    gordonRamsay.src = ramsey;

    const amazingChild3 = document.createElement('div');
    amazingChild3.textContent = "Order online or wait in line!";

    let elements = [amazingChild1, amazingChild2, gordonRamsay, amazingChild3];
    for (let i = 0; i < elements.length; i++){
        amazing.appendChild(elements[i]);
    }

    return amazing;
}

export default home;