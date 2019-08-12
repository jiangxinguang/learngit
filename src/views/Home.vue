<template>
  <div class="container">
    <aside class="sideBox">
      <div class="logo"></div>
      <el-scrollbar wrap-class="scrollbar-wrapper">
       <!-- <el-menu router :default-active="$route.path">
          <el-menu-item :index="item.path" v-for="item in menus" :key="item.path">
            <i :class="item.icon" class="fa"></i>
            <span slot="title" v-text="item.name"></span>
          </el-menu-item>
        </el-menu>-->
         <el-menu router  :default-active="$route.path" collapse>
           <template v-for="item in menus">
             <el-tooltip effect="dark" :key="item.path" :content="item.name" placement="right">
             <el-menu-item :index="item.path">
               <div class="iconBox">
               <i :class="item.icon" class="fa"></i>
               </div>
             </el-menu-item>
             </el-tooltip>
           </template>
         </el-menu>

      </el-scrollbar>
    </aside>
    <section class="main">
      <header class="header">
        <el-row>
          <el-col :span="1">
            <i class="fa fa-search"></i>
          </el-col>
        </el-row>
      </header>
      <div class="content-container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        menus: [
          {path: '/order/1', icon: 'fa-file-text-o', name: '订单管理'},
          {path: '/user', icon: 'fa-user', name: '用户管理'},
          {path: '/check', icon: 'fa-car', name: '车主审核'},
          {path: '/price', icon: 'fa-laptop', name: '计价管理'},
          {path: '/setting', icon: 'fa-cog', name: '系统设置'},
        ]
      };
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/vars";

  .container {
    padding: 0;
    display: flex;
    flex-flow: nowrap row;
    align-items: stretch;
    justify-items: stretch;
    position: relative;
    height: 100vh;
    overflow: hidden;

    .sideBox {
      height: 100vh;
      width: 64px;
      flex: 0 0 64px;
      background-color: $color-primary;

      .logo {
        height: 40px;
        width: 100%;
      }

      .el-menu {
        background-color: transparent;
        border: 0;
        margin-top: 15px;

        .el-menu-item {
          padding: 0 !important;
          display: block;
          text-align: center;
          border-radius: 100px;
          width: 48px;
          height: 48px;
          line-height: 48px;
          margin: 10px auto;

          &.is-active,
          &:hover {
            background-color: rgba(250, 250, 250, .6);
          }

          .fa {
            font-size: 1.5rem;
            color: white;
          }
        }
      }


      .scrollbar-wrapper {
        height: 100vh;
      }
    }

    .main {
      flex: 1;
      overflow: hidden;
      background-color: #F3F3F3;

      .header {
        height: 40px;
        background: white;
        line-height: 40px;
        padding: 0 10px;
      }

      .content-container {
        margin: 15px;
        padding: 20px 15px;
        background: white;
        overflow: auto;
      }
    }

    .pageBox {
      margin-top: 1rem;
    }
  }
</style>
