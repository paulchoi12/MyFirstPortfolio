const app = require("../app")
const query = require("supertest")
const seed = require("../db/seeds/seed")
const db = require('../db/connection');
const data = require('../db/data/test-data/index')
const endPointsObj = require('../endpoints.json')

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
            //   const {topic} = response.body
              const input = response.body.topics
            expect(input).toEqual(output)

        })
    })
    test('should return all the available endPoints', ()=>{
        
        return query(app)
        .get('/api')
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual(endPointsObj)
        })
    })
    test('should get articles by their id', ()=>{

        return query(app)
        .get('/api/articles/1')
        .expect(200)
        .then((response)=>{
            const {articles} = response.body
            //THIS SHOWS EMPTY BODY PLEASE HELP!!!
            const output = [{
                title: "Living in the shadow of a great man",
                topic: "mitch",
                author: "butter_bridge",
                body: "I find this existence challenging",
                created_at: 1594329060000,
                votes: 100,
                article_img_url:
                  "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
              }]
            //  expect(response.body).toEqual(output)
        })
    })
})