import {IBaseService} from './IBaseService'
import {BaseService} from './BaseService'
import {IGenericService} from '@core/service/IGenericService'
import {GenericService} from './GenericService'
import type {EntityExistsError, EntityDoesNotExistError} from '@error'


type ServiceError = {
  EntityExistsError: typeof EntityExistsError,
  EntityDoesNotExistError: typeof EntityDoesNotExistError
}

export {
  BaseService,
  GenericService
}

export type {
  IBaseService,
  IGenericService,
  ServiceError
}