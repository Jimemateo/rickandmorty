const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 93,
    name: 'Jime',
    species: 'Human',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg',
    gender: 'Female',
    status: 'Alive'

}

describe('test de RUTAS', () => {
    describe("GET /rickandmorty/character/:id", () =>{
        it("Responde con status: 200", async () =>{
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        })  
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image' ", async () =>{
            const response = await request.get('/rickandmorty/character/1');

            for(const prop in character){
                expect(response.body).toHaveProperty(prop)
            }
        })
        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/1542j');
            expect(response.statusCode).toBe(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto cuya propiedad access debe estar en true si la informacion del usuario es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=jimemateo@gmail.com&password=jime123');
            const access = {access: true};
            expect(response.body).toEqual(access);
        });
        it("Responde con un objeto cuya propiedad access debe estar en false si la informacion del usuario no es válida", async () =>{
            const response = await request.get('/rickandmorty/login?email=jimemateo111@gmail.com&password=jime000');
            const access = {access: false};
            expect(response.body).toEqual(access);
        })
    });

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character)
        });
        it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
            character.id = 2355;
            character.name = 'PT 13b';
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        });
    });

    describe("DELETE /rickandmorty/:id", () => {
        it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/2');
            expect(response.body.length).toBe(2);
        })

        it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/93');
            expect(response.body.length).toBe(1)
        });
    });


});