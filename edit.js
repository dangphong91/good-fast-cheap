let x =0;
function good() {
    document.getElementById("cheap").name = `gfc${x+1}`;
    document.getElementById("fast").name = `gfc${x+1}`;
    document.getElementById("good").name = `gfc${x}`;
    x++;
}
function cheap() {
    document.getElementById("good").name = `gfc${x+1}`;
    document.getElementById("fast").name = `gfc${x+1}`;
    document.getElementById("cheap").name = `gfc${x}`;
    x++;
}
function fast() {
    document.getElementById("good").name = `gfc${x+1}`;
    document.getElementById("cheap").name = `gfc${x+1}`;
    document.getElementById("fast").name = `gfc${x}`;
    x++;
}