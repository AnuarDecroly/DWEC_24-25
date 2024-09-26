const listadoUsuarios = [
    {
        nombre: "Gabriel Pacheco",
        edad: 34,
        signoZodiaco: "Virgo"
    },
    {
        nombre: "Lola Rocha Tercero",
        edad: 30,
        signoZodiaco: "Capricornio"
    },
    {
        nombre: "Anuar Khan",
        edad: 41,
        signoZodiaco: "Tauro"
    },
    {
        nombre: "Farah Khan",
        edad: 3,
        signoZodiaco: "Acuario"
    },
    ];

    let acumulador = 0
    const familia = listadoUsuarios.filter((user) => user.nombre.includes("Khan"))
    const antiguedad = listadoUsuarios.reduce((acumulador, user,) => acumulador + user.edad)

    console.log(familia)
    console.log(antiguedad)