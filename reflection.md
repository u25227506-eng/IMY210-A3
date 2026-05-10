    REFLECTION - IMY210 ASSIGNMENT 3
Matshidiso Dibakoane u25227506

    ACCESSING THE GITHUB REPOSITORY    
https://github.com/u25227506-eng/IMY210-A3

    COMMANDS TO RUN THE PROJECT

    Strapi(Backend)
cd my-blog-backend
docker build -t blog-backend
docker run -p 1337:1337 blog-backend

    Nuxt (Frontend)
cd my-blog-frontend
docker build -t blog-frontend
docker run -p 3000:3000 blog-frontend


    REFLECTION
Going into this assignment I had Node,js installed and not much else, so the setup process was a lot more involved than I expected. Getting Strapi running was the easiest part because the quickstart command handled most of it. The confusing part was navigating the Strapi admin panel for the first time. Finding the Content-Type Builder took longer than expected because the icons are not labelled and the layout is not obvious. 

Once I had the Post collection set up with the right fields and the Public role permission configured, the API worked immediately which was a relief. The bigger struggle was on the Nuxt side. Getting the CSS to load was genuinely frustrating because the ~/assets path kept on throwing module not found errors no matter what I tried. The fix ended up being using a relative path ./app/assets/css/main.cs in nuxt.config.ts, which was not documented anywhere obvious, even the console did not tell me what exactly was the problem,  which costed me a lot of time.

Docker was straightforward once I understood that the frontend and backend need separate Dockerfiles and run on different ports. The main thing to watch is that the Strapi URL used in development will not work inside a Docker container without adjusting environment variables. 

Overall this assignment taught me a lot about how Jamstack actually works in practice and how much small configuration decisions can slow you down when you are working with tools for the first time. 