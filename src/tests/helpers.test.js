import { isMobile } from '../utilities';

// Chrome 70: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
test('Chrome desktop browser is not mobile', () => {
  expect(isMobile('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36')).toBe(false);
})

// Waterfox 56: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:56.0; Waterfox) Gecko/20100101 Firefox/56.2.5"
test('Waterfox desktop browser is not mobile', () => {
  expect(isMobile('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:56.0; Waterfox) Gecko/20100101 Firefox/56.2.5')).toBe(false);
})

// IE 11: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko"

test('IE desktop browser is not mobile', () => {
  expect(isMobile('Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko')).toBe(false);
})

