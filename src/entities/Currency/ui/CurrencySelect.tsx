import { Select, SelectOption } from 'shered/ui/Select/Select'
import { CurrencyList } from '../model/types/currency'
import { memo, useCallback } from 'react';

const options: SelectOption<CurrencyList, CurrencyList>[] = [
   { content: CurrencyList.RUB, value: CurrencyList.RUB },
   { content: CurrencyList.EUR, value: CurrencyList.EUR },
   { content: CurrencyList.USD, value: CurrencyList.USD },
]


interface CurrencySelectProps {
   value?: CurrencyList;
   onChange?: (value: CurrencyList) => void;
   readonly?: boolean;
   className?: string;
}

export const CurrencySelect = memo(({ onChange, value, readonly, className }: CurrencySelectProps) => {

   const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as CurrencyList)
   }, [onChange])

   return (
      <Select
         label='Валюта'
         value={value}
         onChange={onChangeHandler}
         options={options}
         readonly={readonly}
         className={className}
      />
   )
})
