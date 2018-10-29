export const required = (value) => {
  return (value && String(value).trim() !== "") ?
      undefined : "Required"
}

export const email = (value) => {
  return (value &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.trim())) ?
      undefined : "Invalid email"
}