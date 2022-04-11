window.askYesOrNo = function(question) {
    return confirm(question);
};

window.setRandomColor = function(elem) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor = `#${randomColor}`;
};

window.findPet = function(componentRef) {
    setTimeout(async () => {
        const pet = {
            name: "Fido",
            species: "Dog",
            breed: "Beagle",
            age: 4
        };
        await componentRef.invokeMethodAsync("OnPetFound", pet);
    }, 2000);
};