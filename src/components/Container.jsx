import React from 'react'

export default function Container (props) {
  function isWrap () {
    if (props.wrap !== undefined) {
      return 'l-container'
    }
  }

  return (
    <section className={`l-section ${props.className}`}>
      <div className={isWrap()}>
        {props.children}
      </div>
    </section>
  )
}
