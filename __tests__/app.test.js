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
            const output = [{
                description: 'The man, the Mitch, the legend',
                slug: 'mitch'
              },
              {
                description: 'Not dogs',
                slug: 'cats'
              },
              {
                description: 'what books are made of',
                slug: 'paper'
              }]
            
              
              const {topic} = response.body
              const input = response.body.topics
            expect(input).toEqual(output)

        })
    })
})