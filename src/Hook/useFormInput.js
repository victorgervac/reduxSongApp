import { useState } from 'react'
// took out label, may manually add to separate components if need
export const useFormInput = (initialValue, name, uniqueId ) => {
  const [x, setX] = useState(initialValue)

  return {
    id: `${uniqueId}`,
    className: 'input-field-primary',
    required: 'required',
    placeholder: `Enter ${name}`,
    onChange: e => setX(e.target.value),
    value: x,
  }
}