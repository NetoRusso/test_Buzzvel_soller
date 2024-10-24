'use client';

import Style from './Button01.module.scss';

const Button01 = () => { 

  return (
    <button className={Style.button}>
      <p>Request a Quote</p>
      <div className={Style.button__icon} />
    </button>
  )
}

export default Button01;