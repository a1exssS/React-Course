type Mods = Record<string, boolean | string>

export function classNames(cls: string, mod?: Mods, additionals?: string[]): string {
   return [
      cls,
      additionals && [...additionals.filter(Boolean)],
      mod && [...Object.entries(mod).filter(([cls, value]) => Boolean(value)).map(([cls, value]) => cls)]
   ].join(' ')
}