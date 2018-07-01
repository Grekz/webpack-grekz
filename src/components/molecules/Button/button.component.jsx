// @flow
import * as React from 'react'
import type { ButtonType } from '../../../custom-types'
import styled from 'react-emotion'

const DefaultButton = styled('button')`
  box-sizing: border-box;
  font-size: 18px;
  min-height: 40px;
  min-width: 130px;
  padding: 8px 30px;
  border-radius: 50px;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.42857143;
  user-select: none;
  will-change: transform;
  &:hover,
  &:focus {
    box-shadow: none;
    text-decoration: none;
  }
`
const PrimaryButton = styled(DefaultButton)`
  color: #fff;
  background-color: #fb4c4c;
  border-color: #fb4c4c;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #e23232;
    border-color: #e23232;
    outline: 0 !important;
  }
  &:active {
    color: #fff;
    background-color: #e23232;
    border-color: #e23232;
    transform: scale(0.97);
    transition-duration: 300ms;
  }
`
const SecondayButton = styled(DefaultButton)``
const Button = ({ as = 'button', ...props }: ButtonType) => {
  let Element = props.secondary ? SecondayButton : PrimaryButton
  Element = as == 'button' ? Element : Element.withComponent('a')
  return <Element {...props} />
}
export default Button
