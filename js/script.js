function selectPage(element, page) { //seleciona página
    if (element.className.includes("active")) return;

    let target = document.getElementById(page);

    let page_navbar = document.getElementById(page+"_navbar");

    let page_buttons = [];
    page_buttons = document.querySelectorAll(".page_button");

    let topic_buttons = [];
    topic_buttons = page_navbar.querySelectorAll(".topic_button");

    let pages = [];                                                         //essa parte apaga as páginas e liga a página alvo
    pages = document.querySelectorAll(".page");                             //
    for (let i = 0; i < pages.length; i++) pages[i].style.display = "none"; //
    target.style.display = "block";                                         //

    for (let i = 0; i < page_buttons.length; i++) page_buttons[i].classList.remove("active"); //essa parte ativa o botão de página correto
    element.classList.add("active");                                                          //
    
    let topics = [];                                                          //essa parte apaga os tópicos e liga o tópico padrão
    topics = target.querySelectorAll(".topic");                               //
    for (let i = 0; i < topics.length; i++) topics[i].style.display = "none"; //
    target.querySelector("#"+page+"_default").style.display = "block";        //
    
    let page_navbars = document.querySelectorAll(".page_navbar");                         //essa parte apaga as navbars e liga a navbar correta
    for (let i = 0; i < page_navbars.length; i++) page_navbars[i].style.display = "none"; //
    document.getElementById(page+"_navbar").style.display = "block";                      //

    for (let i = 0; i < topic_buttons.length; i++) topic_buttons[i].classList.remove("active"); //essa parte atova o botão de tópico padrão
    page_navbar.querySelector(".first").classList.add("active");                                //
}

function selectTopic(element, page, topic) { //seleciona tópico (basicamente uma cópia da função acima)
    if (element.className.includes("active")) return;

    let target = document.getElementById(page);

    let topic_buttons = [];
    topic_buttons = document.querySelectorAll(".topic_button");

    let topics = [];                                                          //essa parte apaga os tópicos e liga o tópico alvo
    topics = target.querySelectorAll(".topic");                               //
    for (let i = 0; i < topics.length; i++) topics[i].style.display = "none"; //
    target.querySelector("#"+page+"_"+topic).style.display = "block";         //

    for (let i = 0; i < topic_buttons.length; i++) topic_buttons[i].classList.remove("active"); //essa parte ativa o botão de tópico correto
    element.classList.add("active");                                                            //
}