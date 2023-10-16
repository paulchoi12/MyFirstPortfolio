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
      //            TASK 6
        test('should return comments if there is any',()=>{
          return request(app)
          .get('/api/articles/1/comments')
          .expect(200)
          .then((response)=>{
            const comments = response.body.comments
            //dynamic expected needed (flexible test)
            //iterate through the input comments with article_id1
            for(let i =0; i< comments.length; i++){
              expect(comments[i]).toHaveProperty('article_id', 1)
            }
          })
        })
        //does not console.log(err)
        test('should return empty arr when input has no comments',()=>{
          return request(app)
          .get('/api/articles/4/comments')
          .expect(200)
          .then((response)=>{
            expect(response.body.comments).toEqual([])
          })
        })
        //check if the articles exist
        test('should return err when input is wrong',()=>{
          return request(app)
          .get('/api/articles/123989/comments')
          .expect(404)
          .then((response)=>{
            expect(response.body).toEqual({"message": "Article does not exist!"})
          })
        })
        test('should return 400 err when route is wrong',()=>{
          return request(app)
          .get('/api/articles/katherine/comments')
          .expect(400)
          .then((response)=>{
            expect(response.body).toEqual({"message": "invalid id!"})
          })
        })
        //task 7
        test.only('should be able to post comment on the selected article',()=>{
          const data = {
            username: "butter_bridge",
            body: "I approve this comment",
          }
          return request(app)
          .post('/api/articles/1/comments')
          .send(data)
          .expect(201)
          .then((comments)=>{
          expect(comments.body).toHaveProperty("author", "butter_bridge")
          expect(comments.body).toHaveProperty("body", "I approve this comment")
          expect(comments.body).toHaveProperty("votes", 0)

          })
        })
})