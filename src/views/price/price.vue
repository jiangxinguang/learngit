<template>
  <div :style="{minHeight:cHeight+'px',overflowY:'auto'}">
    <div class="toolBar" ref="toolBar">
      <el-row>
        <el-col :sm="18">
          <el-button type="primary">新增 <i class="fa fa-plus"></i></el-button>
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
    <el-table :height="tableHeight"
              :data="tableDatas" stripe border
              v-loading="loading"
              @selection-change=""
              highlight-current-row>
      <el-table-column v-for="item in tableColDatas"
                       align="center"
                       :key="item.prop" :prop="item.prop"
                       :label="item.label"></el-table-column>
      <el-table-column label="操作" align="center" width="150">
        <template slot-scope="scope">
          <el-button class="tableBtn" @click="handleEdit(scope.$index,scope.row)">修改</el-button>
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
            ID: '000001',
            origin: '福建',
            end: '浙江',
            price: '500',
          }
        ],
        tableColDatas: [
          {prop: 'ID', width: '150', label: '序号'},
          {prop: 'origin', width: '200', label: '起点'},
          {prop: 'end',width: '200', label: '终点'},
          {prop: 'price', width: '200', label: '价格'},
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
  .thead{
    width: 100%;
    color: red;
  }
</style>
