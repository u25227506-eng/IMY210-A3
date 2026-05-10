    REFLECTION - IMY210 ASSIGNMENT 3
Matshidiso Dibakoane – u25227506

    ACCESSING THE GITHUB REPOSITORY    
https://github.com/u25227506-eng/IMY210-A3

    COMMANDS TO RUN THE PROJECT

    Strapi(Backend)
cd my-blog-backend
docker build -t blog-backend .
docker run -p 1337:1337 blog-backend

    Nuxt (Frontend)
cd my-blog-frontend
docker build -t blog-frontend .
docker run -p 3000:3000 blog-frontend


    REFLECTION

Going into this assignment I had Node.js installed and not much else, so 
the setup process was a lot more involved than I expected. Getting Strapi 
running was the easy part the quickstart command handled most of it. 
The confusing part was navigating the Strapi admin panel for the first 
time. Finding the Content-Type Builder took longer than I wpuld like to admit 
because the icons are not labelled and the layout is not obvious.

Once I had the Post collection set up with the right fields and the Public 
role permissions configured, the API worked immediately which was a relief. 
The bigger struggle was on the Nuxt side. Getting the CSS to load was 
genuinely frustrating. Initiall I was using the ~/assets path which kept throwing module not found errors no matter what I tried. The fix ended up being using a relative path 
./app/assets/css/main.css in nuxt.config.ts, which wasn't documented anywhere obvious. 
That alone cost a lot of time.

Strapi's rich text field returns content as structured JSON blocks rather 
than HTML, which meant I couldn't just render it directly; I had to build 
a custom RichTextRenderer component to handle different block types like 
paragraphs, headings and lists.

Docker was straightforward once I understood that the frontend and backend 
need separate Dockerfiles and run on different ports. The main thing to 
watch is that the Strapi URL used in development won't work inside a Docker 
container without adjusting environment variables.

Overall this assignment taught me a lot about how Jamstack actually works 
in practice not just in theory and how much small configuration decisions can slow you down when you're working with tools for the first time.