class Cafetera2 {

    constructor(agua, leche, capsulasCafe, tazas, dinero) {
        this.agua = 0;
        this.leche = 0;
        this.capsulasCafe = 0;
        this.tazas = 0;
        this.dinero = 0;
        this.ejecutando = true;
        
        this.agua = agua;
        this.leche = leche;
        this.capsulasCafe = capsulasCafe;
        this.tazas = tazas;
        this.dinero = dinero;

        this.bebidas = [
            //[bebida,        agua, leche,  cafe,   tazas,  dinero]
            ["Cafe expresso", 1,    0,      1,      1,      5],
            ["Cafe largo"   , 2,    0,      2,      1,      10],
            ["Capuccino"    , 1,    1,      1,      1,      15]
        ];
        document.getElementById("labelExpresso").innerText = this.bebidas[0];
        document.getElementById("labelLargo").innerText = this.bebidas[1];
        document.getElementById("labelCapuccino").innerText = this.bebidas[2];
    }


    inicializarInsumos() {
        this.agua = document.getElementById("agua").value;
        this.leche = document.getElementById("leche").value;
        this.capsulasCafe = document.getElementById("cafe").value;
        this.tazas = document.getElementById("tazas").value;
        this.dinero = document.getElementById("dinero").value;

        this.despliegoInventario();
        cafeteraEjemplo.muestroEstado("Pronta para usar\nPresione un boton")    }

    despliegoInventario() {
        document.getElementById("inventario").innerText = 
        `Agua: ${this.agua}
        Leche: ${this.leche}
        Cafe: ${this.capsulasCafe} 
        Tazas: ${this.tazas}
        Dinero: ${this.dinero}`;
    }

    comproBebida(nro) {

        this.muestroEstado("Preparando Bebida.....");
        let aguaRequerida = this.bebidas[nro][1];
        let lecheRequerida = this.bebidas[nro][2];
        let cafeRequerido = this.bebidas[nro][3];
        let tazasRequeridas = this.bebidas[nro][4];
        let dineroRequerido = this.bebidas[nro][5];
        if (this.agua >= aguaRequerida &&
            this.leche >= lecheRequerida &&
            this.capsulasCafe >= cafeRequerido &&
            this.tazas >= tazasRequeridas &&
            this.dinero >= dineroRequerido) {
                this.agua -= this.bebidas[nro][1];
                this.leche -= this.bebidas[nro][2];
                this.capsulasCafe -= this.bebidas[nro][3];
                this.tazas -= this.bebidas[nro][4];
                this.dinero -= this.bebidas[nro][5];
                this.muestroEstado(document.getElementById("estado").innerText +  
                "\n" + "Bebida PRONTA!");
        } else {
                this.muestroEstado(document.getElementById("estado").innerText +  
                "\n" + "Faltan elementos para preparar lo solicitado!");
        }
		// se introduce un error como ejercicio
		if (this.dinero==5) { this.dinero = 0; };
		// fin del error..
		
        this.despliegoInventario();
    }



    inventarioAdd(agua, leche, capsulas, tazas, dinero) {
        this.agua += agua;
        this.leche += leche;
        this.capsulasCafe += capsulas;
        this.tazas += tazas;
        this.dinero += dinero;
        this.despliegoInventario();
    }

    muestroEstado(texto) {
        document.getElementById("estado").innerText = texto;
    }


}

// inicio.........
cafeteraEjemplo = new Cafetera2(0, 0, 0, 0, 0);
cafeteraEjemplo.despliegoInventario();
cafeteraEjemplo.muestroEstado("Pronta para usar\nPresione un boton")