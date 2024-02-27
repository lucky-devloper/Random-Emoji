let btnE1 = document.querySelector('button')
const apikey="7343ab2e7df1a3c9b007be3141f3771b363db2a0"
let emoji = document.querySelector(".emoji")
btnE1.addEventListener('click', randomemoji)

let num =0

async function randomemoji(){
    emoji.innerHTML = `<i class="fa-solid fa-spinner"></i>`
    const url = `https://emoji-api.com/emojis?access_key=${apikey}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    emoji.innerHTML = data[num].character
    num++
}