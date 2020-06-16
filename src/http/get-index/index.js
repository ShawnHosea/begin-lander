// Add simple, fast, scalable persistence: https://docs.begin.com/en/data/begin-data/
// let data = require('@begin/data')

// Add secure sessions, middleware, and more: https://docs.begin.com/en/functions/http/
// let arc = require('@architect/functions')

// TODO: modify the body object!
let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>
    <div class="center-text">
      <h1>Modern apps. Built fast af.</h1>
      <h2> 
        Begin is a ridiculously quick platform for building modern web apps, sites, & APIs.
      </h2>
      <p>Get started for free, no credit card required.</p>
    </div>
    <hr>
    <div>
      <h2>Bringing the cloud to the frontend || Bringing the backend to the frontend.</h2>
      <p>Begin is a platform that empowers devs by giving them the infrastructure to build web applications just as powerful as any monolith of the past. It is often said that we now have more computing power in our pocket than the computer aboard Apollo 11 did. With Begin, you now how more development power in your environment than all monoliths of the past.</p>
      <p>With Begin, developers can now scale their ideas to the max in a safe and declarative development environment.</p>
      <p>What this does is create enough continuous escape velocity to make shipping new features, and bug fixes a fast and seamless process and gives all developers the tools to see their ideas to fruition.</p>
      <p></p>
    </div>
    <hr>
    <div>
      <h2>Weild the power of AWS</h2>
      <p>The modern developer has a host of new tools that significantly maximize the scope of what is possible in contemporary web development. Begin makes using AWS a possibility for anyone. This means we have provided a more accessible way within our platform to take advantage of several of these services and technologies offered by AWS.</p>
    </div>
    <hr>
    <div>
      <h2>Quality Assurance w/IaC & CI/CD</h2>
      <p>Begin starts with a declarative approach in the sense that you can provision several helpful features into your app by simply updating your .arc manifest file. This greatly enhances the speed of development when you know the expected outcome simply from updating your .arc file.</p>
      <p>Shipping velocity is one of the most important aspects of product creation and software development. You need a safe environement to quickly test code without disturbing the user experience and this is where CI/CD somes in. Being able to test your apps changes in Staging before Production is a must in modern software development. It is way too dangerous to go from local dev environment to production without a stage in between.</p>
    </div>
    <hr>

    <div style="
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    ">
      <div>
        <h2>HTTP Functions</h2>
        <p>HTTP functions are the building blocks of the modern web app. These HTTP functions receive and respond to regular HTTP (and HTTPS) requests. It is the foundation of any data exchange on the Web. You can pack just about whatever you want into an HTTP function.</p>
      </div>
     
      <div>
        <h2>Event Functions</h2>
        <p>If HTTP functions are the building blocks of your app then Event functions are the switches that allow them to talk to each other in a declarative manner giving your app automated extensibility.</p>
      </div>
     
      <div>
        <h2>Scheduled Functions</h2>
        <p>Begin makes using AWS a possiblity for anyone.</p>
      </div>
      
    </div>
  </body>
</html>
`

exports.handler = async function http(req) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}

// Example responses

/* Forward requester to a new path
exports.handler = async function http (req) {
  return {
    statusCode: 302,
    headers: {'location': '/about'}
  }
}
*/

/* Respond with successful resource creation, CORS enabled
let arc = require('@architect/functions')
exports.handler = arc.http.async (http)
async function http (req) {
  return {
    statusCode: 201,
    headers: {'content-type': 'application/json; charset=utf8'},
    body: JSON.stringify({ok: true}),
    cors: true,
  }
}
*/

/* Deliver client-side JS
exports.handler = async function http (req) {
  return {
    headers: {'content-type': 'text/javascript; charset=utf8'},
    body: 'console.log("Hello world!")',
  }
}
*/
