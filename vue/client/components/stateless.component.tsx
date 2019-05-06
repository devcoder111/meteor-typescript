import * as Vue from 'vue';

interface IProps {
  opacity: number;
}

export let StatelessComponent = Vue.component('stateless-component', {
  
  functional: true,

  render: (h, context) => {
    let props: IProps = Object.prototype.valueOf.call(context.data);
    
    return h('div',
      {
        domProps: {
          className: 'base-class',
          style: 'opacity:'+ props.opacity
        }
      },
      [
        h('h2', 'Properties'),
        h('p','Opacity: ' + props.opacity)
      ]
    )
  }
});