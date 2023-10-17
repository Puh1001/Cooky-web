function loadComponent(component) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET','../html/index.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseText = xhr.responseText;
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = responseText;
      var targetElement = tempDiv.querySelector(component);
      document.querySelector(component).innerHTML = targetElement.innerHTML;
      
      loadAndAddCSS('../css/style.css');
      loadAndAddJS('../js/index.js');
    }
  };
  xhr.send();
}

function loadAndAddCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}

function loadAndAddJS(url) {
  var script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}
