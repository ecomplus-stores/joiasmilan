import '#template/js/checkout'
import './custom-js/checkout'

storefront.on('widget:@ecomplus/widget-tag-manager', () => {
    setTimeout(() => {
        if((window.innerWidth < 767) && $('#cart').length) {
            $('.cart__discount').after($('.recommended-items'))
        }
        const $points = document.querySelector('.prices__points')
        let points = document.querySelector('.prices__points span').innerText.replace('+', '').trim()
        let transformToMoney = (Number(points) * 0.15).toFixed(2)
        const $money =  `<div id="dinheiro-volta"><span><strong>Ganhe</strong> <span class="dinheiro">R$ <strong id="changeMoney">${cashback}</strong></span> <br> em cashback na sua próxima compra</span></div>`
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
