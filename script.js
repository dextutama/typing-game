// 単語リストを取得
const words = ["apple", "banana", "cherry", "dog", "elephant"];
let currentWord = words[Math.floor(Math.random() * words.length)];

// 単語を表示
document.getElementById("word").innerText = currentWord;

function checkWord() {
    let input = document.getElementById("input").value;
    if (input === currentWord) {
        // スチル画像を表示
        document.getElementById("reward").style.display = "block";
        let rewardImage = "images/reward1.jpg"; // クリア報酬の画像
        document.getElementById("rewardImg").src = rewardImage;
        document.getElementById("downloadLink").href = rewardImage;
    } else {
        alert("間違いです！");
    }
}
