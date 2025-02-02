import * as CSS from 'csstype'
import { Token } from '../'
import { Configs } from './'

export const transform: Configs = {
  clipPath: true,
  transform: true,
  transformOrigin: true,
}

export type TransformProps<Y = 'responsive', M = 'scheme'> = {
  clipPath?: Token<CSS.Property.ClipPath, unknown, Y, M>
  transform?: Token<CSS.Property.Transform, unknown, Y, M>
  transformOrigin?: Token<CSS.Property.TransformOrigin | number, 'sizes', Y, M>
}
