import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string,
      JWT_SECRET : string
    },
    Variables : {
      userId : string
    }
  }>()

blogRouter.use('/*', async(c, next)=> {
    const header = c.req.header("authorization") || " ";
    if(!header){
        c.status(403)
        return c.json({message : "Unauthorized access"})
    }
    const token = header.split(" ")[1];
    const response = await verify(token, c.env.JWT_SECRET)
    if(!response){
        c.status(403)
        return c.json({message : "Unauthorized access"})
    }
    //@ts-ignore
    c.set('userId',response.id)
    await next()
})
      



blogRouter.post('/post', async(c) => {
    console.log("Hi from inside")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    const body = await c.req.json();
    const authid = c.get("userId")
    const blog = await prisma.post.create({
        data :{
            title : body.title,
            content : body.content,
            authorId : authid,
            published : body.publish
        }
    })
      
    return c.json({
        id : blog.id
    })
  })
  
  
blogRouter.put('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    const body = await c.req.json();
    const id = c.req.param('id');
    console.log(id)
    console.log(c.get("userId"))
    const blog = await prisma.post.update({
        where : {
            id : id
        },
        data : {
            title : body.title,
            content : body.content,
            published : body.publish
        }
    }
    )
return c.json({
    message : "Succesfull",
    blog : blog
})
})


//Todo Add : Pagination

blogRouter.get('/bulk', async(c) => {
    console.log("Hello")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
    const blog = await prisma.post.findMany();

    return c.json({
        blog : blog
    })
})


blogRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    const id = c.req.param("id");

    try{
        const blog = await prisma.post.findFirst({
            where : {
                id : id
            }
        })

        return c.json({
            blog : blog
        })
    }catch(e){
        c.status(411)
        return c.json({
            message : "Failed to get the blog"
        })
    }

})