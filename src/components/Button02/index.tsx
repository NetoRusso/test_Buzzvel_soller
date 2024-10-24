'use client';

import Style from './Button02.module.scss';

const Button02 = () => { 

  return (
    <button className={Style.button} aria-label='Request a Quote'>
      <p>Request a Quote</p>
      <div className={Style.button__icon} />
    </button>
  )
}

export default Button02;
