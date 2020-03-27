const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

// ADICONAR OUTROS TESTES

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterEach(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                "name": "Bairro da Juventude 2",
                "email": "bairro@bairro.com",
                "whatsapp": "4800000000",
                "city": "Criciuma",
                "uf": "SC"
            })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})
