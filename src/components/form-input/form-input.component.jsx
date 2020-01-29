import React from 'react';
import {GroupContainer,FromInputContainer,FromLabelContainer} from './form-input.styles';
// import './form-input.styles.scss';

const FromInput =({handleChange,label,...otherProps})=>(
    <GroupContainer>
        <FromInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
           (<FromLabelContainer className={`${otherProps.value.length ? 'shrink' : ''}`}>
            {label}
            </FromLabelContainer>)
            : null
        }
    </GroupContainer>
)

export default FromInput;