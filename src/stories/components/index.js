import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ImageTile16x9, { imageTile16x9Description } from './ImageTile16x9'
import ImageTile4x3, { imageTile4x3Description } from './ImageTile4x3'
import ImageTile1000x609, { imageTile1000x6009Description } from './ImageTile1000x609'
import SelectableTile, { selectableTileDescription } from './SelectableTile'
import Buttons, { buttonsDescription } from './Buttons'

storiesOf('Tiles')
  .add('Image tile 16x9',
    withInfo(imageTile16x9Description)(ImageTile16x9))
  .add('Image tile 4x3',
    withInfo(imageTile4x3Description)(ImageTile4x3))
  .add('Image tile 1000x609',
    withInfo(imageTile4x3Description)(ImageTile1000x609))
  .add('Selectable tile',
    withInfo(selectableTileDescription)(SelectableTile)
  )
storiesOf('Buttons')
  .add('primary',
    withInfo(buttonsDescription)(Buttons))
