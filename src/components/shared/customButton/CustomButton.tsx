import React from 'react'
import './customButton.styles.scss';

interface Props {
  buttonText: string;
  isDisabled: boolean;
  onClickHandler: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
}

const CustomButton: React.FC<Props> = ({buttonText,isDisabled,onClickHandler}) => {
  return (
    <button className={['custom-button',(isDisabled?"disabled":"")].join(" ")}
    onClick={(e) => {
      onClickHandler(e);
    }} disabled={isDisabled}>{buttonText}</button>
  )
}

export default CustomButton;