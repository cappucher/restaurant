import location from '../imgs/taco-bell-location.png'

const contact = () => {
    const contact = document.createElement('div');
    contact.classList.add("contact");

    const contactChild1 = document.createElement('div');
    contactChild1.textContent = "Call us at (406) 813-8065!";

    const contactChild2 = document.createElement('div');
    contactChild2.textContent = "We are located at 206 W Madison Ave, Belgrade, MT, USA.";

    const tacoLocation = new Image();
    tacoLocation.src = location;

    let elements = [contactChild1, contactChild2, tacoLocation];
    for (let i = 0; i < elements.length; i++){
        contact.appendChild(elements[i]);
    }

    return contact;
}

export default contact;