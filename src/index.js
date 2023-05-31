const inputs = document.querySelectorAll('.inputsAreas')
const root = document.querySelector(':root')
const claimButton = document.getElementById('claimButton').addEventListener('click', () => {
    let verificationNumber = 0
    inputs.forEach((ev) => {
        let isEmpty = false
        if (ev.value ?? false === false) {
            verificationNumber += 1
            isEmpty = true
        }

        if (isEmpty === false) {
            ev.style.border = "0.1rem solid" + getComputedStyle(root).getPropertyValue('---erro-border')
        }
    })

    if (verificationNumber === 4) {
        alert('Thanks for choosing us!!')
        inputs.forEach(ev => {
            ev.value = ''
        })
    } else {
        alert('You need to fill all places')
    }
})

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', (ev) => {
        ev.target.style.border = "0.1rem solid " + getComputedStyle(root).getPropertyValue('---input-border');
    })
}
