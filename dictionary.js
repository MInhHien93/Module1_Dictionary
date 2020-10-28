let english = ["hi","go away","canellation","check"];
let vietnamese = ["xin chào","cút đi","hủy bỏ", "kiểm tra"];

function convertWord(str) {
    for (let i = 0; i < english.length; i++) {
        if(str === english[i]){
            console.log(vietnamese[i]);
        }
    }
}

convertWord("go away");