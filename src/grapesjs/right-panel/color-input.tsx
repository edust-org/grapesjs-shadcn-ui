import React, { useState, useEffect } from 'react';

const ColorInput = ({ placeholder, value, onChange, valueWithDef, onColorChange }) => {
  const [color, setColor] = useState(valueWithDef || '#ffffff');

  // Update local color state when valueWithDef changes
  useEffect(() => {
    setColor(valueWithDef);
  }, [valueWithDef]);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className='w-full'>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ flex: 1 }}
        className='w-full'
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '8px',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '30px',
            height: '30px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: color,
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <input
            type="color"
            value={valueWithDef}
            onChange={handleColorChange}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorInput;
