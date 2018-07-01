import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Button from '.'

storiesOf('Button', module)
  .add('Default', () => <Button alt="test">Tests</Button>)
  .add('As Anchor', () => <Button link>As Link</Button>)
