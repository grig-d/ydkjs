const PHONE_PRICE = 199.99;
const ACCESSORY_PRICE = 9.99;
const SHOPPING_LIMIT = 250;
const TAX_RATE = 0.15;

const cardBalance = Number(prompt('Card Balance?'));
let amount = 0;

function tax(amount) {
  return amount * TAX_RATE;
}

function formattedValue(value) {
  return (value = '$' + value.toFixed(2));
}

while (amount + PHONE_PRICE < cardBalance) {
  amount = amount + PHONE_PRICE;
  console.log('Phone added to card');
  while (amount + ACCESSORY_PRICE < SHOPPING_LIMIT) {
    amount = amount + ACCESSORY_PRICE;
    console.log('Accessory added to card');
  }
  amount = amount + tax(amount);
}

console.log('Total Amount: ', formattedValue(amount));

if (amount > cardBalance || amount === 0) {
  console.log('there are not enough funds in your account');
}
