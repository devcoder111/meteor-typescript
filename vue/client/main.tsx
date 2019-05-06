// Libs
import { Meteor } from 'meteor/meteor';
import * as Vue from 'vue';

import { App }  from './components/app.component';

new Vue({
  el: '#app',
  render(h) {
    return (
      <App></App>
    )
  }
});
