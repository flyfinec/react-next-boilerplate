/**
*
* common util
*
*/

function openRaisedWindow(strUrl = '', strWindowName = '', strWindowFeatures = '') {
  if (!strUrl) return;

  const defaultWindowFeatures = `
    alwaysRaised=yes,
    width=${window.innerWidth * 0.6},
    height=${window.innerHeight * 0.6},
  `;

  window.open(strUrl, strWindowName || '_blank', strWindowFeatures || defaultWindowFeatures);
}

export {
  openRaisedWindow,
};
