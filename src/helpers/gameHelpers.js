export const isItPair = array => {
    const number = /\d+/g;
    
    let firstItem = array[0].replace(number, "");
    let secondItem = array[1].replace(number, "");
    
    return firstItem === secondItem ? true : false;
}

export const feedback = {
    pairTrue: ["Hurra, et par!", "Gratulerer, et nytt par", "Godt jobba!"],
    pairFalse: ["Æsj, prøv igjen", "Du bomma!", "Promp! Det var nære på!"],
    completed: ["Gratulerer, du klarte alle!", "Suksess! Du er en memorymester!", "I alle dager! Du klarte det!"],
    quizTrue: ["Du klarte det!", "Jippi! Det var riktig!", "Korrekt!", "Du er god!", "Jeg klatrer, jeg klatrer!"],
    quizFalse: ["Bæsj, det var feil", "Prøv igjen!", "Neeeeeei! Jeg vil opp!", "Du klarer det neste gang"]
};

export const randomOrder = (array, number) => {
    const tempArray = [...array];
    
    tempArray.length = number;
    
    let randomOrderedArray = tempArray.sort(() => Math.random() - 0.5);
    
    return randomOrderedArray
}

export const isItCorrect = (answer, fasit) => {
    return Number(answer) === fasit ? true : false;
}

export const getIndex = (array, id) => {
    for (let item in array) {
        if (array[item].id === id) {
            return item;
        }
    }
}

export const addToList = (array, id) => {
    const newArray = [...array, id];
    return newArray;
}

export const removeFromList = (array, id) => {

    const index = array.indexOf(id);

    array.splice(index, 1);
 
    return array;
}

export const isGameCompleted = (numberOfCards, pairs) => {
    if (pairs > 0) {
        const expectedNumberOfPairs = numberOfCards / 2;
        return pairs === expectedNumberOfPairs ? true : false;
    } 
}

export const getRandomListItem = (array) => {
    
    const randomIndex = Math.floor(Math.random() * array.length);
    
    return array[randomIndex]
}

export const cards = [
    { id: "bird1", url: "/img/memory/bird.jpg", isFlipped: false },
    { id: "bird2", url: "/img/memory/bird.jpg", isFlipped: false },
    { id: "bluefrog1", url: "/img/memory/bluefrog.jpg", isFlipped: false },
    { id: "bluefrog2", url: "/img/memory/bluefrog.jpg", isFlipped: false },
    { id: "colibri1", url: "/img/memory/colibri.jpg", isFlipped: false },
    { id: "colibri2", url: "/img/memory/colibri.jpg", isFlipped: false },
    { id: "howler1", url: "/img/memory/dimitry-b-howler-monkey-unsplash.jpg", isFlipped: false },
    { id: "howler2", url: "/img/memory/dimitry-b-howler-monkey-unsplash.jpg", isFlipped: false },
    { id: "gorilla1", url: "/img/memory/gorilla.jpg", isFlipped: false },
    { id: "gorilla2", url: "/img/memory/gorilla.jpg", isFlipped: false },
    { id: "monkey1", url: "/img/memory/monkey.jpg", isFlipped: false },
    { id: "monkey2", url: "/img/memory/monkey.jpg", isFlipped: false },
    { id: "sloth1", url: "/img/memory/sloth.jpg", isFlipped: false },
    { id: "sloth2", url: "/img/memory/sloth.jpg", isFlipped: false },
    { id: "frog1", url: "/img/memory/frog.jpg", isFlipped: false },
    { id: "frog2", url: "/img/memory/frog.jpg", isFlipped: false },
    { id: "momChild1", url: "/img/memory/momChild.jpg", isFlipped: false },
    { id: "momChild2", url: "/img/memory/momChild.jpg", isFlipped: false },
    { id: "monkeyFamily1", url: "/img/memory/monkeyFamily.jpg", isFlipped: false },
    { id: "monkeyFamily2", url: "/img/memory/monkeyFamily.jpg", isFlipped: false },
    { id: "orangutang1", url: "/img/memory/orangutang.jpg", isFlipped: false },
    { id: "orangutang2", url: "/img/memory/orangutang.jpg", isFlipped: false },
    { id: "treeMonkey1", url: "/img/memory/treeMonkey.jpg", isFlipped: false },
    { id: "treeMonkey2", url: "/img/memory/treeMonkey.jpg", isFlipped: false },
];