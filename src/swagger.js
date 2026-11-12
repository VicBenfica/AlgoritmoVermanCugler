export const openapiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'API Algoritmo Vernam Cugler',
    version: '1.0.0',
    description: 'API para cifrar e decifrar textos com a cifra de Vernam (XOR).',
  },
  servers: [
    {
      url: '/',
      description: 'Servidor local',
    },
  ],
  tags: [
    { name: 'Cifra de Vernam', description: 'Operações de cifragem e decifragem' },
  ],
  paths: {
    '/cifrar': {
      post: {
        tags: ['Cifra de Vernam'],
        summary: 'Cifra um texto',
        description:
          'Cifra um texto claro usando a cifra de Vernam. O texto e a chave devem ter o mesmo tamanho e conter apenas caracteres ASCII (código <= 127).',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['textoClaro', 'chave'],
                properties: {
                  textoClaro: {
                    type: 'string',
                    example: 'Ola',
                    description: 'Texto que será cifrado (ASCII).',
                  },
                  chave: {
                    type: 'string',
                    example: 'abc',
                    description: 'Chave de mesmo tamanho do texto (ASCII).',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Texto cifrado em binário.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    textoCifrado: {
                      type: 'object',
                      properties: {
                        textoCifrado: {
                          type: 'string',
                          example: '001011100000111000000010',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/decifrar': {
      post: {
        tags: ['Cifra de Vernam'],
        summary: 'Decifra um texto',
        description:
          'Decifra um texto cifrado em binário usando a cifra de Vernam. O texto cifrado deve ter o tamanho da chave multiplicado por 8.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['textoCifrado', 'chave'],
                properties: {
                  textoCifrado: {
                    type: 'string',
                    example: '001011100000111000000010',
                    description: 'Texto cifrado em binário (0 e 1).',
                  },
                  chave: {
                    type: 'string',
                    example: 'abc',
                    description: 'Chave usada na cifragem (ASCII).',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Texto decifrado.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    textoDecifrado: {
                      type: 'object',
                      properties: {
                        textoClaro: {
                          type: 'string',
                          example: 'Ola',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const swaggerPage = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>API Algoritmo Vernam Cugler - Swagger</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
    <style>
      body { margin: 0; background: #fafafa; }
      .topbar { display: none; }
    </style>
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
    <script>
      window.ui = SwaggerUIBundle({
        url: '/api-docs/openapi.json',
        dom_id: '#swagger-ui',
        presets: [SwaggerUIBundle.presets.apis],
        layout: 'BaseLayout',
        deepLinking: true,
      });
    </script>
  </body>
</html>
`;
