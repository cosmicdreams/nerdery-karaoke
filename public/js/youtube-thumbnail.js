/**
 * Copyright 2018 
 * @license Apache-2.0, see License.md for full text.
 */

export { YoutubeThumbnail };
/**
 * `youtube-thumbnail`
 * `Provides an easy way to get a thumbnail for a youtube image.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @demo demo/index.html
 */
class YoutubeThumbnail extends HTMLElement {
  
  // render function
  get html() {
    return `
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<a href="https://youtu.be/${this.video_id}" target="${this.target}">
  <img src="https://img.youtube.com/vi/${this.video_id}/hqdefault.jpg" title="Youtube thumbnail"/>
</a>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  /**
   * Id of youtube video.
   *
   * required.
   */
  "video_id": {
    "name": "video_id",
    "type": "String",
    "value": "",
    "reflectToAttribute": false,
    "observer": "_video_idChanged"
  },
  "target": {
    "name": "target",
    "type": "string",
    "value": "previewWindow"
  }
}
;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "youtube-thumbnail";
  }
  /**
   * life cycle
   */
  constructor(delayRender = false) {
    super();
    
    // set tag for later use
    this.tag = YoutubeThumbnail.tag;
    // map our imported properties json to real props on the element
    // @notice static getter of properties is built via tooling
    // to edit modify src/YoutubeThumbnail-properties.json
    let obj = YoutubeThumbnail.properties;
    for (let p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (this.hasAttribute(p)) {
          this[p] = this.getAttribute(p);
        }
        else {
          this.setAttribute(p, obj[p].value);
          this[p] = obj[p].value;
        }
      }
    }
    // optional queue for future use
    this._queue = [];
    this.template = document.createElement("template");

    this.attachShadow({ mode: "open" });

    if (!delayRender) {
      this.render();
    }
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleElement(this);
    }

    if (this._queue.length) {
      this._processQueue();
    }
    
  }

  _copyAttribute(name, to) {
    const recipients = this.shadowRoot.querySelectorAll(to);
    const value = this.getAttribute(name);
    const fname = value == null ? "removeAttribute" : "setAttribute";
    for (const node of recipients) {
      node[fname](name, value);
    }
  }

  _queueAction(action) {
    this._queue.push(action);
  }

  _processQueue() {
    this._queue.forEach(action => {
      this[`_${action.type}`](action.data);
    });

    this._queue = [];
  }

  _setProperty({ name, value }) {
    this[name] = value;
  }

  render() {
    this.shadowRoot.innerHTML = null;
    this.template.innerHTML = this.html;

    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(this.template, this.tag);
    }
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  //static get observedAttributes() {
  //  return [];
  //}
  // disconnectedCallback() {}
  // attributeChangedCallback(attr, oldValue, newValue) {}
    // Observer video_id for changes
              _video_idChanged (newValue, oldValue) {
                if (typeof newValue !== typeof undefined) {
                  console.log(newValue);
                }
              }

  // Observer index for changes
              _indexChanged (newValue, oldValue) {
                if (typeof newValue !== typeof undefined) {
                  console.log(newValue);
                }
              }


}
window.customElements.define(YoutubeThumbnail.tag, YoutubeThumbnail);
