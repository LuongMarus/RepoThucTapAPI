import { UAParser } from 'ua-parser-js';

export function extractInfoDevice(userAgent: string, ipAddress: string) {
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  return {
    deviceName: result.device?.model || 'Unknown',
    deviceType: result.device.type || 'desktop',
    os: `${result.os.name || 'Unknown'} ${result.os.version || ''}`.trim(),
    browser:
      `${result.browser.name || 'Unknown'} ${result.browser.version || ''}`.trim(),
    ipAddress,
  };
}
