import { getQueryParams } from "./addQueryParams"

describe('shered/url/addQueryParams', () => {
   test('one parametr', () => {
      const params = getQueryParams({
         test: 'value'
      })
      expect(params).toBe('?test=value')
   })
   test('two paraments', () => {
      const params = getQueryParams({
         test: 'value',
         second: 'value'
      })
      expect(params).toBe('?test=value&second=value')
   })
   test('second parametr undefined', () => {
      const params = getQueryParams({
         test: 'value',
         second: undefined
      })
      expect(params).toBe('?test=value')
   })
})