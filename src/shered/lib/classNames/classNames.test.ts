import { classNames } from "./classNames"

describe('classNames', () => {
   test('only first param', () => {
      expect(classNames('className')).toBe('className')
   })
   test('with additional classes', () => {
      const expected = 'className className1 className2'
      expect(classNames('className', {}, ['className1', 'className2'])).toBe(expected)
   })
   test('with moduled classes', () => {
      const expected = 'className hovered className1 className2'
      expect(classNames(
         'className',
         { hovered: true, scrollable: false },
         ['className1', 'className2'])
      ).toBe(expected)
   })
   test('with moduled classes undefined', () => {
      const expected = 'className hovered className1 className2'
      expect(classNames(
         'className',
         { hovered: true, scrollable: undefined },
         ['className1', 'className2'])
      ).toBe(expected)
   })
})