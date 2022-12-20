
function rectanglesOverlap( TopLeftAngle1, BottomRightAngle1,  TopLeftAngle2,  BottomRightAngle2) {
let X_TopLeftAngle1 = TopLeftAngle1[0]
let Y_TopLeftAngle1 = TopLeftAngle1[1]
let X_BottomRightAngle1 = BottomRightAngle1[0]
let Y_BottomRightAngle1 = BottomRightAngle1[1]

let X_TopLeftAngle2 = TopLeftAngle2[0]
let Y_TopLeftAngle2 = TopLeftAngle2[1]
let X_BottomRightAngle2 = BottomRightAngle2[0]
let Y_BottomRightAngle2 = BottomRightAngle2[1]




if (X_TopLeftAngle1 == X_BottomRightAngle1 || Y_TopLeftAngle1 == Y_BottomRightAngle1 || 
    X_BottomRightAngle2 == X_TopLeftAngle2 || Y_TopLeftAngle2 == Y_BottomRightAngle2){
    return false;
}
   

if (X_TopLeftAngle1 > X_BottomRightAngle2 || X_TopLeftAngle2 > X_BottomRightAngle1) {
    return false;
}
if (-Y_BottomRightAngle1 > Y_TopLeftAngle2 || -Y_BottomRightAngle2 > Y_TopLeftAngle1) {
    return false;
}

return true;
}



if (rectanglesOverlap([10,10],[20,20],[25,25],[30,30])) {
    console.log("Yes");
} else {
    console.log("No");
}

// No


if (rectanglesOverlap([10,10],[20,20],[5,5],[30,30])) {
    console.log("Yes");
} else {
    console.log("No");
}

// Yes