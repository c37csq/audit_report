// 基于准备好的dom，初始化echarts实例
var rule_chart = echarts.init(document.getElementById('rule_content'));
var sql_chart = echarts.init(document.getElementById('sql_content'));
var obj_chart = echarts.init(document.getElementById('obj_content'));
// var topRuleData = [[1000, "LOB_USE_BASICFILE", "middle"], [1000, "TAB_USE_LONG_RAW", "middle"], [1000, "TAB_EMPTY", "low"], [1000, "IDX_NO_RECM_NAMING", "low"]];
var clickArea = document.querySelectorAll('.clickArea > div > div');
var clickAreaWrapper = document.querySelectorAll('.clickArea > div');
var chartArea = document.querySelector('.chart_area');
var risk_nums = document.querySelector('.risk_nums');
var sql_score = document.querySelector('.sql_score');
var sql_problem = document.querySelector('.sql_problem');
var sql_total = document.querySelector('.sql_total');
var object_score = document.querySelector('.object_score');
var object_nums = document.querySelector('.object_nums');
var map = {
  0: 'high',
  1: 'middle',
  2: 'low',
  3: 'health'
};
data.report_high = data.report.filter(item => item.risky === 'high');
data.report_middle = data.report.filter(item => item.risky === 'middle');
data.report_low = data.report.filter(item => item.risky === 'low');
var pageArr = [];
// var pageConfig = {
//   start: 0,
//   current: 1,
//   pageSize: 5,
// }

/**
 * 分页函数
 * @type {string}
 */
function createPage(data) {
  var arr = [];
  for (let i = 0; i < data.length; i ++) {
    arr.push({
      start: 0,
      current: 1,
      pageSize: 5,
    })
  }
  return arr;
}

var status = '';
/**
 * 绑定事件
 */
function bindEvent() {
  clickArea[0].onclick = function () {
    if (status === 'high') {
      status = '';
      renderChart(data.topData);
      pageArr = createPage(data.report);
      renderTable(data.report);
      changeClickAreaStyle(-1);
    } else {
      changeClickAreaStyle(0);
      renderChart(data.high, 'high');
      pageArr = createPage(data.report);
      renderTable(data.report_high);
      status = 'high';
    }
    bindEvent();
  }
  clickArea[1].onclick = function () {
    if (status === 'middle') {
      status = '';
      renderChart(data.topData);
      pageArr = createPage(data.report);
      renderTable(data.report);
      changeClickAreaStyle(-1);
    } else {
      changeClickAreaStyle(1);
      renderChart(data.middle, 'middle');
      pageArr = createPage(data.report_middle);
      renderTable(data.report_middle);
      status = 'middle';
    }
    bindEvent();
  }
  clickArea[2].onclick = function () {
    if (status === 'low') {
      status = '';
      renderChart(data.topData);
      pageArr = createPage(data.report);
      renderTable(data.report);
      changeClickAreaStyle(-1);
    } else {
      changeClickAreaStyle(2);
      renderChart(data.low, 'low');
      pageArr = createPage(data.report_low);
      renderTable(data.report_low);
      status = 'low';
    }
    bindEvent();
  }
  var click_td = document.querySelectorAll('.click_td');
  for (let i = 0; i < click_td.length; i ++) {
    click_td[i].onclick = function () {
      var trs = document.querySelectorAll('.table_area .display_tr');
      if (trs[i].classList.contains('tr_open')) {
        changeImgStyle(i, false);
      } else {
        changeImgStyle(i, true);
      }
    }
  }
  var page_wrapper = document.querySelectorAll('.page_wrapper');
  for (let i = 0; i < page_wrapper.length; i ++) {
    page_wrapper[i].addEventListener('click', function (e) {
      if (e.target.className === 'page_item_active') {
        return;
      } else if (e.target.className === 'prev') {
        if (pageArr[i].current < 2) {
          return;
        }
        var arr = Array.from(page_wrapper[i].children[0].children);
        var page_items = arr.slice(2, arr.length - 1);
        for (let j = 0; j < page_items.length; j ++) {
          page_items[j].classList.remove('page_item_active');
        }
        pageArr[i].current = pageArr[i].current - 1;
        page_items[pageArr[i].current - 1].classList.add('page_item_active');
        pageArr[i].start = ((pageArr[i].current - 1) * pageArr[i].pageSize);
        if (status === '') {
          var type = data.report[i].audit_type;
          renderSmallTable(data.report, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'high') {
          var type = data.report_high[i].audit_type;
          renderSmallTable(data.report_high, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'middle') {
          var type = data.report_middle[i].audit_type;
          renderSmallTable(data.report_middle, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'low') {
          var type = data.report_low[i].audit_type;
          renderSmallTable(data.report_low, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        }
      } else if (e.target.className === 'next') {
        if (status === '') {
          if (pageArr[i].current > Math.ceil(data.report[i].detail.length / pageArr[i].pageSize) - 1) {
            return;
          }
          var arr = Array.from(page_wrapper[i].children[0].children);
          var page_items = arr.slice(2, arr.length - 1);
          for (let j = 0; j < page_items.length; j ++) {
            page_items[j].classList.remove('page_item_active');
          }
          pageArr[i].current = pageArr[i].current + 1;
          page_items[pageArr[i].current - 1].classList.add('page_item_active');
          pageArr[i].start = ((pageArr[i].current - 1) * pageArr[i].pageSize);
          var type = data.report[i].audit_type;
          renderSmallTable(data.report, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'high') {
          if (pageArr[i].current > Math.ceil(data.report_high[i].detail.length / pageArr[i].pageSize) - 1) {
            return;
          }
          var arr = Array.from(page_wrapper[i].children[0].children);
          var page_items = arr.slice(2, arr.length - 1);
          for (let j = 0; j < page_items.length; j ++) {
            page_items[j].classList.remove('page_item_active');
          }
          pageArr[i].current = pageArr[i].current + 1;
          page_items[pageArr[i].current - 1].classList.add('page_item_active');
          pageArr[i].start = ((pageArr[i].current - 1) * pageArr[i].pageSize);
          var type = data.report_high[i].audit_type;
          renderSmallTable(data.report_high, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'middle') {
          if (pageArr[i].current > Math.ceil(data.report_middle[i].detail.length / pageArr[i].pageSize) - 1) {
            return;
          }
          var arr = Array.from(page_wrapper[i].children[0].children);
          var page_items = arr.slice(2, arr.length - 1);
          for (let j = 0; j < page_items.length; j ++) {
            page_items[j].classList.remove('page_item_active');
          }
          pageArr[i].current = pageArr[i].current + 1;
          page_items[pageArr[i].current - 1].classList.add('page_item_active');
          pageArr[i].start = ((pageArr[i].current - 1) * pageArr[i].pageSize);
          var type = data.report_middle[i].audit_type;
          renderSmallTable(data.report_middle, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'low') {
          if (pageArr[i].current > Math.ceil(data.report_low[i].detail.length / pageArr[i].pageSize) - 1) {
            return;
          }
          var arr = Array.from(page_wrapper[i].children[0].children);
          var page_items = arr.slice(2, arr.length - 1);
          for (let j = 0; j < page_items.length; j ++) {
            page_items[j].classList.remove('page_item_active');
          }
          pageArr[i].current = pageArr[i].current + 1;
          page_items[pageArr[i].current - 1].classList.add('page_item_active');
          pageArr[i].start = ((pageArr[i].current - 1) * pageArr[i].pageSize);
          var type = data.report_low[i].audit_type;
          renderSmallTable(data.report_low, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        }
      } else if (e.target.className === 'page_item') {
        var arr = Array.from(page_wrapper[i].children[0].children);
        var page_items = arr.slice(2, arr.length - 1);
        for (let j = 0; j < page_items.length; j ++) {
          page_items[j].classList.remove('page_item_active');
        }
        e.target.classList.add('page_item_active');
        pageArr[i].start = (parseInt(e.target.innerText) - 1) * pageArr[i].pageSize;
        pageArr[i].current = parseInt(e.target.innerText);
        if (status === '') {
          var type = data.report[i].audit_type;
          renderSmallTable(data.report, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'high') {
          var type = data.report_high[i].audit_type;
          renderSmallTable(data.report_high, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'middle') {
          var type = data.report_middle[i].audit_type;
          renderSmallTable(data.report_middle, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        } else if (status === 'low') {
          var type = data.report_low[i].audit_type;
          renderSmallTable(data.report_low, i, type, pageArr[i].start, pageArr[i].current * pageArr[i].pageSize);
        }
      }
    });
  }
}

/**
 * 改变table及图标样式
 * @param index
 */
function changeImgStyle(index, flag) {
  var trs = document.querySelectorAll('.table_area .display_tr');
  var img_open_list = document.querySelectorAll('.close');
  var img_close_list = document.querySelectorAll('.open');
  if (flag) {
    trs[index].classList.add('tr_open');
    img_open_list[index].classList.add('open_img');
    img_close_list[index].classList.add('close_img');
  } else {
    trs[index].classList.remove('tr_open');
    img_open_list[index].classList.remove('open_img');
    img_close_list[index].classList.remove('close_img');
  }
}

function changeClickAreaStyle(index) {
  if (index === -1) {
    for (var i = 0; i < clickAreaWrapper.length; i++) {
      clickAreaWrapper[i].classList.remove('click_border_show');
      clickAreaWrapper[i].classList.remove('click_border');
    }
    chartArea.classList.remove('chart_border_top_none');
    return;
  }
  for (var i = 0; i < clickAreaWrapper.length; i ++) {
    clickAreaWrapper[i].classList.remove('click_border_show');
    clickAreaWrapper[i].classList.remove('click_border');
    if (i !== index) {
      clickAreaWrapper[i].classList.add('click_border_show');
    }
  }
  clickAreaWrapper[index].classList.add('click_border');
  chartArea.classList.add('chart_border_top_none');
}

/**
 * 处理上半部分数据渲染的函数
 */
function renderTopAreaData(info) {
  var headerTitle = document.querySelector('div > header h1');
  var score = document.querySelector('div > .report_info .score .first_span');
  headerTitle.innerText = info.name;
  score.innerText = info.score;
  var info_table = document.querySelector('.info_table');
  var tableDom = `
  <table style="width: 100%;";
                 cellspacing="0"
                 cellpadding="0">
            <tr>
              <td class="title">数据库名称</td>
              <td class="content">${info.db_name}</td>
              <td class="title">数据库类型</td>
              <td class="content">${info.db_type}</td>
              <td class="title">任务名称</td>
              <td class="content">${info.task_name}</td>
            </tr>
            <tr>
              <td class="title">审核开始时间</td>
              <td class="content">${formatDate(info.start_time)}</td>
              <td class="title">审核结束时间</td>
              <td class="content">${formatDate(info.end_time)}</td>
              <td class="title">执行耗时</td>
              <td class="content">${info.end_time - info.start_time}秒</td>
            </tr>
            <tr>
              <td class="title">开始时间</td>
              <td class="content">${formatDate(info.start_time)}</td>
              <td class="title">Schema</td>
              <td class="content" colspan="3">${info.schemas}</td>
            </tr>
          </table>`;
  info_table.innerHTML = tableDom;
}

/**
 * 渲染分页表格
 */
function renderSmallTable(info, index, type, start, end) {
  if (type === 'SQL') {
    var str = `<tr>
                  <td style="width: 157px;">SQL_ID</td>
                  <td style="width: 130px;">首次审核时间</td>
                  <td style="width: 170px;">Schema</td>
                  <td style="width: 290px;">SQL文本</td>
                  <td style="width: 360px">违反规则</td>
                  <td style="width: 100px;">审核评分</td>
                </tr>`;
    for (var j = 0; j < info[index].detail.slice(start, end).length; j ++) {
      str += `
                <tr>
                  <td><a style="width: 130px;color: rgb(0, 145, 255);cursor: pointer;">${info[index].detail.slice(start, end)[j].sql_id}</a></td>
                  <td width="150">${formatDate(info[index].detail.slice(start, end)[j].first_audit_time)}</td>
                  <td width="180">${info[index].detail.slice(start, end)[j].schema}</td>
                  <td width="280"><div title="${info[index].detail.slice(start, end)[j].sql_text}" style="display: inline-block;width: 280px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${info[index].detail.slice(start, end)[j].sql_text}</div></td>
                  <td style="width: 360px;">`;
      for (var h = 0; h < info[index].detail.slice(start, end)[j].audit.length; h ++) {
        str += `<div title="${info[index].detail.slice(start, end)[j].audit[h].description}" style="display: inline-block;width: 100px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="${classMap[info[index].detail.slice(start, end)[j].audit[h].risky]}">${info[index].detail.slice(start, end)[j].audit[h].name}</div>`
      }
      str += `</td>
                  <td width="100">${info[index].detail.slice(start, end)[j].score}</td>
                  </tr>`;
    }
    document.querySelectorAll('.table_two')[index].innerHTML = str;
  } else if (type === 'OBJECT') {
    var obj_str = `<tr>
                  <td style="width: 157px;">对象名</td>
                  <td style="width: 60px;">类型</td>
                  <td style="width: 157px;">表名</td>
                  <td style="width: 170px;">Schema</td>
                  <td style="width: 360px;">审核规则</td>
                  <td style="width: 130px;">最近一次审核时间</td>
                  <td style="width: 100px;">审核评分</td>
                </tr>`;
    for (var j = 0; j < info[index].detail.slice(start, end).length; j ++) {
      obj_str += `
                <tr>
                  <td><a style="width: 130px;color: rgb(0, 145, 255);cursor: pointer;">${info[index].detail.slice(start, end)[j].name}</a></td>
                  <td width="150">${typeMap[info[index].detail.slice(start, end)[j].type]}</td>
                  <td width="180">${info[index].detail.slice(start, end)[j].table_name}</td>
                  <td><div style="width: 180px !important;">${info[index].detail.slice(start, end)[j].schema}</div></td>
                  <td style="width: 360px;">`;
      for (var h = 0; h < info[index].detail.slice(start, end)[j].audit.length; h ++) {
        obj_str += `<div title="${info[index].detail.slice(start, end)[j].audit[h].name}" class="${classMap[info[index].detail.slice(start, end)[j].audit[h].risky]}">${info[index].detail.slice(start, end)[j].audit[h].name}</div>`
      }
      obj_str += `</td>
                  <td>${formatDate(info[index].detail.slice(start, end)[j].current_audit_time)}</td>
                  <td width="100">${info[index].detail.slice(start, end)[j].score}</td><tr/>`;
    }
    document.querySelectorAll('.table_two')[index].innerHTML = obj_str;
  }
}

/**
 * 循环渲染下面表格
 */
var riskMap = {
  'high': '[严重风险]',
  'middle': '[警告风险]',
  'low': '[提示风险]',
}
var colorMap = {
  'high': 'rgb(224, 32, 32)',
  'middle': 'rgb(245, 124, 0)',
  'low': 'rgb(71, 167, 240)',
}
var textMap = {
  'SQL': 'SQL列表',
  'OBJECT': '问题对象列表',
}
var titleMap = {
  'SQL': 'SQL',
  'OBJECT': '对象',
}
var classMap = {
  'high': 'danger_item',
  'middle': 'middle_item',
  'low': 'info_item',
}
var typeMap = {
  'INDEX': '索引',
  'TABLE': '表',
  'SEQUENCE': '序列',
}

/**
 * 渲染表格数据
 * @param info
 */
function renderTable(info) {
  var initStr = `<tr style="background: #f8f8f9;">
            <td style="width: 50px">序号</td>
            <td style="width: 300px">风险项名称</td>
            <td style="width: 140px">规则类别</td>
            <td style="width: 600px">问题描述</td>
            <td style="width: 80px">命中个数</td>
            <td style="width: 80px">影响SQL占比</td>
          </tr>`;
  for(var i = 0; i < info.length; i ++) {
    var trStr = `
    <tr>
            <td>${i + 1}</td>
            <td class="click_td" style="text-align: left;cursor: pointer;"><img class="close" src="./images/icon_close.png" width="10"/><img class="open" src="./images/icon_open.png" width="10"/> <span style="color: ${colorMap[info[i].risky]}">${riskMap[info[i].risky]}</span> ${info[i].name}</td>
            <td>${titleMap[info[i].audit_type]}</td>
            <td title="${info[i].description}">${info[i].description}</td>
            <td>${info[i].target_number}/${info[i].total}</td>
            <td>${info[i].ratio}%</td>
          </tr>
          <tr class="display_tr">
            <td colspan="6" style="width: 100%;padding: 18px 35px;">
              <table class="table_one" style="width: 100%;border-collapse:collapse;">
                <tr>
                  <td style="font-weight: normal;width: 100px;">问题描述</td>
                  <td style="font-weight: normal;width: 1125px;" title="${info[i].description}">${info[i].description}</td>
                </tr>
                <tr>
                  <td style="width: 100px;">解决建议</td>
                  <td>${info[i].advice}</td>
                </tr>
                <tr>
                  <td style="width: 100px;">wiki链接</td>
                  <td>
                    <a style="color: rgb(0, 145, 255);cursor: pointer;">${info[i].name}</a>
                  </td>
                </tr>
              </table>
              <h3>${textMap[info[i].audit_type]}</h3>
    `;
    if (info[i].audit_type === 'SQL') {
      var tabStr = `<table class="table_two" style="width: 100%;border-collapse:collapse;"
              cellspacing="0"
              cellpadding="0">
                <tr>
                  <td style="width: 157px;">SQL_ID</td>
                  <td style="width: 130px;">首次审核时间</td>
                  <td style="width: 170px;">Schema</td>
                  <td style="width: 290px;">SQL文本</td>
                  <td style="width: 360px">违反规则</td>
                  <td style="width: 100px;">审核评分</td>
                </tr>`;
      for (var j = 0; j < info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize).length; j ++) {
      tabStr += `
                <tr>
                  <td><a style="width: 130px;color: rgb(0, 145, 255);cursor: pointer;">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].sql_id}</a></td>
                  <td width="150">${formatDate(info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].first_audit_time)}</td>
                  <td width="180">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].schema}</td>
                  <td style="width: 280px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"><span title="${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].sql_text}" style="display: inline-block;width: 280px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].sql_text}</span></td>
                  <td style="width: 360px;">`;
        for (var h = 0; h < info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].audit.length; h ++) {
        tabStr += `<div title="${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].audit[h].description}" class="${classMap[info[i].detail[j].audit[h].risky]}">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].audit[h].name}</div>`
      }
        tabStr += `</td>
                  <td width="100">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].score}</td></tr>`;
      }
      tabStr += `</table>`;
      var pageStr = `
      <div class="page_wrapper" style="margin-top: 10px;width: 100%;display: flex;justify-content: flex-end;">
        <div>
            <span>共 ${info[i].detail.length} 条</span>
            <span class="prev">&lt;</span>`;
      for (var p = 0; p < Math.ceil(info[i].detail.length / pageArr[i].pageSize); p++) {
        if (p === 0) {
          pageStr += `<span class="page_item page_item_active">${p + 1}</span>`;
        } else {
          pageStr += `<span class="page_item">${p + 1}</span>`;
        }
      }
      pageStr += `<span class="next">&gt;</span>
        </div>
        </div>`;
        //     `<span class="page_item page_item_active">1</span>
        //     <span class="page_item">2</span>
        //     <span class="page_item">3</span>
        //     <span class="next">&gt;</span>
        // </div>
        // </div>`;
      tabStr += pageStr;
      tabStr += `</td>
      </tr>`;
    trStr += tabStr;
    } else if (info[i].audit_type === 'OBJECT') {
      var tab_str = `<table class="table_two" style="width: 100%;border-collapse:collapse;"
              cellspacing="0"
              cellpadding="0">
                <tr>
                  <td style="width: 157px;">对象名</td>
                  <td style="width: 60px;">类型</td>
                  <td style="width: 157px;">表名</td>
                  <td style="width: 157px;">Schema</td>
                  <td style="width: 360px;">审核规则</td>
                  <td style="width: 130px;">最近一次审核时间</td>
                  <td style="width: 157px;">审核评分</td>
                </tr>`;
      for (var j = 0; j < info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize).length; j ++) {
        tab_str += `
                <tr>
                  <td><a style="width: 130px;color: rgb(0, 145, 255);cursor: pointer;">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].name}</a></td>
                  <td style="width: 150px;">${typeMap[info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].type]}</td>
                  <td style="width: 180px;">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].table_name}</td>
                  <td style="width: 150px;"><div style="text-align: center;width: 150px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].schema}</div></td>
                  <td style="width: 360px;">`;
        for (var h = 0; h < info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].audit.length; h ++) {
          tab_str += `<div title="${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].audit[h].description}" class="${classMap[info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].audit[h].risky]}">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].audit[h].name}</div>`
        }
        tab_str += `</td>
                  <td>${formatDate(info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].current_audit_time)}</td>
                  <td width="100">${info[i].detail.slice(pageArr[i].start, pageArr[i].current * pageArr[i].pageSize)[j].score}</td></tr>`;
      }
      tab_str += `</table>`;
      var pageStr = `
      <div class="page_wrapper" style="margin-top: 10px;width: 100%;display: flex;justify-content: flex-end;">
        <div>
            <span>共 ${info[i].detail.length} 条</span>
            <span class="prev">&lt;</span>`;
      for (var p = 0; p < Math.ceil(info[i].detail.length / pageArr[i].pageSize); p++) {
        if (p === 0) {
          pageStr += `<span class="page_item page_item_active">${p + 1}</span>`;
        } else {
          pageStr += `<span class="page_item">${p + 1}</span>`;
        }
      }
      pageStr += `<span class="next">&gt;</span>
        </div>
        </div>`;
      tab_str += pageStr;
      tab_str += `</td>
      </tr>`;
      trStr += tab_str;
    }
    initStr += trStr;
  }
  document.querySelector('.bottom_table').innerHTML = initStr;
}

/**
 * 处理SQL top数据函数
 */
function dealSQL_OBJ_TOP(info) {
  var arr = [];
  for(var i = 0; i < info.length; i ++) {
    arr.push([info[i].count, info[i].name]);
  }
  return arr;
}

/**
 * 处理高危规则命中
 */
function dealRisk_TOP(info) {
  var arr = [];
  // var data = info.reverse().slice(0, 5);
  var data = info.slice(0, 5);
  for (var i = 0; i < data.length; i++) {
    arr.push([data[i].count, data[i].name, data[i].risky]);
  }
  return arr;
}

/**
 * 处理中间部分数据渲染的函数
 */
function renderCenterAreaData(info) {
  // 获取dom节点
  var items = document.querySelectorAll('.nums');
  for (var i = 0; i < items.length; i ++) {
    items[i].innerText = info[map[i]];
  }
}

/**
 * 时间戳转日期函数
 * @param m
 * @returns {*}
 */
function add0(m){return m<10?'0'+m:m }
function formatDate(needTime) {
  //needTime是整数，否则要parseInt转换
  var time = new Date(needTime * 1000);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

/**
 * 创建dom函数
 * prop { class: [], id: [] }
 * @param pDom
 * @param dom
 * @param text
 * @param prop
 */
function createDom(pDom, dom, text, prop) {
  dom.innerText = text;
  for (var key in prop) {
    var arr = [];
    if (prop[key].length !== 0) {
      if (prop[key].length === 1) {
        for (var i = 0; i < prop[key].length; i ++) {
            dom.setAttribute(key, prop[key][i]);
        }
      } else {
        for (var i = 0; i < prop[key].length; i ++) {
          arr.push(prop[key][i])
        }
        dom.setAttribute(key, arr.join(' '));
      }
    }
  }
  pDom.appendChild(dom);
}

/**
 * 渲染图表数据
 */
function renderChart(info, level) {
  if (!level) {
    risk_nums.innerText = info.risk_count.reduce(function (total, currentValue, currentIndex, arr) {
      return total + currentValue.count;
    }, 0);
  } else {
    risk_nums.innerText = info.risk_count[info.risk_count.findIndex(item => item.name === level)].count;
  }
  sql_score.innerText = info.info.sql_score;
  sql_problem.innerText = info.sql_count[0].count;
  sql_total.innerText = info.sql_count[1].count;
  object_score.innerText = info.info.object_score;
  object_nums.innerText = info.object_count[0].count;
  rule_chart.setOption(createOption('规则命中TOP5（次）', dealRisk_TOP(info.risk_top), { one: '规则名', two: '次数', dw: '次' }));
  sql_chart.setOption(createOption('低分SQL TOP5（分)', dealSQL_OBJ_TOP(info.object_top), { one: '规则名', two: '次数', dw: '次' }));
  obj_chart.setOption(createOption('低分OBJECT TOP5（分）', dealSQL_OBJ_TOP(info.sql_top), { one: '对象名', two: '分数', dw: '分' }));
}

/**
 * 初始化函数
 */
function init() {
  pageArr = createPage(data.report);
  var topInfo = data.topData.info;
  renderCenterAreaData(data.clickAreaData);
  renderTable(data.report);
  renderChart(data.topData);
  renderTopAreaData(topInfo);
  bindEvent();
}

init();

// 创建图表option函数
function createOption(title, source, tooltipObj) {
  var max = 0.1;
  var serData = [];
  var xData = [];
  var areaStyle = [];
  var color = {
    high: '#E02020',
    middle: '#F57C00',
    low: '#47A7F0',
  };
  source.forEach((item) => {
    if (max < item[0]) {
      max = item[0];
    }
    serData.push({
      value: item[0],
      xValue: item[1],
      itemStyle: {
        color: item[2] ? color[item[2]] : 'rgba(71, 167, 240, 1)',
      },
    });
    xData.push(item[1]);
    areaStyle.push('rgba(255,255,255,0)');
  });
  if (source.length < 5) {
    const len = 5 - source.length;
    for (let i = 0; i < len; i += 1) {
      serData.push({ value: 0, xValue: 0 });
      xData.push('');
      areaStyle.push('rgba(255,255,255,0)');
    }
  }
  return {
    title: {
      text: title,
      top: 12,
      left: 12,
      textStyle: {
        color: '#111',
        fontSize: 14,
        fontWeight: 'normal',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: a => `${tooltipObj.one}：${a[1].name}<br>${tooltipObj.two}：${a[1].value}${tooltipObj.dw}`,
    },
    grid: {
      x: 24, // 左侧
      y: 45, // 上
      x2: 50,
      y2: 60,
    },
    xAxis: {
      type: 'category',
      data: xData,
      minInterval: 1,
      axisLabel: {
        rotate: -12,
        show: true,
        interval: 'auto',
      },
    },
    yAxis: {
      max,
      type: 'value',
      axisTick: {
        show: false,
        alignWithLabel: false, // 刻度线和标签对齐
      },
      splitLine: {
        show: false,
        interval: 0,
        lineStyle: {
          type: 'dashed',
        },
      },
      axisLabel: {
        show: false,
        interval: 0,
      },
    },
    series: [
      { // For shadow
        type: 'bar',
        itemStyle: {
          color: 'rgba(0,0,0,0.05)',
        },
        barGap: '-100%',
        barCategoryGap: '40%',
        barWidth: '50%',
        data: [max, max, max, max, max],
        animation: false,
      },
      {
        type: 'bar',
        barWidth: '50%',
        data: serData,
      },
    ],
  }
}
// 使用刚指定的配置项和数据显示图表。
