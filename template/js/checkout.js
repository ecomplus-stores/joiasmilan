import '#template/js/checkout'
import './custom-js/checkout'

storefront.on('widget:@ecomplus/widget-tag-manager', () => {
    setTimeout(() => {
        if((window.innerWidth < 767) && $('#cart').length) {
            $('.cart__discount').after($('.recommended-items'))
        }
        const $points = document.querySelector('.prices__points')
        let cashback = document.querySelector('.prices__points span').innerText.trim()
        const $money =  `<div id="dinheiro-volta"><span><strong>Cashback! GANHE </strong> <span class="dinheiro"> <strong id="changeMoney">${cashback}</strong></span> em sua próxima compra!</span></div>`
        const $div = document.createElement('div')
        $div.id = 'cashback'
        $div.insertAdjacentElement('afterbegin', $points)
        $div.insertAdjacentHTML('afterbegin', $money)
        $('.cart__list').after($div)
        ecomCart.on('change', ({ data }) => {
          setTimeout(() => {
            points = document.querySelector('.prices__points span').innerText.replace('+', '').trim()
            transformToMoney = (Number(points) * 0.05).toFixed(2)
            document.getElementById('changeMoney').innerText = transformToMoney
          }, 800)
        })
        
    }, 800);
  });
