<template>
  <div id="app">
    <div class="main-header">
      <div class="main-header-logo">
        <img src="./logo.png"
          alt="logo">
      </div>
      <div class="main-header-title">Z-UI</div>
      <ul class="main-header-nav">
        <li>
          <router-link to="/introduction">组件</router-link>
        </li>
        <li>
          <router-link to="/faq">FAQ</router-link>
        </li>
      </ul>
    </div>

    <div class="main-content">
      <div class="main-content-left" v-show="showNav">
        <ul>
          <li>
            <router-link to="/introduction">介绍</router-link>
          </li>
          <li>
            <router-link to="/guide">起步</router-link>
          </li>
          <li>
            <router-link to="/button">button 组件</router-link>
          </li>
        </ul>
      </div>
      <div class="main-content-right">
        <router-view class="markdown"></router-view>
      </div>
      <demoDisplay v-show="showDisplay"></demoDisplay>
    </div>
  </div>
</template>

<script>
import demoDisplay from './components/display/display'
export default {
  name: 'app',
  components: {
    demoDisplay
  },
  data () {
    return {
      showNav: true,
      showDisplay: true
    }
  },
  watch: {
    '$route' (to) {
      if (to.name === 'faq') {
        this.showNav = false;
        this.showDisplay = false
      } else {
        this.showNav = true;
        this.showDisplay = true;
      }
    }
  }
}
</script>

<style lang="less">
@import 'style/highjs.css';
@import 'style/md.css';
body {
  margin: 0;
  padding: 0;
  font-family: Microsoft YaHei;
}
#app {
  overflow: hidden;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  .main-header {
    transition: all 0.3s;
    box-shadow: 0 2px 8px #f0f1f2;
    position: relative;
    z-index: 10;
    height: 65px;
    color: #444;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    .main-header-title {
      height: 65px;
      line-height: 65px;
      font-size: 25px;
      display: inline-block;
      padding-left: 75px;
      font-weight: bold;
    }
    .main-header-logo {
      height: 100%;
      float: left;
      margin-left: 40px;
      position: absolute;
      img {
        height: 30px;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }
    .main-header-nav {
      margin: 0;
      padding: 0;
      float: right;
      height: 100%;
      background: transparent;
      margin-right: 160px;
      li, a {
        list-style: none;
        color: #314659;
        height: 100%;
        line-height: 65px;
        box-sizing: border-box;
        min-width: 72px;
        border-top: 2px solid transparent;
        text-align: center;
        cursor: pointer;
        font-size: 15px;
        float: left;
        border-bottom: 3px solid #fff;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        text-decoration: none;
        .router-link-active{
          color: #41a259;
          border-bottom: 3px solid #41a259;
        }
      }
    }
  }
  .main-content {
    position: relative;
    padding: 105px 0 0 0;
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    .router-link-active {
      color: #41a259 !important;
      background-color: #eeffde !important;
      border-right: 3px solid #41a259 !important;
    }    
    .main-content-left {
      float: left;
      flex: 0 0 auto;
      width: 279px;
      ul {
        width: 250px;
        margin: 0;
        padding: 0;
        li {
          margin: 0;
          list-style: none;
          padding: 0;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
          a {
            font-size: 16px;
            color: #333;
            line-height: 40px;
            height: 40px;
            margin: 0;
            padding: 4px 25px;
            text-decoration: none;
            display: block;
            position: relative;
            transition: 0.15s ease-out;
            font-weight: 700;
            border-right: 1px solid #e8e8e8;
            &:hover {
              color: #41a259;
            }
          }
          &.main--link-group {
            height: auto;
            ul a {
              display: block;
              height: 40px;
              color: #444;
              line-height: 40px;
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-weight: 400;
              &:hover {
                color: #41a259;
                cursor: pointer;
              }
            }
            a:hover {
              color: #333;
              cursor: default;
            }
          }        
        }
      }
    }
    .main-content-right {
      padding: 0 84px 140px 64px;
      min-height: 500px;
      overflow: hidden;
      flex: 1;
      overflow-y: auto;
      a {
        color: #41a259;
        text-decoration: none;
      }
      .page-display{
        flex: none;
        /* height: 100%;
        overflow-y: auto; */
      }      
    }
  }
}
</style>
