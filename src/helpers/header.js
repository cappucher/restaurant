const header = () => {
    const header = document.createElement('header');
    const tacoBell = document.createElement('div');
    tacoBell.textContent = "Taco Bell";
    header.appendChild(tacoBell);
    header.appendChild(access());

    return header;
}

const access = () => {
    const access = document.createElement('div');
    access.classList.add("access");

    const accessChild1 = document.createElement('div');
    accessChild1.textContent = "Home";
    accessChild1.addEventListener("click", () => {
        document.querySelector(".home").style.display = "block";
        document.querySelector(".contact").style.display = "none";
        const items = document.querySelectorAll(".item");
        for (let i = 0; i < items.length; i++){
            items[i].style.display = "none";
        }
    })

    const accessChild2 = document.createElement('div');
    accessChild2.textContent = "Menu";
    accessChild2.addEventListener("click", () => {
        document.querySelector(".home").style.display = "none";
        document.querySelector(".contact").style.display = "none";
        const items = document.querySelectorAll(".item");
        for (let i = 0; i < items.length; i++){
            items[i].style.display = "block";
        }
    })

    const accessChild3 = document.createElement('div');
    accessChild3.textContent = "Contact";
    accessChild3.addEventListener("click", () => {
        document.querySelector(".home").style.display = "none";
        document.querySelector(".contact").style.display = "block";
        const items = document.querySelectorAll(".item");
        for (let i = 0; i < items.length; i++){
            items[i].style.display = "none";
        }
    })

    let elements = [accessChild1, accessChild2, accessChild3];
    for (let i = 0; i < elements.length; i++){
        access.appendChild(elements[i]);
    }

    return access;
}

export default header;