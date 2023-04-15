const resetButton = document.querySelector('.button')
const bill = document.querySelector('#bill')
const people = document.querySelector('#people')
const p5 = document.querySelector('#p5')
const p10 = document.querySelector('#p10')
const p15 = document.querySelector('#p15')
const p25 = document.querySelector('#p25')
const p50 = document.querySelector('#p50')
const custom = document.querySelector('#custom')
const peopleErrorText1 = document.querySelector('#peopleErrorText1')
const peopleErrorText2 = document.querySelector('#peopleErrorText2')
const tips = document.querySelectorAll('input[name="tip"]')
const tipResult = document.querySelector('#tip')
const totalResult = document.querySelector('#total')

let tipReal;

function calculateTip(){
    let totalAmount = document.querySelector('#bill').value 
    let numberOfPeople = document.querySelector('#people').value
    let tipPercent = document.querySelector('input[name="tip"]:checked') ? document.querySelector('input[name="tip"]:checked').value / 100 : document.querySelector('#custom').value / 100
    console.log(tips)
    console.log(tipPercent)
    return (totalAmount * tipPercent / numberOfPeople).toFixed(2)
}
function calculateTotal(){
    let totalAmount = document.querySelector('#bill').value 
    let numberOfPeople = document.querySelector('#people').value
    let tipPercent = document.querySelector('input[name="tip"]:checked') ? document.querySelector('input[name="tip"]:checked').value / 100 : document.querySelector('#custom').value / 100
    return (totalAmount * tipPercent / numberOfPeople + totalAmount/numberOfPeople).toFixed(2)
}
function areAnyFieldsFilled(){
    console.log(document.querySelector('#custom').value)
    return (document.querySelector('#bill').value || document.querySelector('#people').value || document.querySelector('input[name="tip"]:checked') || document.querySelector('#custom').value)
}
function areFieldsFilled(){
    return (document.querySelector('#bill').value && document.querySelector('#people').value && (document.querySelector('input[name="tip"]:checked') || document.querySelector('#custom').value))
}
function handleResetButton(){
    if(areAnyFieldsFilled()){
        resetButton.disabled = false;
    }else{
        resetButton.disabled = true;
    }
}
function resetFields(){
    bill.value = ""
    people.value = ""
    tips.forEach(tip => tip.checked=false)
    custom.value = ""
    handleResetButton()
}

function handleCheckboxColor(){
    document.querySelectorAll('.field-radio div').forEach(tip => {
        if(tip.classList.contains('color-black')){
            tip.classList.remove('color-black')
        }
        
    })
    
}

bill.addEventListener('change', (event) => {
    handleResetButton()
    if(event.target.value == 0){
     
        if(peopleErrorText1.classList.contains('hidden')){
            peopleErrorText1.classList.remove('hidden')
        }
        bill.style.outline = '2px solid red'
        
    }else {
        
        if(!peopleErrorText1.classList.contains('hidden')){
            peopleErrorText1.classList.add('hidden')
        }
        bill.style.outline = '2px solid hsl(172, 67%, 45%)'
    }

    if(!areFieldsFilled()) return
    tipResult.innerText = calculateTip()
    totalResult.innerText = calculateTotal()


})
tips.forEach(tip => {
    tip.addEventListener('change', (event) => {
        handleResetButton()
        handleCheckboxColor()
        if(!event.target.parentElement.classList.contains('color-black')){
            event.target.parentElement.classList.add('color-black')
        }
        if(!areFieldsFilled()) return
        tipResult.innerText = calculateTip()
        totalResult.innerText = calculateTotal()
})



})
people.addEventListener('change', (event) => {
    handleResetButton()
    if(event.target.value == 0){
     
        if(peopleErrorText2.classList.contains('hidden')){
            peopleErrorText2.classList.remove('hidden')
        }
        people.style.outline = '2px solid red'
        
    }else {
        
        if(!peopleErrorText2.classList.contains('hidden')){
            peopleErrorText2.classList.add('hidden')
        }
        people.style.outline = '2px solid hsl(172, 67%, 45%)'
    }

    if(!areFieldsFilled()) return
    tipResult.innerText = calculateTip()
    totalResult.innerText = calculateTotal()


})
custom.addEventListener('change', () => {
    handleResetButton()
    
    if(!areFieldsFilled()) return
    tipResult.innerText = calculateTip()
    totalResult.innerText = calculateTotal()


})

resetButton.addEventListener('click', resetFields)

custom.addEventListener('click', () => {
    handleCheckboxColor()
    document.querySelectorAll('input[name="tip"]').forEach(tip => {
        tip.checked = false
    })
})
tips.forEach(tip => {
    tip.addEventListener('click', () => {
        document.querySelector('#custom').value = ''
    })
})