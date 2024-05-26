let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetbtn");
let newbtn = document.getElementById("new-btn");
let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turno) {
            box.innerText = "o";
            turno = false;
        } else {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let patter of winpatterns) {
        let pos1val = boxes[patter[0]].innerText
        let pos2val = boxes[patter[1]].innerText
        let pos3val = boxes[patter[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner ", pos1val);
                alert("congratulation " + pos1val + " won ");
                resetbtn.click();
            }
        }

    }
};
resetbtn.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText = "";
    });
});
newbtn.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText = "";
    });
});


