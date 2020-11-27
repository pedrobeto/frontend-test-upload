import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {
  CustomInput,
  Container
} from './styles';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#b53737',
    color: '#f3f3f3',
    boxShadow: theme.shadows[1],
    fontSize: 16,
    fontFamily: "'Work Sans', sans-serif"
  },
  arrow: {
    color: '#b53737',
  }
}))(Tooltip);

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
        <LightTooltip arrow PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: '0px, -10px',
            },
          },
        }}
        title={error || ''}>
        <CustomInput 
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        </LightTooltip>
        
      
   
    </Container>
  );
}