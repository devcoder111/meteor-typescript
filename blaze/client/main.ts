import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating'

import '../client/main.html';

//--------------------
// Stateless component
//--------------------

Template["StatelessComponent"].helpers({
  attributes(opacity: number) {
    return {
      class: 'base-class',
      style: '{'
        + 'opacity:' + opacity
      + '}'
    };
  }
});

//------------------------------------------------
// Statefull component with hover and click events
//------------------------------------------------

Template["StatefullComponent"].onCreated(function helloOnCreated() {
  this.hovered = new ReactiveVar(false);
  this.clicked = new ReactiveVar(0);
});

Template["StatefullComponent"].helpers({
  hovered() {
    return Template.instance()["hovered"].get().toString();
  },
  clicked() {
    return Template.instance()["clicked"].get();
  },
  attributes() {
    return {
      class: 'base-class hoverable'
    };
  }
});

Template["StatefullComponent"].events({
  'mouseenter div' (event, instance) {
    instance.hovered.set(true);
  },
  'mouseleave div' (event, instance) { 
    instance.hovered.set(false);
   },
  'click div' (event, instance) { 
    instance.clicked.set(instance.clicked.get() + 1);
   }
});
