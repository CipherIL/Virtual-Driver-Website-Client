import React from 'react'
import './customButton.styles.scss';

interface Props {
  buttonText: string;
  onClickHandler: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
}

const CustomButton: React.FC<Props> = ({buttonText,onClickHandler}) => {
  return (
    <button className='custom-button' onClick={(e) => {
      onClickHandler(e);
    }}>{buttonText}</button>
  )
}

export default CustomButton