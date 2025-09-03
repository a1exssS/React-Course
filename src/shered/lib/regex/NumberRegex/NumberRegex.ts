export const NumberRegex = (value: string | number) => {
   const isNumber = /^-?\d*$/

   if (isNumber.test(String(value))) {
      return value ? value : "0"
   }
   else {
      return ''
   }
}