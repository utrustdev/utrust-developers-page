const options = {
  disableSearch: true,
  hideDownloadButton: true,
  theme: { colors: { primary: { main: "#5b47ff" } } }
};

const removePoweredByReDoc = () => {
  var aTags = document.getElementsByTagName("a");
  var searchText = "Documentation Powered by ReDoc";
  var found;
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      found = aTags[i];
      break;
    }
  }
  found.remove();
};

const callback = () => {
  removePoweredByReDoc();
};

Redoc.init(
  "openapi.yaml",
  options,
  document.getElementById("redoc-container"),
  callback
);
