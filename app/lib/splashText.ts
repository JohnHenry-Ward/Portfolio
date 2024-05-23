
const splashTextOptions = ['Software Engineer', 'Problem Solver', 'Cat Dad', 'Plant Lover'];
const splashColorOptions = ['splash-blue', 'splash-brown', 'splash-purple', 'splash-orange', 'splash-yellow'];

const setSplash = async (setSplashText: Function, setSplashColor: Function) => {
    let randomIndexText = Math.floor(Math.random() * splashTextOptions.length);
    let randomIndexColor = Math.floor(Math.random() * splashColorOptions.length);
    let text = splashTextOptions[randomIndexText];
    setSplashColor(splashColorOptions[randomIndexColor]);
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

export default setSplash;