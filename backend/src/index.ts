import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()


app.post('api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  if (!body.name) {
    c.status(400)
    return c.text('Name is Missing')
  }
  if(!body.email ){
    c.status(400)
    return c.text("Email is missing")
  }
  if(!body.password ){
    c.status(400)
    return c.text("Password is missing")
  }
  try{
    const user = await prisma.user.create({
      data : {
        name : body.name,
        email : body.email,
        password : body.password,
      },
    })
    const token = await sign({id : user.id}, c.env.JWT_SECRET)
    c.status(200)
    return c.json({ 
      message : "Signup Succesfull",
      token : token
    })
  }catch(e){
    if (e.code === 'P2002' && e.meta && e.meta.target.includes('email')) {
      c.status(409) // Conflict
      return c.text('Email already exists. Please use a different email.')
    }
  }
  c.status(500)
  return c.text("Internal Server Error")
})


app.post('api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  if(!body || !body.email || !body.password){
    c.status(408)
    return c.json({message : "Incomplete Details"});
  }
  try{
    const user = await prisma.user.findUnique({
      where : {
        email : body.email
      },
    })
    if(!user){
      c.status(404)
      return c.json({message : "User Doesn't Exists"})
    }
    if(body.password != user.password){
      c.status(401)
      return c.json({message : "Invalid Password"})
    }
    c.status(200)
    return c.json({message : "Login Succesfull"})
  }catch(e){
    c.status(500)
    return c.json({message : "An error occurred"})
  }
})


app.post('api/v1/blog', (c) => {
  
  return c.text('Hello Hono!')
})


app.put('api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})


app.get('api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})


export default app
