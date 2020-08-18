function clickButton() {
  const inputInfo = document.getElementById('text');
  
  const rusP = document.createElement('p');
  const transP = document.createElement('p');

  const divRus = document.createElement('div');
  const divTrans = document.createElement('div');

  divRus.className = 'divP';
  divTrans.className = 'divP';

  rusP.innerText = inputInfo.value;
  transP.innerText = transliterate(rusP.innerText);

  const rusTrans = document.getElementById('russianWords');
  const engTrans = document.getElementById('translitWords');
  
  divRus.appendChild(rusP);
  divTrans.appendChild(transP);
  rusTrans.appendChild(divRus);
  engTrans.appendChild(divTrans);

  const tooltipSpan = document.createElement('span');
  const tooltipSpanTrans = document.createElement('span');
  tooltipSpan.className = 'tooltiptext flexic';
  tooltipSpanTrans.className = 'tooltiptext flexic';

  rusP.className = 'tooltip';
  transP.className = 'tooltip';

  rusP.appendChild(tooltipSpan);
  transP.appendChild(tooltipSpanTrans);
  tooltipSpan.innerText = inputInfo.value;
  tooltipSpanTrans.innerText = transliterate(rusP.innerText);

  // console.log(transliterate(txt));

  inputInfo.value = '';
}

const actionButton = document.getElementById('inputButton');
actionButton.addEventListener('click', clickButton);

transliterate = (
  function () {
    const rus = 'щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь'.split(/ +/g);
    const eng = 'shh sh ch cz yu ya yo zh `` y  e` a b v g d e z i j k l m n o p r s t u f x `'.split(/ +/g);
    return function (text, engToRus) {
      let x;
      for (x = 0; x < rus.length; x += 1) {
        text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
        text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
      }
      return text;
    };
  }()
);

