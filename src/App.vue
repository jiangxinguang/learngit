<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        screenHeight: '',
      }
    },
    mounted() {
      const that = this;
      that.screenHeight = window.innerHeight;
      that.$store.commit('SET_S_HEIGHT', that.screenHeight);
      that.$store.commit('SET_C_HEIGHT', that.screenHeight - 110);
      that.$store.commit('SET_C_WIDTH', window.innerWidth);
      window.onresize = () => {
        return (() => {
          that.screenHeight = window.innerHeight;
          that.$store.commit('SET_S_HEIGHT', that.screenHeight);
          that.$store.commit('SET_C_HEIGHT', that.screenHeight - 110);
          that.$store.commit('SET_C_WIDTH', window.innerWidth);
        })()
      }
    }
  }
</script>


<style lang="scss">
  @import "./style/vars";

  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  #nprogress .bar {
    background-color: $color-primary;
  }

  .el-input-group__append {
    border-color: $color-primary;
    background-color: $color-primary;
    color: #f1f1f1
  }

  .toolBar {
    margin-bottom: 20px;

    .subMenu {
      border: 0;
      border-radius: 4px;
      display: inline-block;

      .el-menu-item {
        height: 40px;
        line-height: 40px;
        border: 1px solid;
        border-color: #bcbfbc !important;
        border-right: 0;
        text-align: center;

        &:first-of-type {
          border-radius: 4px 0 0 4px;
        }

        &:last-of-type {
          border-right: 1px solid #bcbfbc;
          border-radius: 0 4px 4px 0;
        }

        &.is-active {
          background-color: $color-primary;
          border-color: $color-primary !important;
          color: white;
        }
      }
    }

    .btnGroup{
      margin: 0 10px;
    }
  }

  .sideBox {
    .el-tooltip {
      padding: 0 !important;
    }
  }

  .el-table{
    .tableBtn{
      padding: 0;
      color: $color-primary;
      border: none;
    }
  }

</style>
