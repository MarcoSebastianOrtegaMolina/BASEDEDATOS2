let datosGenerados = "";

const apellidosUno = [
    "Hernández", "García", "Martínez", "López", "González", "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez", "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo", "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos", "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva", "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza", "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo", "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza", "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara", "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila", "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];

const apellidosDos = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];

const nombresUno = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];

const nombresDos = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];

const obtenerAleatorio = (arreglo) => arreglo[Math.floor(Math.random() * arreglo.length)];

function iniciarCreacion() {
    const formato = document.getElementById("formatoSalida").value;

    if (formato === "sql" || formato === "postgres") {
        crearSQL();
    } else if (formato === "csv") {
        crearCSV();
    } else if (formato === "json") {
        crearJSON();
    }
}

function crearSQL() {
    let expedienteBase = 224200000; // Ajustado según tu foto
    let cantidad = parseInt(document.getElementById('numRegistros').value);
    let comandos = [];

    // Estructura y validaciones de la base de datos basada en tus requerimientos
    let esquemaSQL = `CREATE DATABASE IF NOT EXISTS sistema_escolar;
USE sistema_escolar;

CREATE TABLE IF NOT EXISTS \`alumnos\` (
  \`Expediente\` int NOT NULL,
  \`App1\` varchar(255) NOT NULL,
  \`App2\` varchar(255) DEFAULT NULL,
  \`Nombres\` varchar(255) NOT NULL,
  \`Correo\` varchar(255) NOT NULL,
  UNIQUE KEY \`Expediente\` (\`Expediente\`),
  UNIQUE KEY \`Correo\` (\`Correo\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO alumnos VALUES
`;

    for (let i = 0; i < cantidad; i++) {
        let ap1 = obtenerAleatorio(apellidosUno);
        let ap2 = obtenerAleatorio(apellidosDos);
        let nom1 = obtenerAleatorio(nombresUno);
        let nom2 = Math.random() < 0.5 ? "" : ` ${obtenerAleatorio(nombresDos)}`;
        let nombreCompleto = nom1 + nom2;
        
        let ap2Sql = ap2 === "NULL" ? "NULL" : `UPPER('${ap2}')`;
        let correo = `a${expedienteBase + i}@unison.mx`;
        
        comandos.push(`(${expedienteBase + i}, UPPER('${ap1}'), ${ap2Sql}, UPPER('${nombreCompleto}'), '${correo}')`);
    }
    
    // Unimos el esquema inicial con los comandos de inserción
    datosGenerados = esquemaSQL + comandos.join(",\n") + ";";
    document.getElementById("areaResultado").innerHTML = datosGenerados.replace(/\n/g, "<br>");
}

function crearCSV() {
    let expedienteBase = 224200000;
    let cantidad = parseInt(document.getElementById('numRegistros').value);
    datosGenerados = "Expediente,App1,App2,Nombres,Correo\n"; // Headers actualizados
    
    for (let i = 0; i < cantidad; i++) {
        let ap1 = obtenerAleatorio(apellidosUno).toUpperCase();
        let ap2 = obtenerAleatorio(apellidosDos).toUpperCase();
        let nom = (obtenerAleatorio(nombresUno) + (Math.random() < 0.5 ? ` ${obtenerAleatorio(nombresDos)}` : "")).toUpperCase();
        let correo = `a${expedienteBase + i}@unison.mx`;
        
        let ap2Csv = ap2 === "NULL" ? "" : ap2;
        
        datosGenerados += `${expedienteBase + i},${ap1},${ap2Csv},${nom},${correo}\n`;
    }
    
    document.getElementById("areaResultado").innerHTML = datosGenerados.replace(/\n/g, "<br>");
}

function crearJSON() {
    let expedienteBase = 224200000;
    let cantidad = parseInt(document.getElementById('numRegistros').value);
    let estudiantes = [];

    for (let i = 0; i < cantidad; i++) {
        let ap2 = obtenerAleatorio(apellidosDos);
        estudiantes.push({
            Expediente: expedienteBase + i,
            App1: obtenerAleatorio(apellidosUno).toUpperCase(),
            App2: ap2 === "NULL" ? null : ap2.toUpperCase(),
            Nombres: (obtenerAleatorio(nombresUno) + (Math.random() < 0.5 ? ` ${obtenerAleatorio(nombresDos)}` : "")).toUpperCase(),
            Correo: `a${expedienteBase + i}@unison.mx`
        });
    }
    
    datosGenerados = JSON.stringify(estudiantes, null, 4);
    document.getElementById("areaResultado").innerHTML = datosGenerados.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
}

function descargarArchivo() {
    if (!datosGenerados) {
        alert("Primero debes generar los datos.");
        return;
    }

    let formato = document.getElementById("formatoSalida").value;
    let extension = formato === "postgres" ? "sql" : formato;
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(datosGenerados));
    enlace.setAttribute("download", `estudiantes_generados.${extension}`);
    
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}