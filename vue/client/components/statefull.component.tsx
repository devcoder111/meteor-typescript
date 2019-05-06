import * as Vue from 'vue';

export let StatefullComponent = Vue.component('statefull-component',{

  functional: false,
  
  props:['opacity'],

  data: () => {
    return {
      clicked: 0,
      hovered: false,
    }
  },
  
  render(h) {
    
    return h('div',
      {
        domProps: {
          className: 'base-class hoverable',
          style: 'opacity: ' + this.opacity
        },
        on: {
          click: () => {
            this.clicked++;
          },
          mouseenter: () => {
            this.hovered = true;
          },
          mouseleave: () => {
            this.hovered = false;
          }
        },
      },
      [
        h('h2', 'Properties'),
        h('p', 'Opacity: ' + this.opacity),
        h('h2', 'State'),
        h('p', 'Hovered: ' + this.hovered),
        h('p', 'Clicked: ' + this.clicked)
      ]
    )
  }
});