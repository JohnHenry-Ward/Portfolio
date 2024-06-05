import {splashTextOptions, splashColorOptions} from './splashOptions';

const setSplash = async (setSplashText: Function, setSplashColor: Function, firstRun: boolean, splashIndex: number, setSplashIndex: Function) => {
    let randomIndexText = getRandomTextIndex(firstRun, splashIndex, setSplashIndex);
    let randomColor = getRandomColor()
    let text = splashTextOptions[randomIndexText];
    setSplashColor(randomColor);
    await typeText(text, setSplashText)
    await deleteText(text, setSplashText);
}

const typeText = async (text: String, setSplashText: Function) => {
    for (let i = 0; i < text.length; i++) {
        setSplashText((prevText: string) => prevText + text[i]);
        await wait(100)
    }
    await wait(1000);
}

const deleteText = async (text: String, setSplashText: Function) => {
    for (let i = 0; i < text.length; i++) {
        setSplashText((prevText: string) => {
            let prevTextList = prevText.split('');
            prevTextList.pop();
            let newText = prevTextList.join('');
            return newText;
        });
        await wait(100)
    }
    await wait(1000);
}

const wait = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// make the first run always be Software Engineer, and don't have the same text back to back
const getRandomTextIndex = (firstRun: boolean, splashIndex: number, setSplashIndex: Function) => {
    let randomIndex = 0
    
    if (!firstRun) {
        randomIndex = Math.floor(Math.random() * splashTextOptions.length);

        while (splashIndex == randomIndex) {
            console.log('getting a new one!');
            randomIndex = Math.floor(Math.random() * splashTextOptions.length);
        }
    }

    setSplashIndex(randomIndex);

    return randomIndex;
}

const getRandomColor = () => {
    let randomIndexColor = Math.floor(Math.random() * splashColorOptions.length);
    return splashColorOptions[randomIndexColor];
}

const randomColorOrder = () => {
    return splashColorOptions.sort(() => Math.random() - 0.5)
}

export { setSplash, getRandomColor, randomColorOrder };