import React from 'react'
import './customInput.styles.scss';

interface Props {
    label: string;
    value: string;
    type?: string;
    isDisabled: boolean;
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Props> = ({label,value,type="text",isDisabled,onChangeHandler}) => {
    return (
        <div className={['custom-input',(isDisabled?"disabled":"")].join(" ")}>
            <label className='custom-input__label'>{label}</label>
            <input 
                className='custom-input__input'
                type={type}
                value={value}
                disabled={isDisabled}
                onChange={(e)=>{onChangeHandler(e)}}/>
        </div>
    )
}

export default CustomInput;