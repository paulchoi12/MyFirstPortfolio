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
    test('should return all the topics', ()=>{
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
    test('should return all the available endPoints', ()=>{
        
        return request(app)
        .get('/api')
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual(endPointsObj)
        })
    })
    //task 4
    test('should get articles by their id', ()=>{

        return request(app)
        .get('/api/articles/1')
        .expect(200)
        .then((response)=>{
            const {article} = response.body
            expect(article.article_id).toBe(1)
        })
      })
      //task5
      test('should return sorted Articles', ()=>{
        return request(app)
        .get('/api/articles')
        .expect(200)
        .then((response)=>{
          const {sortedArticles}= response.body
          const sortedArticlesKeys = Object.keys(sortedArticles[0])
          expect(sortedArticlesKeys).toEqual(expect.arrayContaining(['article_id', 'comment_count']))
        })
      })
      
      

})