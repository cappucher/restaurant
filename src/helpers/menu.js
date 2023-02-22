import beanTaco from '../imgs/bean-crispy-melt-taco.jpg'
import meltTaco from '../imgs/crispy-melt-taco.jpg'
import crunchyTaco from '../imgs/crunchy-taco.jpg'
import nachoTaco from '../imgs/nacho-cheese-tacos.jpg'
import potatoTaco from '../imgs/potato-taco.jpg'
import softTaco from '../imgs/soft-taco.jpg'

const item = (image, title, descrip) => {
    const item = document.createElement('div');
    item.classList.add("item");

    const food = new Image();
    food.src = image;

    const foodName = document.createElement('div');
    foodName.textContent = title;
    foodName.classList.add("foodName");

    const description = document.createElement('div');
    description.textContent = descrip;
    description.classList.add("description");

    item.appendChild(food);
    item.appendChild(foodName);
    item.appendChild(description);

    return item;
}

const foodContainer = () => {
    const foodContainer = document.createElement('div');
    foodContainer.classList.add("foodContainer");
    foodContainer.appendChild(item(beanTaco, "Black Bean Crispy Melt Taco", "A white-corn shell, freshly fried daily, with a melted layer of our three-cheese blend and nacho cheese sauce and filled with black beans, reduced-fat sour cream, lettuce, tomatoes and real shredded cheddar cheese."))
    foodContainer.appendChild(item(meltTaco, "Crispy Melt Taco", "A white-corn shell, freshly fried daily, with a melted layer of our three-cheese blend and nacho cheese sauce and filled with seasoned beef, reduced-fat sour cream, lettuce, tomatoes and real shredded cheddar cheese."));
    foodContainer.appendChild(item(crunchyTaco, "Crunchy Taco", "Unlike it's soft form brethren with a warm flour tortilla, the Crunchy Taco has a crunchy corn body and a wicked haymaker coming through on the seasoned beef, lettuce and cheese. It's the kind of taco that will bare‐knuckle‐box a roadside trucker. It knows how to live “off the grid” for up to three years. It will not tolerate you playing power chords on an acoustic guitar. Hard. Crunchy. Delicious. Original."))
    foodContainer.appendChild(item(nachoTaco, "Nacho Cheese Doritos Locos Tacos", "As you already know, the Nacho Cheese Doritos® Locos Tacos Supreme® all started with a dream. But with every dream, there's always that starting point. You know, the leap off. The idea that begins small but eventually launches you into a much greater thing. Cue in the Nacho Cheese Doritos® Locos Tacos. That's right. Subtract the supreme, and that's where it all began."))
    foodContainer.appendChild(item(potatoTaco, "Spicy Potato Soft Taco", "We don't know about you, but we’d rather be enjoying a Spicy Potato Soft Taco than playing the game Hot Potato. If you're one of those kids who has a thing for hot potatoes, why don’t you just get the Spicy Potato Soft Taco instead? It’s got warm and seasoned potato bites, real cheddar cheese, crisp lettuce, and creamy chipotle sauce for a little extra kick."))
    foodContainer.appendChild(item(softTaco, "Soft Taco", "While the Crunchy Taco’s got a tough outer shell, a bit of a mean streak, and a penchant for picking fights with strangers, the Soft Taco has a nice polite chill. Instead of a tough corn shell, the Soft Taco has a warm, flour tortilla that gently holds the seasoned beef, lettuce and cheese. It’s the kind of taco that will bring flowers to your mom when it’s invited over for dinner. It remembers your birthday, even without the help of social networks. Dreamy. Soft. Delicious."))
    return foodContainer;
}

export default foodContainer;
