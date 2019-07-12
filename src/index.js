import KisButton from './components/kis-button.vue'

const components = [
  KisButton
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
}

export default {
  install,
  ...components
};
