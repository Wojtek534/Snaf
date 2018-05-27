import Vue from 'vue';

// Hide elements.
Vue.directive('hide', {
  bind(el, binding, vnode) {
    if (binding.value === true || binding.value === 'true') {
      el.style.display = 'none';
    }
  }
});
