type Mods = Record<string, boolean | string>

export function classNames(cls: string, mod?: Mods, additionals?: string[]): string {

   return [
      cls,
      mod && Object.entries(mod)
         .filter(([_, value]) => Boolean(value))
         .map(([cls, _]) => cls),
      additionals && additionals.filter(Boolean).join(' '),
   ].filter((el) => el ? el.length : '').join(' ')
}
