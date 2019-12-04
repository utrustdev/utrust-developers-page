// To change the theme, check this structure at ReDoc: https://github.com/Redocly/redoc/blob/master/src/theme.ts
const options = {
  disableSearch: true,
  hideDownloadButton: true,
  theme: {
    colors: {
      primary: {
        main: "#5b47ff"
      }
    },
    logo: {
      gutter: "0px"
    },
    typography: {
      fontWeightRegular: "400",
      fontWeightBold: "600",
      fontWeightLight: "300",
      fontFamily: "ibmplexsans, sans-serif",
      headings: {
        fontFamily: "fkgrotesk, sans-serif",
        fontWeight: "500"
      }
    },
    rightPanel: {
      backgroundColor: "#fff",
      width: "30%"
    }
  }
};

const removePoweredByReDoc = () => {
  const aTags = document.getElementsByTagName("a");
  const searchText = "Documentation Powered by ReDoc";
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
