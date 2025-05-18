function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*://*.youtube.com/shorts/*")) {
        return "PROXY 0.0.0.0:0";
    }
    return "DIRECT";
