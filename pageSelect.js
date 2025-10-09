export const pageSelect = (url,res) =>{
    if(url==='/'){
        res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Student Info</title>
      <link href="./index.css" rel="stylesheet"/>
  </head>
  <body>
      <main class="main">
        <h1>Homeeee<h1/>
      </main>
  </body>
  </html>
  `);
    }
}