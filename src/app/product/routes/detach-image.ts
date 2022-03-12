import * as schemas from '../schemas'
import {FastifyInstance} from 'fastify'
import {ProductService} from '@app/product/ProductService'
import {MessageResponse, NotFound} from '@common/schemas/response'
import {ProductDoesNotExist, ProductImageDoesNotExist} from '@app/product/product-error'


export interface DetachImageRequest {
  Params: {
    productId: string,
    imageName: string
  }
}


export async function detachImage(fastify: FastifyInstance, service: ProductService) {
  return fastify
    .route<DetachImageRequest>(
      {
        method: 'DELETE',
        url: '/admin/product/:productId/image/:imageName',
        schema: {
          summary: 'Добавить продукту картинки',
          tags: ['Управление продуктами'],
          params: {
            productId: schemas.properties._id,
            imageName: schemas.properties.images.items
          },
          response: {
            [200]: new MessageResponse('Картинка удалена'),
            [404]: new NotFound(ProductDoesNotExist.schema(), ProductImageDoesNotExist.schema())
          }
        },
        security: {
          auth: true,
          admin: true
        },
        handler: async function(request, reply) {
          await service.deleteImage(request.params.productId, request.params.imageName)

          reply
            .code(200)
            .type('application/json')
            .send({message: 'Картинка удалена'})
        }
      }
    )
}