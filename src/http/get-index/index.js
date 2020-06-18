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
    <small>Hero</small>
    <div class="center-text">
      <h1>Launch serverless apps...fast af.</h1>
      <h2> 
        Begin is a product development tool for building serverless web sites & APIs.
      </h2>
      <p>Launch now, no credit card required!</p>
    </div>
    <div style="
    margin: auto;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    ">
    <button>Launch now!</button>
    <button>Learn more</button>
    </div>
    <hr>
    <p class="center-text">Used by:</p>
    <div style="
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    ">
      <div><img src="/_static/C1.png" height="30"/></div>
      <div><img src="/_static/C1.png" height="30"/></div>
      <div><img src="/_static/C1.png" height="30"/></div>
      <div><img src="/_static/C1.png" height="30"/></div>
      <div><img src="/_static/C1.png" height="30"/></div>
    </div>
    <hr>
    <div>
      <small>Div1</small>
      <h2 class="center-text">Weild the power of AWS</h2>
      <p>Begin makes using AWS a possibility for anyone. This means we have provided a more accessible way within our platform to take advantage of several of these services and technologies offered by AWS.</p>
      <p>Begin.com apps are built with cutting edge serverless primitives:</p>
      <ul>
        <li>Static asserts with S3</li>
        <li>HTTP and Web Sockets with API Gateway</li>
        <li>Compute with Lambda</li>
        <li>Async events with SNS</li>
        <li>Scheduled events with EventBridge</li>
        <li>Persistent storage with DynamoDB</li>
      </ul>
    </div>
    <hr>
    <small>Div2</small>
    <div style="
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    ">
      <div>
        <h2>Cloud functions</h2>
        <p>Cloud functions are the building blocks of the modern web app. With Begin, you have access to regular HTTP functions, event functions, and scheduled functions. Together in tandem, you have exstensible capabilities that power your app.</p>
        <a href="/">Learn more</a>
      </div>
     
      <div>
        <h2>Begin data</h2>
        <p>Every Begin app comes bundled with Begin Data, a durable, easy to use, fully managed, SSD-based key-value and document database that's free and in-network.</p>
        <a href="/">Learn more</a>
      </div>
     
      <div>
        <h2>Static assets</h2>
        <p>Begin has the ability to build (if necessary) and deploy static assets to blob storage (S3) deliver them via CDN out of the box.</p>
        <a href="/">Learn more</a>
      </div>

      <div>
        <h2>Powerful dev environment</h2>
        <p>You need a safe environement to quickly test code without disturbing the user experience and this is where CI/CD somes in. Being able to test your apps changes in Staging before Production is a must in modern software development. It is way too dangerous to go from local dev environment to production without a stage in between.</p>
        <a href="/">Learn more</a>
      </div>
    </div>
    <hr>
    <div>
      <small>Div3</small>
      <h2 class="center-text">Testimonial</h2>
      <div style="
      text-align: center;
      "><img src="/_static/testimonial0.png" height="400"/></div>
      <p></p>
    </div>
    <hr>
    <small>Div4</small>
    <div class="center-text">
      <h2 class="center-text">Works with all of your favorite frontend frameworks!</h2>
      <div style="
      text-align: center;
      "><img src="/_static/starters.png" height="400"/></div>
      <h3>Get started</h3>
      <button>GitHub</button>
    </div>
    <hr>
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
