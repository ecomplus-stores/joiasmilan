// Add your custom JavaScript for storefront pages here.
if (window.storefront && window.storefront.context && window.storefront.context.resource === 'products') {
    storefront.on('widget:@ecomplus/widget-tag-manager', function () {
      setTimeout(function () {
        const $points = document.querySelector('.product__prices .prices__points')
        let points = document.querySelector('.product__prices .prices__points span').innerText.replace('+', '').trim()
        let transformToMoney = (Number(points) * 0.15).toFixed(2)
        const $money =  `<div id="dinheiro-volta"><span>Este produto gera <span class="dinheiro"><strong nid="changeMoney">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transformToMoney)}</strong></span> de Cashback</span><a target="_blank" href="https://www.joiasmilan.com.br/pages/programa-de-fidelidade"><button><svg width="20" height="20" viewBox="0 0 15 15" alt="icon" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0C6.01664 0 4.56659 0.439867 3.33323 1.26398C2.09986 2.08809 1.13856 3.25943 0.570907 4.62987C0.00324962 6.00032 -0.145275 7.50832 0.144114 8.96317C0.433503 10.418 1.14781 11.7544 2.1967 12.8033C3.2456 13.8522 4.58197 14.5665 6.03682 14.8559C7.49168 15.1453 8.99968 14.9967 10.3701 14.4291C11.7406 13.8614 12.9119 12.9001 13.736 11.6668C14.5601 10.4334 15 8.98336 15 7.5C15 5.51087 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48913 0 7.5 0ZM7.5 13.9286C6.22855 13.9286 4.98565 13.5515 3.92848 12.8452C2.87131 12.1388 2.04734 11.1348 1.56078 9.9601C1.07421 8.78544 0.946907 7.49287 1.19495 6.24585C1.443 4.99883 2.05526 3.85336 2.95432 2.95431C3.85337 2.05526 4.99883 1.443 6.24585 1.19495C7.49287 0.946904 8.78544 1.07421 9.96011 1.56077C11.1348 2.04734 12.1388 2.8713 12.8452 3.92848C13.5515 4.98565 13.9286 6.22855 13.9286 7.5C13.9286 9.20496 13.2513 10.8401 12.0457 12.0457C10.8401 13.2513 9.20496 13.9286 7.5 13.9286Z" fill="#353A42"></path><path d="M6.9643 3.21436H8.03573V9.10721H6.9643V3.21436ZM7.50001 10.7144C7.34108 10.7144 7.18572 10.7615 7.05357 10.8498C6.92143 10.9381 6.81843 11.0636 6.75761 11.2104C6.69679 11.3572 6.68088 11.5188 6.71188 11.6747C6.74289 11.8306 6.81942 11.9738 6.9318 12.0861C7.04418 12.1985 7.18737 12.2751 7.34324 12.3061C7.49912 12.3371 7.66069 12.3211 7.80753 12.2603C7.95436 12.1995 8.07986 12.0965 8.16816 11.9644C8.25646 11.8322 8.30358 11.6769 8.30358 11.5179C8.30358 11.3048 8.21892 11.1004 8.06822 10.9497C7.91752 10.799 7.71313 10.7144 7.50001 10.7144Z" fill="#353A42"></path></svg></button></a></div>`
        $('.product__buy').after($money)
        if ($('.product__kit').length) {
          $('.product__kit').after($money)
        }
      }, 500);
    });
  }
