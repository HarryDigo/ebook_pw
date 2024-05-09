function first() { //calculadora função de primeiro grau
    let a = parseFloat(document.getElementById("first_a").value); //pega o valor de a e b
    let b = parseFloat(document.getElementById("first_b").value); //
    let x, y;

    if (isNaN(a) || isNaN(b)) { //checa se os campos tão preencidos
        alert("Insira os valores!");
        return;
    }

    let table = document.getElementById("first_table"); //pega a tabela e linhas
    let rows = table.querySelectorAll("tr");            //
    let cells = [];

    for (let i = 1; i < 12; i++) { //coloca ai o conteudo
        cells = rows[i].querySelectorAll("td"); //pega as células
        x = i-6;
        y = Math.round((a*x + b /*Função de primeiro grau*/)*100)/100; //arredonda para duas casas decimais se necessário
        cells[0].innerText = i-6;
        cells[1].innerText = `f(${x}) = ${y}`;
        cells[2].innerText = `(${x}; ${y})`;
    }

    table.style.opacity = 1; //ativa a tabela com animação :3

    const canvas = document.getElementById("first_canvas");
    const ctx = canvas.getContext("2d");
    const p = 20;

    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    let arr = [];

    a *= 40;
    b *= 40;
    for (let i = -10*p; i < 10*p; i++) {
        x = i/p;
        y = a*x + b;
        arr.push([x*40 + 400, 400 - y]);
    }
    x = 10*p;
    y = a*x + b;
    arr.push([x*40 + 400, 400 - y]);

    for (let i = 0; i < arr.length - 1; i++) {
        ctx.moveTo(arr[i][0], arr[i][1] + 1);
        ctx.lineTo(arr[i+1][0], arr[i+1][1] + 1);
        ctx.stroke();
    }

    canvas.style.opacity = 1;
}

function quadratic() { //calculadora função quadrática
    let a = parseFloat(document.getElementById("quadratic_a").value); //pega o valor de a, b e c
    let b = parseFloat(document.getElementById("quadratic_b").value); //
    let c = parseFloat(document.getElementById("quadratic_c").value); //
    let x, y;

    if (isNaN(a) || isNaN(b) || isNaN(c)) { //checa se os campos tão preencidos
        alert("Insira os valores!");
        return;
    }

    let table = document.getElementById("quadratic_table"); //pega a tabela e linhas
    let rows = table.querySelectorAll("tr");                //
    let cells = [];                                         

    for (let i = 1; i < 12; i++) { //coloca ai o conteudo
        cells = rows[i].querySelectorAll("td"); //pega as células
        x = i-6;
        y = Math.round((a*x**2 + b*x + c /*Função quadrática*/)*100)/100; //arredonda para duas casas decimais se necessário
        cells[0].innerText = i-6;
        cells[1].innerText = `f(${x}) = ${y}`;
        cells[2].innerText = `(${x}; ${y})`;
    }

    table.style.opacity = 1; //ativa a tabela com animação :3

    const canvas = document.getElementById("quadratic_canvas");
    const ctx = canvas.getContext("2d");
    const p = 20;

    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    let arr = [];

    a *= 40;
    b *= 40;
    c *= 40;
    for (let i = -10*p; i < 10*p; i++) {
        x = i/p;
        y = a*x**2 + b*x + c;
        arr.push([x*40 + 400, 400 - y]);
    }
    x = 10*p;
    y = a*x**2 + b*x + c;
    arr.push([x*40 + 400, 400 - y]);

    for (let i = 0; i < arr.length - 1; i++) {
        ctx.moveTo(arr[i][0], arr[i][1] + 1);
        ctx.lineTo(arr[i+1][0], arr[i+1][1] + 1);
        ctx.stroke();
    }

    canvas.style.opacity = 1;
}

function cubic() { //calculadora função cúbica
    let a = parseFloat(document.getElementById("cubic_a").value); //pega o valor de a, b, c e d
    let b = parseFloat(document.getElementById("cubic_b").value); //
    let c = parseFloat(document.getElementById("cubic_c").value); //
    let d = parseFloat(document.getElementById("cubic_d").value); //
    let x, y;

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) { //checa se os campos tão preencidos
        alert("Insira os valores!");
        return;
    }

    let table = document.getElementById("cubic_table"); //pega a tabela e linhas
    let rows = table.querySelectorAll("tr");            //
    let cells = [];

    for (let i = 1; i < 12; i++) { //coloca ai o conteudo
        cells = rows[i].querySelectorAll("td"); //pega as células
        x = i-6;
        y = Math.round((a*x**3 + b*x**2 + c*x + d /*Função cúbica*/)*100)/100; //arredonda para duas casas decimais se necessário
        cells[0].innerText = i-6;
        cells[1].innerText = `f(${x}) = ${y}`;
        cells[2].innerText = `(${x}; ${y})`;
    }

    table.style.opacity = 1; //ativa a tabela com animação :3

    const canvas = document.getElementById("cubic_canvas");
    const ctx = canvas.getContext("2d");
    const p = 20;

    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    let arr = [];

    a *= 40;
    b *= 40;
    c *= 40;
    d *= 40;
    for (let i = -10*p; i < 10*p; i++) {
        x = i/p;
        y = a*x**3 + b*x**2 + c*x + d;
        arr.push([x*40 + 400, 400 - y]);
    }
    x = 10*p;
    y = a*x**3 + b*x**2 + c*x + d;
    arr.push([x*40 + 400, 400 - y]);

    for (let i = 0; i < arr.length - 1; i++) {
        ctx.moveTo(arr[i][0], arr[i][1] + 1);
        ctx.lineTo(arr[i+1][0], arr[i+1][1] + 1);
        ctx.stroke();
    }

    canvas.style.opacity = 1;
}

function exponential() { //calculadora função cúbica
    let a = parseFloat(document.getElementById("exponential_a").value); //pega o valor de a
    let x, y;

    if (isNaN(a)) { //checa se os campos tão preencidos
        alert("Insira o valor!");
        return;
    }

    let table = document.getElementById("exponential_table"); //pega a tabela e linhas
    let rows = table.querySelectorAll("tr");                  //
    let cells = [];

    for (let i = 1; i < 12; i++) { //coloca ai o conteudo
        cells = rows[i].querySelectorAll("td") //pega as células
        x = i-6;
        y = Math.round((a**x /*Função exponencial*/)*100)/100; //arredonda para duas casas decimais se necessário
        cells[0].innerText = i-6;
        cells[1].innerText = `f(${x}) = ${y}`
        cells[2].innerText = `(${x}; ${y})`
    }

    table.style.opacity = 1; //ativa a tabela com animação :3

    const canvas = document.getElementById("exponential_canvas");
    const ctx = canvas.getContext("2d");
    const p = 20;

    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    let arr = [];

    for (let i = -10*p; i < 10*p; i++) {
        x = i/p;
        y = a**x - 1;
        arr.push([x, y]);
    }
    x = 10;
    y = a**x - 1;
    arr.push([x, y]);

    for (let i = 0; i < arr.length - 1; i++) {
        ctx.moveTo(arr[i][0]*40 + 400, 400 - (arr[i][1] + 1)*40);
        ctx.lineTo(arr[i+1][0]*40 + 400, 400 - (arr[i+1][1] + 1)*40);
        ctx.stroke();
    }

    canvas.style.opacity = 1;
}