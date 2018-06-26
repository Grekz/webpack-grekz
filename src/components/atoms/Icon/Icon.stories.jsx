import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Icon from './Icon'

storiesOf('Icon', module).add('empty', () => <Icon alt="test" />)
