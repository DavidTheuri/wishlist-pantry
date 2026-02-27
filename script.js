const nameButton = document.getElementById("name-submit-btn");
const userName = document.getElementById("user-name");
const welcomeSpan = document.getElementById("user-display");
const itemInput = document.getElementById("itemName");
const  itemLink = document.getElementById('itemLink');
const itemPrice = document.getElementById('itemPrice');
const itemStandout = document.getElementById('itemStandout');
const itemCategory = document.getElementById('itemCategory');
const addItemBtn = document.getElementById('save-btn');

nameButton.addEventListener('click' , () => {
    const enteredName = userName.value;
    welcomeSpan.textContent = enteredName;
})