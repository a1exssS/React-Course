import React, { useCallback } from 'react'
import { CountryList, CountryOprionProps } from '../model/types/Country';
import { Select } from 'shered/ui/Select/Select';

const options: CountryOprionProps[] = [
   { content: CountryList.Belarus, value: CountryList.Belarus },
   { content: CountryList.Kazakhstan, value: CountryList.Kazakhstan },
   { content: CountryList.Russia, value: CountryList.Russia },
]


interface CountrySelectProps {
   value?: CountryList;
   onChange?: (value: CountryList) => void;
   readonly?: boolean;
   className?: string;
}

export const CountrySelect = ({ className, onChange, readonly, value }: CountrySelectProps) => {
   const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as CountryList)
   }, [onChange])

   return (
      <Select
         label='Страна'
         value={value}
         onChange={onChangeHandler}
         options={options}
         readonly={readonly}
         className={className}
      />
   )
}
