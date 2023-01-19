import React from 'react'

export default function About(props) {
  return (
    <div>
      <div className="jumbotron" style={props.style}>
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
</div>
  <button className='btn btn-primary my-2' onClick={props.toggle}>{props.style.text}</button>
    </div>
  )
}
