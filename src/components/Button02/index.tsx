'use client';

import Style from './Button02.module.scss';

const Button02 = () => { 

  return (
    <button className={Style.button}>
      <p>Request a Quote</p>
      <div className={Style.button__icon} />
    </button>
  )
}

export default Button02;
