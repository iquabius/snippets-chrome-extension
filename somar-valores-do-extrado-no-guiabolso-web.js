// Soma valores do extrato no Guiabolso Web
Array.prototype.slice.call(document.querySelectorAll('.sc-jtRfpW.hTaFtu .jss88 span')).map(sp => sp.innerText).map(val => val.replace(' R$ ', '').replace(',', '.')).map(v => Number.parseFloat(v)).reduce((acc, n) => (acc + n), 0);
