import React from 'react'
import './customInput.styles.scss';

interface Props {
    label: string;
    value: string;
    type?: string;
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Props> = ({label,value,type="text",onChangeHandler}) => {
    return (
        <div className='custom-input'>
            <label className='custom-input__label'>{label}</label>
            <input className='custom-input__input' type={type} value={value} onChange={(e)=>{onChangeHandler(e)}}/>
        </div>
    )
}

export default CustomInput;