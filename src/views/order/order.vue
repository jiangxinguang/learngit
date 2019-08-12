<template>
  <div :style="{minHeight:cHeight+'px',overflowY:'auto'}">
    <div class="toolBar" ref="toolBar">
      <el-row>
        <el-col :sm="18">
          <el-menu router :default-active="$route.path" class="subMenu" mode="horizontal">
            <el-menu-item index="/order/1">订单</el-menu-item>
            <el-menu-item index="/order/2">乘车行程</el-menu-item>
            <el-menu-item index="/order/3">车主行程</el-menu-item>
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
      <el-table-column v-for="item in tableColDatas" align="center"
                       :key="item.prop" :prop="item.prop":width="item.width" :label="item.label"></el-table-column>
      <el-table-column label="操作" align="center" width="150" fixed="right">
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
        searchVal: '',
        pageTotal:10,
        loading: false,
        tableDatas: [
          {
            orderID: '111111',
            date: '2019-10-10',
            state: '可用',
            origin: '福建省',
            end: '宁德市',
            carID: 'ddddd',
            carOwner: '小明',
            brand: '宝马',
            color: '红色',
            seat: '4',
            carShare: 'yes',
            price: '500'
          }
        ],
        tableColDatas: [
          {prop: 'orderID', width: '150', label: '订单号'},
          {prop: 'date', label: '日期', width: '250'},
          {prop: 'state', width: '100', label: '订单状态'},
          {prop: 'origin', width: '250', label: '起点'},
          {prop: 'end', width: '250', label: '终点'},
          {prop: 'carID', width: '150', label: '车牌'},
          {prop: 'carOwner', width: '100', label: '车主'},
          {prop: 'brand', width: '80', label: '车品牌'},
          {prop: 'color', width: '80', label: '颜色'},
          {prop: 'seat', width: '80', label: '座位'},
          {prop: 'carShare', width: '80', label: '拼车'},
          {prop: 'price', label: '价格'},
        ],
        orderPageID:this.$route.params.id,
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
