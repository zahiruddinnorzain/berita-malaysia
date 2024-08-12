function xmlToJson(xml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "text/xml");
  
    // Function to recursively convert XML nodes to JSON
    function convertNode(node) {
      const obj = {};
      const text = node.textContent.trim();
  
      if (text) {
        obj.text = text;
      }
  
      for (const attribute of node.attributes) {
        obj[attribute.name] = attribute.value;
      }
  
      if (node.childNodes.length === 1 && node.firstChild.nodeType === 3) {
        // Text node
        return obj.text;
      }
  
      for (const child of node.childNodes) {
        if (child.nodeType === 1) { // Element node
          const name = child.tagName;
          if (obj[name]) {
            if (!Array.isArray(obj[name])) {
              obj[name] = [obj[name]];
            }
            obj[name].push(convertNode(child));
          } else {
            obj[name] = convertNode(child);
          }
        }
      }
  
      return obj;
    }
  
    const json = convertNode(doc.documentElement);
    return JSON.stringify(json, null, 2);
}

async function berita_malaysia(jenis){
    rssUrl = '';
    if(jenis == 'awani'){
        rssUrl = 'http://rss.astroawani.com/rss/latest/public';
    }

    // if(jenis == 'malaymail'){
    //     rssUrl = 'https://www.malaymail.com/feed/rss/malaysia';
    // }

    if(jenis == 'fmt'){
        rssUrl = 'https://www.freemalaysiatoday.com/feed/';
    }

    if(jenis == 'metro'){
        rssUrl = 'http://www.hmetro.com.my/utama.xml';
    }

    if(jenis == 'metro-bisnes'){
        rssUrl = 'http://www.hmetro.com.my/bisnes.xml';
    }

    if(jenis == 'utusan'){
        rssUrl = 'http://utusan.com.my/feed';
    }
    
    // const proxyUrl = 'https://direct-bo.000webhostapp.com/proxy.php?url=' + encodeURIComponent(rssUrl);
    const proxyUrl = 'https://proxybo.vercel.app/?url=' + encodeURIComponent(rssUrl);
    let result = await $.ajax({
        url: proxyUrl,
        method: 'GET',
        dataType: 'text',
        success: function(data) {
            return data
        },
        error: function() {
            console.error('Error fetching the RSS feed');
        }
    });
    result = JSON.parse(xmlToJson(result));
    result = JSON.stringify(result);
    result = JSON.parse(result);
    return result;
}