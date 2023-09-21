<template>
  <div class="app-container">
    <el-table :data="rows" stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> 
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180"> 
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间"> 
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import hospset from "@/api/hospset";

export default {
  data() {
    return {
      //变量：值
      rows: [],
      total: 0,
      searchObj:{}
    };
  },
  methods: {},
  created() {
    hospset.getHospsetPage(1, 5,this.searchObj).then((response) => {
      this.total = response.data.total;
      this.rows = response.data.rows;
    });
  },
};
</script>