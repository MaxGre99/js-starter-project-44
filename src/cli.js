import readlineSync from 'readline-sync';
export const getName = () => {
     const name = readlineSync.question('May I have your name? ');
     return name;
};