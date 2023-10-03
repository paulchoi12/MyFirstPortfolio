const app = require("../app")
const query = require("supertest")
const seed = require("../db/seeds/seed")
const db = require('../db/connection');
const data = require('../db/data/test-data/index')

beforeEach(()=>{
   return seed(data);
})
afterAll(()=>{
    db.end();
})

describe("app!!", ()=>{
    test('should return all the topics', ()=>{
        return query(app)
        .get('/api/topics')
        .expect(200)
        .then((response)=>{
            const {topic} = response.body
            return response.body
        })
    })
})