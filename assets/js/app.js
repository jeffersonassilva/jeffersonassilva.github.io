changeLanguage = function (language) {
    const hello = document.querySelector('#hello');
    const iam = document.querySelector('#iam');
    const description = document.querySelector('#description');
    const bible = document.querySelector('.ref-bible');

    if (language === 'pt') {
        hello.innerHTML = 'Olá mundo!';
        iam.innerHTML = 'Eu sou <span class="js">JS</span>ilva.';
        description.textContent = 'Um programador, cristão, instrumentista, apaixonado por antiguidades, marcenaria, filmes, seriados e raciocínio lógico!!';
        bible.innerHTML = '<p>João 3:16</p>'
    } else {
        hello.innerHTML = "Hello world!"
        iam.innerHTML = 'I am <span class="js">JS</span>ilva.';
        description.textContent = 'A system developer, christian, instrumentalist, in love for antiques, woodworking, films, series and logical reasoning!!';
        bible.innerHTML = '<p>John 3:16</p>'
    }
}