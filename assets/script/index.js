const jacketPrice = document.getElementById('jacket_price');
const sneakersPrice = document.getElementById('sneakers_price');
const jeansPrice = document.getElementById('jeans_price');
const capPrice = document.getElementById('cap_price');

const discountButton = document.querySelector('.discount_button');
console.log(discountButton);

const allPrice = document.querySelector('.all_price');

allPrice.textContent = 
+jacketPrice.textContent + 
+sneakersPrice.textContent + 
+jeansPrice.textContent + 
+capPrice.textContent;

discountButton.addEventListener('click', function myFunction(){
    //условие, чтобы функция срабатывала только один раз
    if(myFunction.called) return;// если функция вызвана просто возвращаемся.
    //устанавливаем флаг, чтобы отметить что была вызвана:
    myFunction.called = true;

    allPrice.textContent = Math.round(allPrice.textContent - allPrice.textContent * 0.2);

    const jacketPriceDiscount = Math.round(jacketPrice.textContent - (jacketPrice.textContent * 0.2));
    const sneakersPriceDiscount = Math.round(sneakersPrice.textContent - (sneakersPrice.textContent * 0.2));
    const jeansPriceDiscount = Math.round(jeansPrice.textContent - (jacketPrice.textContent * 0.2));
    const capPriceDiscount = Math.round(capPrice.textContent - (capPrice.textContent * 0.2));

    jacketPrice.textContent = jacketPriceDiscount;
    sneakersPrice.textContent = sneakersPriceDiscount;
    jeansPrice.textContent = jeansPriceDiscount;
    capPrice.textContent = capPriceDiscount;
});

