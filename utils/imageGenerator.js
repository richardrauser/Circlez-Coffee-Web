

export function generateMembershipSvg(fillColor) {
  return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#010101;}
	.st1{fill:#FFFFFF;}
	.st2{font-family:'Prompt-Regular';}
	.st3{font-size:71.783px;}
	.st4{fill:${fillColor};}
</style>
<g id="Layer_1_00000178887404026548985830000004341675162066693019_">
	<circle class="st0" cx="500" cy="500" r="500"/>
</g>
<g id="Layer_2_00000010999911920882436300000014601014388376057217_">
	<text transform="matrix(0.4941 -0.8694 0.8694 0.4941 139.928 325.1094)" class="st1 st2 st3">C</text>
	<text transform="matrix(0.5651 -0.825 0.825 0.5651 165.1754 281.983)" class="st1 st2 st3">i</text>
	<text transform="matrix(0.6107 -0.7919 0.7919 0.6107 174.7786 267.6485)" class="st1 st2 st3">r</text>
	<text transform="matrix(0.6729 -0.7397 0.7397 0.6729 191.2666 245.8849)" class="st1 st2 st3">c</text>
	<text transform="matrix(0.7212 -0.6928 0.6928 0.7212 217.4005 217.6754)" class="st1 st2 st3">l</text>
	<text transform="matrix(0.7696 -0.6385 0.6385 0.7696 228.3569 206.4284)" class="st1 st2 st3">e</text>
	<text transform="matrix(0.8275 -0.5615 0.5615 0.8275 261.2119 179.344)" class="st1 st2 st3">z</text>
	<text transform="matrix(0.9107 -0.4131 0.4131 0.9107 311.9449 146.6516)" class="st1 st2 st3">C</text>
	<text transform="matrix(0.9517 -0.307 0.307 0.9517 355.5179 126.8441)" class="st1 st2 st3">o</text>
	<text transform="matrix(0.9734 -0.229 0.229 0.9734 395.8104 114.1225)" class="st1 st2 st3">f</text>
	<text transform="matrix(0.985 -0.1728 0.1728 0.985 418.0583 108.8432)" class="st1 st2 st3">f</text>
	<text transform="matrix(0.996 -8.958963e-02 8.958964e-02 0.996 441.9865 104.1976)" class="st1 st2 st3">e</text>
	<text transform="matrix(0.9999 1.623085e-02 -1.623085e-02 0.9999 484.1581 100.3151)" class="st1 st2 st3">e</text>
	<text transform="matrix(0.9792 0.2028 -0.2028 0.9792 552.1821 102.8753)" class="st1 st2 st3">M</text>
	<text transform="matrix(0.9458 0.3247 -0.3247 0.9458 609.1212 115.0852)" class="st1 st2 st3">e</text>
	<text transform="matrix(0.896 0.444 -0.444 0.896 649.2117 128.1244)" class="st1 st2 st3">m</text>
	<text transform="matrix(0.829 0.5592 -0.5592 0.829 703.3887 155.4138)" class="st1 st2 st3">b</text>
	<text transform="matrix(0.7624 0.6471 -0.6471 0.7624 741.6426 181.2661)" class="st1 st2 st3">e</text>
	<text transform="matrix(0.7031 0.711 -0.711 0.7031 773.9294 208.9941)" class="st1 st2 st3">r</text>
	<text transform="matrix(0.6483 0.7614 -0.7614 0.6483 792.8552 227.8772)" class="st1 st2 st3">s</text>
	<text transform="matrix(0.5734 0.8193 -0.8193 0.5734 815.0606 253.6057)" class="st1 st2 st3">h</text>
	<text transform="matrix(0.5111 0.8595 -0.8595 0.5111 838.9121 288.4182)" class="st1 st2 st3">i</text>
	<text transform="matrix(0.4413 0.8973 -0.8973 0.4413 848.16 302.7424)" class="st1 st2 st3">p</text>
	<circle class="st4" cx="500" cy="500" r="378.5"/>
	<g id="layer1">
		<path id="path3050" class="st0" d="M770.1,417.8c0,0-11.9-34.9-54.4-52.7c-42.5-17.8-181.1-32.3-256.7-19.6
			c-75.7,12.8-185.3,40-215.9,82.5s-49.3,57.8-24.6,138.6s178.5,106.3,178.5,106.3s138.6,17,244-39.1s125-94.4,125-94.4
			s26.4-28,27.2-65.5c0.8-37.4-23-47.6-23-47.6s-26.4-22.1-59.5-12.8c-33.2,9.4-33.2,10.2-48.5,12.8s-33.2-3.4-51,0
			c-17.8,3.4-100.3,40-177.7,50.1c-77.3,10.2-110.5,4.2-131.8,10.2c-21.2,6-32.3,18.7-40.8,10.2c-8.5-8.5,13.6-32.3,41.7-36.6
			c28-4.3,31.5,1.7,68.9,0.8c37.4-0.8,130.9-50.1,240.6-60.3C721.6,390.6,770,417.8,770.1,417.8L770.1,417.8L770.1,417.8z"/>
	</g>
</g>
</svg>
`;
}

/**
* converts an svg string to base64 png using the domUrl
* @param {string} svgText the svgtext
* @param {number} [margin=0] the width of the border - the image size will be height+margin by width+margin
* @param {string} [fill] optionally backgrund canvas fill
* @return {Promise} a promise to the bas64 png image
*/
export function convertSvgToPng(svgText, margin, fill) {
  // convert an svg text to png using the browser
  return new Promise(function(resolve, reject) {
    try {
      // can use the domUrl function from the browser
      var domUrl = window.URL || window.webkitURL || window;
      if (!domUrl) {
        throw new Error("(browser doesnt support this)")
      }

      // figure out the height and width from svg text
      var height = 1000;
      var width = 1000;
      margin = 0;

      // create a canvas element to pass through
      var canvas = document.createElement("canvas");
      canvas.width = height + margin * 2;
      canvas.height = width + margin * 2;
      var ctx = canvas.getContext("2d");

      // make a blob from the svg
      var svg = new Blob([svgText], {
        type: "image/svg+xml;charset=utf-8"
      });

      // create a dom object for that image
      var url = domUrl.createObjectURL(svg);

      // create a new image to hold it the converted type
      var img = new Image();

      // when the image is loaded we can get it as base64 url
      img.onload = function() {
        // draw it to the canvas
        ctx.drawImage(this, margin, margin);

        // if it needs some styling, we need a new canvas
        if (fill) {
          var styled = document.createElement("canvas");
          styled.width = canvas.width;
          styled.height = canvas.height;
          var styledCtx = styled.getContext("2d");
          styledCtx.save();
          styledCtx.fillStyle = fill;
          styledCtx.fillRect(0, 0, canvas.width, canvas.height);
          styledCtx.strokeRect(0, 0, canvas.width, canvas.height);
          styledCtx.restore();
          styledCtx.drawImage(canvas, 0, 0);
          canvas = styled;
        }
        // we don't need the original any more
        domUrl.revokeObjectURL(url);
        // now we can resolve the promise, passing the base64 url
        resolve(canvas.toDataURL());
      };

      // load the image
      img.src = url;

    } catch (err) {
      // reject('failed to convert svg to png ' + err);
      console.log("ERROR! " + err.message);
    }
  });
}
