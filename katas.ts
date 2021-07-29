// export const squareSum = (numbers: number[]): number => (numbers.map(x => x*x)).reduce(function(a, b){return a + b;}, 0);

// export const getRealFloor = (n: number): number => n > 0 ? (n < 13 ? n - 1 : n - 2): n;

// export const mouthSize = (animal: string): string => animal.toLowerCase() === "alligator" ? "small" : "wide"

//export const digitize = (n: number): number[] => {
//     let arr : number[] = [];
//     let i = n.toString();
//     for(let j: number = 0; j < i.length; j++){
//       arr.unshift(parseInt(i[j]))
//     }
//     return arr;
//   };

// export const getAverage = (marks:number[]):number => Math.floor((marks.reduce(function(a, b){return a + b;}, 0))/marks.length);