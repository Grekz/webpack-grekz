// @flow
import * as React from 'react'

type Props = {
  As: string,
  children?: React.Node
}
const Text = ({ As = 'span', ...props }: Props) => <As>{props.children}</As>
export default Text
