import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Img from '.'

storiesOf('Img', module).add('empty', () => <Img alt="test" />)
