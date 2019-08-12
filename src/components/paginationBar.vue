<template>
  <div class="pageBox">
    <el-pagination background
                   :page-size="pageInfo.pageSize"
                   :total="pageTotal"
                   layout="total, sizes, prev, pager, next, jumper"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="pageInfo.pageCurrent"
                   :page-sizes="[5, 10, 20]"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: "paginationBar",
    props:['pageTotal'],
    data() {
      return {
        pageInfo:{
          pageSize:5,
          // pageTotal:0,
          pageCurrent:1
        }
      };
    },
    methods: {
      handleSizeChange(val) {
        this.pageInfo.pageSize=val;
        this.$emit('refreshTableEventFun', this.pageInfo);
      },
      handleCurrentChange(val) {
        this.$emit('refreshTableEventFun', this.pageInfo)
      }
    }
  }
</script>

<style scoped>

</style>
