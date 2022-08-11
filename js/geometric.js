
/* Funcion Anonima permite dar seguridad a nuestro codigo 
con ello no pordemos acceder externamente para soulucionarlos realizamos los siguiente:
1- identificamos a al Patron Modular permitiendo exportar
2-Al final del patron agrefamos un return para establecer que valor se mostrar
(()=>{
    Codigo protegido

});
*/
// Patron Modular permite qencapsular las funciones pra que no sean visble o accesibles por el usuario
// Funcion Flecha anonima el codigo va ser privada

   
const myModule = (()=>{
 

    // Vamos a selecionar los botones

        const   PerimetroCuadrado =document.querySelector("#PerimetroCuadrado"),
                AreaCuadrado =document.querySelector("#AreaCuadrado"),
                PerimetroTriangulo =document.querySelector("#PerimetroTriangulo"),
                AreaTriangulo =document.querySelector("#AreaTriangulo"),
                DiametroCirculo =document.querySelector("#DiametroCirculo"),
                PerimetroCirculo =document.querySelector("#PerimetroCirculo"),
                AreaCirculo =document.querySelector("#AreaCirculo");

        // Variable Global
        const valueResult = document.getElementById("result");


        // Creacion de Funciones
        // Area Y perimetro cuadrado
        //Creamos una funcion Flecha
        const perimSq = (side) => side*4;
        const areaSquare = (side) =>side*side
        //Area y  Perimetro de  Triangulo
        const perimTri = (lado1,lado2,lado3) => lado1+lado2+lado3;
        const areaTrim =(base,altura) => (base*altura)/2;



        // Funciones para selceccionar seccionnes de nuestro HTML
        // nombre de la seleciion(id).Atender evento( "Evente que ocurrio", ()=>{Funcion Anonima})
        PerimetroCuadrado.addEventListener('click',()=>{
             // Seleccionamos un elemneto  por su ID
            let inputSide = document.getElementById('inputSide');
            //Selccionamos el valor de la selceccion del la entrada y luego convertimos de string a numero
            let value = Number(inputSide.value);
            //Enviamos el valor extraido como parametro de la  funcion Flecha
            const result = `El perímetro de Cuadrado es: ${perimSq(value)} cm`;
            // Selccionamos doncde queremos que se envcie el resultado
            valueResult.innerText = result;

        });

        AreaCuadrado.addEventListener('click',()=>{
            // Seleccionamos un elemneto  por su ID
            let inputSide = document.getElementById('inputSide');
            //Selccionamos el valor de la selceccion del la entrada y luego convertimos de string a numero
            let value = Number(inputSide.value);
            //Enviamos el valor extraido como parametro de la  funcion Flecha
            const result = `El Area del Cuadrado es: ${ areaSquare(value)} cm`;
            // Selccionamos doncde queremos que se envcie el resultado
            valueResult.innerText = result;
        });

    AreaTriangulo.addEventListener('click',()=>{
            let inputbase = document.getElementById('inputBase');
            let base1 =  Number(inputbase.value);
            let inputaltura =document.getElementById('inputAltura');
            let altura1 =  Number(inputaltura.value);
            const result = `El Area del Triangulo es : ${areaTrim(base1,altura1)} cm `;
            valueResult.innerText =result;
        });
        



    PerimetroTriangulo.addEventListener('click',()=>{
        let  inputlado1 =document.getElementById("triangulolado1");
        let  lado1 = Number(inputlado1.value);
        let  inputlado2 = document.getElementById("triangulolado2");
        let  lado2 = Number(inputlado2.value);
        let  inputlado3 = document.getElementById("triangulolado3");
        let  lado3 = Number(inputlado3.value);
        const result = `Èl valor del perimetro es : ${perimTri(lado1,lado2,lado3)} cm`;
        valueResult.innerText =result;
    });

    const diameCircle = (radio)=>radio*2;
    const perimCicle = (radio) => diameCircle(radio) * Math.PI;
    const areaCircle = (radio) => (radio * radio) * Math.PI;

    DiametroCirculo.addEventListener('click',() =>{
        let  select_radio = document.getElementById("inputRadio");
        let  radio = Number(select_radio.value);
        const result =`El valor del Diametro es : ${diameCircle(radio)}`;
        valueResult.innerText = result;
    });
    PerimetroCirculo.addEventListener('click',() => {
        let  select_radio = document.getElementById("inputRadio");
        let  radio = Number(select_radio.value);
        const result =`El valor del Perimetro del Circulo es : ${perimCicle(radio)}`;
        valueResult.innerText = result;
    });

    AreaCirculo.addEventListener('click',()=>{
        let  select_radio = document.getElementById("inputRadio");
        let  radio = Number(select_radio.value);
        const result =`El valor del Area del Circulo es : ${areaCircle(radio)}`;
        valueResult.innerText = result;
    });
    // Atraves de objetos enviamos los valores que
    
})();
