// just pass through Franz
module.exports = Franz => class Notion extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');

    return parts.join('(KHTML, like Gecko) discord/0.0.248').replace('Electron', 'Notion').replace('Franz', 'Notion');
  }
};
