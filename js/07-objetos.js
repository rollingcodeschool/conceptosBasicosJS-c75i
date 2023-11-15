//notacion literal

const usuario = {
    //propiedades clave: valor
    nombre: 'Juan',
    edad: 18,
    mail: 'juan@mail.com',
    apellido: 'perez',
    password: '21234Efg$',
    nickname: 'el juancho',
    //metodos
    login: function (){
        console.log(this);
        document.write(`<p>El usuario "${this.nickname}" fue logueado</p>`);
    },
    logout: () =>{
        console.log(this)
        document.write(`<p>El usuario fue deslogueado</p>`);
    }
}

console.log(this);

console.log(usuario)
document.write(usuario)
document.write(`<h2>Usuario: ${usuario.nickname}</h2>`)
document.write(`<p>Nombre completo: ${usuario.apellido}, ${usuario.nombre}</p>`);
document.write(`<p>Edad: ${usuario['edad']}</p>`);
document.write(`<p>Edad: ${usuario['Edad']}</p>`);

//modificar una propiedad del objeto
usuario.edad = 25;

document.write(`<p>Edad: ${usuario['edad']}</p>`);

//agregando una propiedad nueva
usuario.fotoPerfil = 'http://127.0.0.1:5501/index.html';
console.log(usuario)

//borrar una propiedad de un objeto
delete usuario.apellido;
console.log(usuario);

//usar los metodos del objeto
usuario.login();
usuario.logout();