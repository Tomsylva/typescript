// function log(message){
//     console.log(message)
// }

// let message = "Hello there"

// log(message)

// // // // // // // // // // // 

// function doSomething() {
//     for(let i = 0; i < 5; i++){
//         console.log(i)
//     }
// }

// doSomething();

// // // // // // // // // // // 

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3]
// let f: any[] = [1, true, "a", false];

// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3}
// let backgroundColor = Color.Blue;

// // // // // // // // // // // 

// let message;
// message = "abc";
// let endsWithC = (<string>message).endsWith("c");
// let alternativeWay = (message as string).endsWith("c");
// // BOTH OF THESE ARE THE SAME

// // // // // // // // // // // 

// // ARROW FUNCTIONS
// let log = function(message) {
//     console.log(message)
// };

// let doLog = message => console.log(message);

// // // // // // // // // // //
// // INLINE ANNOTATION & INTERFACES

// interface Point {
//     x: number,
//     y: number,
// }

// // INLINE

// let drawPoint = (point: {x: number, y: number}) => {
//     console.log(x, y)
// }

// // INTERFACE

// let drawPoint = (point: Point) => {
//     console.log(point.x, point.y)
// }

// drawPoint({
//     x: 1,
//     y: 2
// })

// // OR WITH CLASSES/FIELDS/METHODS FOR COHERSION PURPOSES
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + "Y: " + this.y)
    }
}

let point = new Point(1, 2);

// CALLING METHOD FROM CLASS
// point.x = 1;
// point.y = 2;
point.draw();