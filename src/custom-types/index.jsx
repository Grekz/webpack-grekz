// @flow
import type { Node } from 'react'

export type ButtonType = {
  as?: string, // TODO change to only the elements that we will want. i.e. anchor/button
  secondary?: mixed,
  children?: Node
}

export type TextType = {
  As: string,
  children?: Node
}
