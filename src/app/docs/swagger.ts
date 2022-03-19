import {config} from '@core/config'


export const swagger: Record<string, any> = {
  mode: 'dynamic',
  exposeRoute: true,
  routePrefix: '/api/docs/swagger',
  hideUntagged: true,
  openapi: {
    info: {
      title: config.pkgJson.name,
      version: config.pkgJson.version
    },
    components: {
      securitySchemes: {
        UserSession: {
          type: 'apiKey',
          name: 'sessionId',
          in: 'cookie'
        }
      }
    },
    tags: [],
    'x-tagGroups': [
      {
        name: 'Пользователь',
        tags: [
          'Пользователь',
          'Администратор'
        ]
      },
      {
        name: 'Продукт',
        tags: [
          'Продукт',
          'Управление продуктами',
          'Управление категориями',
          'Управление вариантами продуктов'
        ]
      },
      {
        name: 'Заказ',
        tags: [
          'Заказ'
        ]
      }
    ]
  }
}