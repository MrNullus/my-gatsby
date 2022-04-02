export const templates = {
  default: {
    langs: [
      {
        code: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title></title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link href="css/style.css" rel="stylesheet">
                </head>
                <body>
                  <h1>Default</h1>
                </body>
            </html>
        `
      }
    ]
  },
    
  html5: {
    langs: [
      {
        code: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title></title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link href="css/style.css" rel="stylesheet">
                </head>
                <body>
                
                </body>
            </html>
        `,
      },

      {
        code: `
            /* styles for gatsby */
        `,
      },
    ],
  },

  header: {
    langs: [
      {
        code: `
            <header>
                <h1>Hellow World!</h1>
            </header>
        `,
      },

      {
        code: `
            /* styles for gatsby */
        `,
      },
    ],
  },

  social_menu_layers: {
    langs: [
      {
        code: `
            <div>
                <i>Face</i>
                <i>Face</i>
                <i>Face</i>
                <i>Face</i>
            </div>
        `,
      },

      {
        code: `
            /* styles for gatsby */
        `,
      },
    ],
  },

  loading_effect: {
    langs: [
      {
        code: `
            <div>
                <h4>Seila</h4>
            </div>
        `,
      },

      {
        code: `
            /* styles for gatsby */
        `,
      },
    ],
  },
}
