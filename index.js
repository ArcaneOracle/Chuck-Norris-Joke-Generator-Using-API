const joke1 = document.getElementById("joke1");
const joke2 = document.getElementById("joke2");
const joke3 = document.getElementById("joke3");
const joke1Paragraph = document.getElementById("joke1Paragraph");
const joke2Paragraph = document.getElementById("joke2Paragraph");
const joke3Paragraph = document.getElementById("joke3Paragraph");
const jokeButton = document.getElementById("jokeButton");

async function fetchJokeCallback(paragraph) {
    try {
        const url = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url);
        const data = await response.json();

        paragraph.innerText = data.value;
    } catch (error) {
        console.log(error);
    }
}
fetchJokeCallback(joke1Paragraph);
fetchJokeCallback(joke2Paragraph);
fetchJokeCallback(joke3Paragraph);

jokeButton.addEventListener("click", () => {
    fetchJokeCallback(joke1Paragraph);
    fetchJokeCallback(joke2Paragraph);
    fetchJokeCallback(joke3Paragraph);
});

joke1.addEventListener("click", () => {
    fetchJokeCallback(joke1Paragraph);
});
joke2.addEventListener("click", () => {
    fetchJokeCallback(joke2Paragraph);
});
joke3.addEventListener("click", () => {
    fetchJokeCallback(joke3Paragraph);
});

