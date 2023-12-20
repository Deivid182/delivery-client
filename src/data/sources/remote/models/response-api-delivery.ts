import type { User } from '../../../../domain/entities/User'

export interface ResponseApiDelivery {
  success: boolean
  message: string
  data: User
}