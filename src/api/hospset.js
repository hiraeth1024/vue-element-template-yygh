import request from '@/utils/request'


const API = '/admin/hosp/hospitalSet'

//es6导出语法
export default{

    getHospsetPage(pageNum, size, searchObj) {
        return request({
          url: `${API}/page/${pageNum}/${size}`,
          method: 'post',
          //如果携带的是普通参数:params;如果携带的是json数据:data（后端接口有@RequestBody）
          data: searchObj
        })
    }

}
