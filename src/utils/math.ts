
export const getRandomBool = () => Math.random() < 0.5;

export const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
