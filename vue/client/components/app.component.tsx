import * as Vue from 'vue';
import { StatelessComponent } from './stateless.component'
import { StatefullComponent } from './statefull.component'

export let App = Vue.component('app',{

  functional: true,
  
  render: function (h) {

    return h('div',
      [ 
        h('h1','Stateless component'),
        <stateless-component opacity="0.5"></stateless-component>,
        h('h1','Statefull component with hover and click events'),
        h('statefull-component',
        {
           props: {
             opacity: 1
           }
        }
        ,null)
      ]
    )
  }
});