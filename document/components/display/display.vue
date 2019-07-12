<template>
  <div class="page-display">
    <div class="display-wrapper">
      <section class="mofang-demo">
        <iframe :src="ifrSrc" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hash: '/',
        baseUrl: 'http://172.20.155.49:8080/example/#/'
      }
    },
    computed: {
      ifrSrc () {
        return `${this.baseUrl}${this.hash}`
      }
    },
    watch: {
      '$route': {
        // eslint-disable-next-line
        handler (to, from) {
          const index = to.path.indexOf('/#/')
          this.hash = to.path.substr(index + 2)
        },
        immediate: true
      }
    }
  }
</script>

<style>
  .page-display {
    position: relative;
  }
  .display-wrapper {
    position: relative;
    width: 330px;
    height: 645px;
    top: 50%;
    transform: translate(0, -50%);
    margin: 0 56px 0 26px;
    background: url("./iphoneXs.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }
  .mofang-demo {
    position: absolute;
    top: 38px;
    left: 23px;
    right: 25px;
    bottom: 16px;
    overflow: hidden;
    border-radius: 0 0 35px 35px;
    border: 1px solid #edf0f4;
    border-top: none;
    background-color: #edf0f4;
  }
  iframe {
    width: 0;
    max-width: 100%;
    min-width: 100%;
  }
</style>