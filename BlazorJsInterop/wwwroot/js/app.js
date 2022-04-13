window.sayHi = function (title, name) {
    if (!name && !title) {
        return null;
    }

    if (!name) {
        return null;
    }

    if (title) {
        title = `${title} `;
    }
    else {
        title = "";
    }

    return `Greetings, ${title}${name}!`;
};

window.setRandomColor = function (elem) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    elem.style.backgroundColor = `#${randomColor}`;
};

window.findPet = function (componentRef) {
    setTimeout(async () => {
        const pet = {
            name: "Fido",
            species: "Dog",
            breed: "Beagle",
            sex: "Male",
            age: 4
        };
        await componentRef.invokeMethodAsync("OnPetFound", pet);
    }, 2000);
};