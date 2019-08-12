<template>
  <div :style="{minHeight:cHeight+'px',overflowY:'auto'}">
    <div class="toolBar" ref="toolBar">
      <el-row>
        <el-col :sm="18">
          <el-menu router :default-active="$route.path" class="subMenu" mode="horizontal">
            <el-menu-item index="/user/blackList">全部</el-menu-item>
            <el-menu-item index="/user/carOwner">车主</el-menu-item>
            <el-menu-item index="/user/customer">乘客</el-menu-item>
            <el-menu-item index="/user/blackList">黑名单</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :sm="6">
          <el-input type="text" clearable placeholder="请输入内容" v-model="searchVal">
            <template slot="append">
              <el-button type="primary">搜索</el-button>
            </template>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <el-table :height="tableHeight" :data="tableDatas" stripe border v-loading="loading" @selection-change=""
              highlight-current-row>
      <el-table-column v-for="item in tableColDatas" align="center" :min-width="item.minWidth" :width="item.width"
                       :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
      <el-table-column label="认证照片信息" align="center" width="150" fixed="right">
        <template slot-scope="scope">
          <el-button class="tableBtn" @click="handleEdit(scope.$index,scope.row)">调度</el-button>
        </template>
      </el-table-column>
    </el-table>
    <paginationBar @refreshTableEventFun="reloadTableData" :pageTotal="pageTotal"></paginationBar>

  </div>
</template>

<script>
  import paginationBar from '@/components/paginationBar'
  export default {
    name: "order",
    components:{
      paginationBar
    },
    data() {
      return {
        pageTotal:10,
        searchVal: '',
        loading: false,
        tableDatas: [
          {
            name: '何伟',
            tel: '13328942219',
            IDCard: '353303199828282828',
            address: '宁德市',
            brand: '宝马',
            seat: '4',
            carID: '闽SB110',
            carType: '小型车',
            color: '红',
          }
        ],
        tableColDatas: [
          {prop: 'name', width: '150', label: '姓名'},
          {prop: 'tel', width: '150', label: '电话', },
          {prop: 'IDCard', width: '200', label: '身份证',minWidth: '200'},
          {prop: 'address', width: '100', label: '地址'},
          {prop: 'brand', width: '250', label: '品牌'},
          {prop: 'seat', width: '80', label: '座位'},
          {prop: 'carID', width: '150', label: '车牌'},
          {prop: 'carType', width: '150', label: '车型'},
          {prop: 'color', width: '80', label: '颜色'},
        ]
      }
    },
    methods: {
      reloadTableData(parameterObj) {
        this.$alert(parameterObj)
      },
      handleEdit(index, row) {
        this.$alert(row)
      },
    },
    computed: {
      cHeight() {
        return this.$store.state.contentHeight
      },
      tableHeight() {
        return this.$store.state.contentHeight - 100 + 'px'
      }
    },
    mounted(){
      // this.$axios.get('',{}).then()
    }
  }
</script>

<style scoped>
  .pageBox {
    margin-top: 1rem;
  }
</style>
