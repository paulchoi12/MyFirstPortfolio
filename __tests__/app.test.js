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
            //   const {topic} = response.body
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
      //            TASK 6
      xtest('should return comments if there is any',()=>{
        return request(app)
        .get('/api/articles/1/comments')
        .expect(200)
        .then((response)=>{
          const {comments} = response.body
          const input = response.body.comments
          
          const output = [{
              body: "The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.",
              votes: 14,
              author: "butter_bridge",
              article_id: 1,
              created_at: 1604113380000,
            }, 
            {
              body: "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
              votes: 100,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1583025180000,
            },
            {
              body: " I carry a log — yes. Is it funny to you? It is not to me.",
              votes: -100,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1582459260000,
            },
            {
              body: "I hate streaming noses",
              votes: 0,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1604437200000,
            },
            {
              body: "I hate streaming eyes even more",
              votes: 0,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1586642520000,
            },
            {
              body: "Lobster pot",
              votes: 0,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1589577540000,
            },
            {
              body: "Delicious crackerbreads",
              votes: 0,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1586899140000,
            },
            {
              body: "Superficially charming",
              votes: 0,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1577848080000,
            },
            {
              body: "Massive intercranial brain haemorrhage",
              votes: 0,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1583133000000,
            },
            {
              body: "Fruit pastilles",
              votes: 0,
              author: "icellusedkars",
              article_id: 1,
              created_at: 1592220300000,
            },
            {
              body: "This morning, I showered for nine minutes.",
              votes: 16,
              author: "butter_bridge",
              article_id: 1,
              created_at: 1595294400000,
            },
          ]
          expect(input).toEqual(output)
        })
      })
      //does not console.log(err)
      xtest('should return err when input has no comments',()=>{
        return request(app)
        .get('/api/articles/4/comments')
        .expect(200)
        .then((response)=>{
          console.log(response.body)
        })
      })
      xtest('should return err when input is wrong',()=>{
        return request(app)
        .get('/api/articles/123989/comments')
        .expect(400)
        .then((response)=>{
          console.log(response.body)
        })
      })
      //TASK 7 
      xtest('should return new comment inside the comment table',()=>{
        return request(app)
        .post('/api/articles/2/comments')
        .expect(201)
        .then((response)=>{
          
        })
      })

})