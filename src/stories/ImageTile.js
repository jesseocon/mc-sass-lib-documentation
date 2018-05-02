import React, { PureComponent } from 'react'

export default class ImageTile extends PureComponent {
  static defaultProps = {
    aspectRatio: '16x9'
  }

  ratioClasses = {
    '4x3': 'tile--4x3',
    '16x9': 'tile--16x9',
    '100x65': 'tile--100x65',
    '1000x609': 'tile--1000x609',
    '519x187': 'tile--519x187',
  }

  backgroundStyle = (imagePath) => {
    const backgroundImageStyle = `
      linear-gradient(to top, #000, rgba(0,0,0,.75) 20%, rgba(0,0,0, 0) 40%),
      url('${imagePath}')`
    return {
      backgroundImage: backgroundImageStyle,
    }
  }

  animationStyles = (style) => {
    switch (style) {
      case 'hover-zoom':
        return 'tile--hover-zoom'
      default:
        return 'tile--no-hover'
    }
  }

  render() {
    const {
      aspectRatio,
      imageUrl,
      className,
      children,
      animationStyle,
    } = this.props

    return (
      <div className={`tile ${this.ratioClasses[aspectRatio]} ${className} ${this.animationStyles(animationStyle)}`}>
        <div className='background' style={this.backgroundStyle(imageUrl)}></div>
        <div className='content'>{children}</div>
      </div>
    )
  }
}
