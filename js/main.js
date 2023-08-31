function saludo() {
    alert("Bienvenido a mi website con bootstrap y Javascript :D")
}

function suma() {
    // declaramos las variables necesarias
    let a=0;
    let b=0;
    let s=0;
    
    // solicitamos los valores
    a=parseInt(prompt("Ingrese el primer valor a sumar"))
    b=parseInt(prompt("Ingrese el segundo valor a sumar"))

    // realizamos los procedimientos

    s=a+b;

    // mostramos el resultado en pantalla
    alert("El resultado de la suma es: "+s);
}

function operaciones() {
    alert("Algoritmo que calculará la suma, retsa, multiplicación y división de los valores que se ingresen");

    let n1=0;
    let n2=0;
    let s=0;
    let r=0;
    let m=0;
    let d=0;

    n1=parseInt(prompt("Ingrese el primer valor de las operaciones a calcular"));
    n2=parseInt(prompt("Ingrese el segundo valor de las operaciones a calcular"));

    s=n1+n2;
    r=n1-n2;
    m=n1*n2;
    d=n1/n2;

    alert("Los resultados de cada operacion son: \nSuma: "+s+"\nResta: "+r+"\nMultiplicación: "+m.toFixed(2)+"\nDivisión: "+d.toFixed(1));

}

function mayor2() {
    alert("Algoritmo que determinará el numero mayor de los ingresados.");
    let n1=0;
    let n2=0;

    n1=parseInt(prompt("Ingrese el primer valor"));
    n2=parseInt(prompt("Ingrese el segundo valor"));

    // = dar un valor a el de otro
    // == es para comparaciones 
    // === para comparar valor y tipo de dato
    if (n1==n2) {
        alert("Los valores ingresados son iguales");
    }
    else if (n1>n2) {
        alert("El numero mayor es "+n1);
    }
    else {
        alert("El numero mayor es "+n2);
    }


}

function menor3() {
    alert("Algoritmo que dirá cual es el menor numero de los que se interesen")
    
    n1=0;
    n2=0;
    n3=0;

    n1=parseInt(prompt("Numero 1:"));
    n2=parseInt(prompt("Numero 2:"));
    n3=parseInt(prompt("Numero 3:"));

    if ((n1==n2)||(n1==n3)||(n2==n3)) {
        alert("Hay numeros que son iguales");
    }
    else if ((n1<n2)&&(n2<n3)) {
        alert("El numero mas pequeño es: "+n1);
    }
    else if ((n2<n1)&&(n1<n3)) {
        alert("El numero mas pequeño es: "+n2);
    }
    else {
        alert("El numero mas pequeño es: "+n3);
    }
}

function promedio() {
    // el colegio abc, requiere un algoritmo o un sistema que permita a los diferentes estudiantes ingresar su nombre, materia y siete calificaciones y que este le indique si aprobó la materia teniendo en cuenta que se aprueba si el puntaje es mayor o igual a 6. Las calificaciones se califican de 1 -10.
    alert("Algoritmo para determinar si pasaste o no.");
    let n="";
    let m="";
    let n1=0;
    let n2=0;
    let n3=0;
    let n4=0;
    let n5=0;
    let n6=0;
    let n7=0;
    let r=0;
    let d="";

    n=prompt("Ingrese su nombre: ");
    m=prompt("Ingrese el nombre de la materia de la cual va a sacar su nota final: ");
    n1=parseInt(prompt("Nota 1:"));
    n2=parseInt(prompt("Nota 2:"));
    n3=parseInt(prompt("Nota 3:"));
    n4=parseInt(prompt("Nota 4:"));
    n5=parseInt(prompt("Nota 5:"));
    n6=parseInt(prompt("Nota 6:"));
    n7=parseInt(prompt("Nota 7:"));
    
    r=(n1+n2+n3+n4+n5+n6+n7)/7;

    if (r>=6) {
        d="aprobado";
    }
    else {
        d="reprobado";
    }

    alert(n+", usted ha "+d+" la materia de "+m+".\nCon una nota final de: "+r.toFixed(1)+" sobre 10.");

}

// se requiere un sistema o algoritmoque al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale, euros y soles.
function conversion() {
    alert("Algoritmo para convertir de dolares a:\n- COP:Pesos Colombianos\n- EUR:Euros\n- PEN:Soles Peruanos")
    let d=0;
    let p=4118.5;
    let s=3.72;
    let e=0.92;

    d=parseInt(prompt("Ingrese el valor en dolares a convertir:"))

    alert(d+"dolares equivalen a:\n- "+(d*p)+" Pesos Colombianos.\n- "+(d*e)+" Euros.\n- "+(d*s)+" Soles Peruanos.");

}

// Un inividuo desea invertir su capital en un banco y requiere de saber cuanto dinero ganará despues de n numero de años teniendo en cuenta que el banco paga un interés del 1,5% mensual.
function cdt() {
    alert("Algoritmo para calcular cuanto dinero se ganará respecto a la inversión en un banco.");
    let v=0;
    let a=0;
    v=parseInt(prompt("Ingrese la cantidad de dinero que le gustaria invertir:"));
    a=parseInt(prompt("Ingrese la cantidad de años de la inversion"))
    vm=((v*0.015)*30)/30;
    va=vm*12;

    alert("Usted recibiria un total de: "+va*a);

}
// html, etiquetas, atributos, estuctura base, reglas css, selctor, propiedad, valor de propiedad

function circulo(){
    // capturamos en una constante el elemento html que deseamos manipular
    const figura = document.getElementById("figura");
    // a este elemento le agregamos la clase circulo
    figura.classList.toggle("circulo");

}

function horizontal(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("horz");
}

function vertical(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("vrt");

}

function gif(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("gif");
}

function moveTop(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");

}
function moveRight(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("right");

}

function moveLeft(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("left");

}

function moveBottom(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("bottom");
}

function degradado(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("degr");

}

function rombo(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("rombo");
}

function triangulo(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("triangulo");

}

function panelLateral(){
    const panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");
}

function panelSuperior(){
    const panel = document.getElementById("panel-top");
    panel.classList.toggle("active");
}



