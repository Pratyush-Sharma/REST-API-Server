// var rect = {
//     perimeter: (x,y) => (2*(x+y)),  
//     area: (x,y) => (x*y)
// };
var rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);


    rect(l,b, (err, rectangle) =>{
        if(err){
            console.log("Error: ", err.message);
        }
        else{
            console.log("area = " + rectangle.area());
            console.log("perimeter = " + rectangle.perimeter());
        }
    });

    console.log("after call to rect()");
    // if(l<=0 || b<=0){
    //     console.log("Rectangle dimensions should be positive integers");
    // }
    // else{
    //     console.log("area = "+ rect.area(l,b));
    //     console.log("perimeter = "+ rect.perimeter(l,b));
    // }

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
