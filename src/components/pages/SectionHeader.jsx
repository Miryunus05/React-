import React, { Component } from 'react'

export default class SectionHeader extends Component {
  render() {
    const {title, subTitle} = this.props;

    return (
      <div>
    <div>
      <div className='text-center my-4 w-2/3 mx-auto'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-gray-400 '>{subTitle}</p>
      </div>
    </div>
      </div>
    )
  }
}

