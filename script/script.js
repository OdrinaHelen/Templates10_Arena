const root = document.querySelector('#root');

const firstSection = document.createElement('section');
firstSection.classList.add('first_section');
root.append(firstSection);

const header1 = document.createElement('h1');
const paragraph1 = document.createElement('p');
const div1 = document.createElement('div');
firstSection.append(header1, paragraph1, div1);

header1.innerText = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ';
paragraph1.innerText = 'стадионы, газопроводы, мосты, дамбы';

div1.classList.add('parent_26');

for (let i = 0; i <= 3; i++) {
    const div_child = document.createElement('div');
    const h3_child = document.createElement('h3');
    const h4_child = document.createElement('h4');
    const h5_child = document.createElement('h5');

    div1.append(div_child);
    div_child.append(h3_child, h4_child, h5_child)
    h3_child.innerText = '26';
    h4_child.innerText = 'лет';
    h5_child.innerText = 'на рынке';
}
// ------------------------------------------
const secondSection = document.createElement('section');
secondSection.classList.add('second_section');
root.append(secondSection);

const header2 = document.createElement('h2');
header2.innerText = 'НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ';

const div2_section = document.createElement('div');
div2_section.classList.add('arena');
secondSection.append(header2, div2_section);

for (let i = 0; i <= 2; i++) {
    const arenaDiv = document.createElement('div');
    arenaDiv.classList.add('arena-div');

    const arenaImg = document.createElement('img');
    arenaImg.src = '../media/arena.jpg';

    const divLine = document.createElement('div');
    divLine.classList.add('line');

    const arenaH3 = document.createElement('h3');
    arenaH3.innerText = 'Арена';

    const arenaP = document.createElement('p');
    arenaP.innerText = 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.';

    div2_section.append(arenaDiv);
    arenaDiv.append(arenaImg, divLine, arenaH3, arenaP);

}
// ------------------------------------------
const thirdSection = document.createElement('section');
thirdSection.classList.add('request');
root.append(thirdSection);

const divThirdSection = document.createElement('div')
divThirdSection.classList.add('divThirdSection')
thirdSection.append(divThirdSection)

const divRequest = document.createElement('div');
// thirdSection.append(divRequest, buttonRequst);

const h2Request = document.createElement('h2');
h2Request.innerText = 'САМЫЕ УМНЫЕ ПРОЕКТЫ';
const h3Request = document.createElement('h3');
h3Request.innerText = 'РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!';

divRequest.append(h2Request, h3Request);

const buttonRequst = document.createElement('button');
buttonRequst.innerText = 'ВАШ ЗАПРОС'

divThirdSection.append(divRequest, buttonRequst);

// ------------------------------------------

const fourthSection = document.createElement('section')
fourthSection.classList.add('fourth-section')
root.append(fourthSection)

function name4() {


    const h21fourthSection = document.createElement('h2')
    h21fourthSection.innerText = 'ЧЕМ МЫ ЗАНИМАЕМСЯ?'
    fourthSection.append(h21fourthSection)
}

function bilding(a) {



    const divBildingContayner = document.createElement('div')
    divBildingContayner.classList.add('div-bilding-contayner')
    fourthSection.append(divBildingContayner)





    for (let i = 0; i <= (a - 1); i++) {
        const divBilding = document.createElement('div')
        divBilding.classList.add('div_bilding')
        divBildingContayner.append(divBilding)

        const imgBilding = document.createElement('img')
        imgBilding.src = '../media/logo_bilding.svg'
        divBilding.append(imgBilding)

        const h4Bilding = document.createElement('h4')
        h4Bilding.innerText = 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ'
        divBilding.append(h4Bilding)
    }

}
name4()
bilding(3)
name4()
bilding(6)

const h22fourthSection = document.createElement('h2')
h22fourthSection.innerText = 'КОНТАКТЫ'
fourthSection.append(h22fourthSection)

const divContactsContainer = document.createElement('div')
divContactsContainer.classList.add('div_contacts_container')
fourthSection.append(divContactsContainer)



const divAdress = document.createElement('div')
divAdress.classList.add('div_contacts')
divContactsContainer.append(divAdress)

const imgAdress = document.createElement('img')
imgAdress.src = '../media/logo_adress.svg'
divAdress.append(imgAdress)

const h3AdressName = document.createElement('h3')
h3AdressName.classList.add('h3_contacts_name')
h3AdressName.innerText = 'АДРЕС:'
divAdress.append(h3AdressName)

const h3Adress = document.createElement('h3')
h3Adress.classList.add('h3_contacts_content')
h3Adress.innerText = 'УЛИЦА МИРА 140, ОФИС 140-142'
divAdress.append(h3Adress)





const divTel = document.createElement('div')
divTel.classList.add('div_contacts')
divContactsContainer.append(divTel)

const imgTel = document.createElement('img')
imgTel.src = '../media/logo_tel.svg'
divTel.append(imgTel)

const h3TelName = document.createElement('h3')
h3TelName.classList.add('h3_contacts_name')
h3TelName.innerText = 'ТЕЛЕФОН:'
divTel.append(h3TelName)

const h3Tel = document.createElement('h3')
h3Tel.classList.add('h3_contacts_content')
h3Tel.innerText = '8 (812) 111-22-33 8 (812) 111-22-33'
divTel.append(h3Tel)




const divTime = document.createElement('div')
divTime.classList.add('div_contacts')
divContactsContainer.append(divTime)

const imgTime = document.createElement('img')
imgTime.src = '../media/logo_time.svg'
divTime.append(imgTime)

const h3TimeName = document.createElement('h3')
h3TimeName.classList.add('h3_contacts_name')
h3TimeName.innerText = 'ВРЕМЯ РАБОТЫ:'
divTime.append(h3TimeName)

const h3Time = document.createElement('h3')
h3Time.classList.add('h3_contacts_content')
h3Time.innerText = 'ПН-СБ 10:00 - 20:00'
divTime.append(h3Time)




const divMail = document.createElement('div')
divMail.classList.add('div_contacts')
divContactsContainer.append(divMail)

const imgMail = document.createElement('img')
imgMail.src = '../media/logo_mail.svg'
divMail.append(imgMail)

const h3MailName = document.createElement('h3')
h3MailName.classList.add('h3_contacts_name')
h3MailName.innerText = 'E-MAIL:'
divMail.append(h3MailName)

const h3Mail = document.createElement('h3')
h3Mail.classList.add('h3_contacts_content')
h3Mail.innerText = 'INFO@VIP.RU'
h3Mail.style.color = '#F7654A'
divMail.append(h3Mail)
// ---------------------------

const footer = document.createElement('footer')
root.append(footer)

const divFooter = document.createElement('div')
// divFooter.classList(footer_container)
footer.append(divFooter)


const div1Footer = document.createElement('div')
divFooter.append(div1Footer)

const p1Footer = document.createElement('p')
div1Footer.append(p1Footer)
p1Footer.innerText = '© 2019 Строительная компания'


const div2Footer = document.createElement('div')
divFooter.append(div2Footer)

const p2Footer = document.createElement('p')
div2Footer.append(p2Footer)
p2Footer.innerText = 'Разработано лучшей студей'