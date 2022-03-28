async function setTime() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function loading() {

    for (i of [1, 2, 3, 4, 5]) {
        await setTime()
        document.querySelector("progress").value += 10
        load.style.width = 50 + i * 10 + "px"
        load.innerHTML = 50 + i * 10 + "%"
        console.log(load)
    }

}