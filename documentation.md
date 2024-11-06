# remeber

# good to know

you comment out the deprecated info from the createBroswerClient in server.ts
/page = used when you are going to link to a page
export page = used when you just want to display a certain component to user

secret key =
anon key =

# now

create one file that its job is to make the request , no more every file making request to server

createCLient only uses supabase url and supabase anon key

so i created a new file in gist folder that distribute all the request ,
i figured they are two role : user and super user
superuser uses : createClient
user uses : supabaseClient

su : can create and view
u : can create delete and view , and it also depends on the func calling it

so su uses : supabaseurl and supabase sercret key

i just found out , it sin

# errors

1 ) No config path provided, using default 'drizzle.config.ts'
Reading config file '/home/w3b/Documents/schoolhub/drizzle.config.ts'
Using 'pg' driver for database querying
[⣷] applying migrations...Error: Client network socket disconnected before secure TLS connection was established
at /home/w3b/Documents/schoolhub/node_modules/pg-pool/index.js:45:11
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
at PgDialect.migrate (/home/w3b/Documents/schoolhub/node_modules/src/pg-core/dialect.ts:84:3)
at migrate (/home/w3b/Documents/schoolhub/node_modules/src/node-postgres/migrator.ts:10:2) {
code: 'ECONNRESET',
path: undefined,
host: undefined,
port: undefined,
localAddress: undefined
}

explanation :This can occur if there are network issues, incorrect database credentials, or a misconfigured TLS/SSL setup.

soln :
