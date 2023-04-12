// Add your custom JavaScript for storefront pages here.
if (window.storefront && window.storefront.context && window.storefront.context.resource === 'products') {
    storefront.on('widget:@ecomplus/widget-tag-manager', function () {
      setTimeout(function () {
        const $points = document.querySelector('.product__prices .prices__points')
        let points = document.querySelector('.product__prices .prices__points span').innerText.replace('+', '').trim()
        let transformToMoney = (Number(points) * 0.15).toFixed(2)
        const $money =  `<div id="dinheiro-volta"><span>Este produto gera <span class="dinheiro"><strong nid="changeMoney">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transformToMoney)}</strong></span> de cashback</span></div>`
        $('.product__buy').after($money)
        if ($('.product__kit').length) {
          $('.product__kit').after($money)
        }
      }, 500);
    });
  }
