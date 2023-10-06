const app = require("../app")
const request = require("supertest")
const seed = require("../db/seeds/seed")
const db = require('../db/connection');
const data = require('../db/data/test-data/index')
const endPointsObj = require('../endpoints.json')


beforeEach(()=>{
   return seed(data);
})
afterAll(()=>{
   return db.end();
})

describe("app!!", ()=>{
    xtest('should return all the topics', ()=>{
        return request(app)
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
              const input = response.body.topics
            expect(input).toEqual(output)

        })
    })
    xtest('should return all the available endPoints', ()=>{
        
        return request(app)
        .get('/api')
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual(endPointsObj)
        })
    })
    xtest('should get articles by their id', ()=>{

        return request(app)
        .get('/api/articles/1')
        .expect(200)
        .then((response)=>{
            const {article} = response.body
            const output = {
                title: "Living in the shadow of a great man",
                topic: "mitch",
                author: "butter_bridge",
                body: "I find this existence challenging",
                created_at: 1594329060000,
                votes: 100,
                article_img_url:
                  "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
              }
            expect(article).toEqual(output)
        })
      })
      //TASK 5 (STILL GOING ON)
      xtest('should return sorted Articles', ()=>{
        return request(app)
        .get('/api/articles')
        .expect(200)
        .then((response)=>{
          const output = []
          const {sortedArticles}= response.body
          
          
        })
      })
      
      

})