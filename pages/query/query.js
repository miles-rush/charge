Page({
  data: {
    // 查询级联接口
    url: 'https://www.mirrormoon.top:7901/aff/charge/',
    plug: 'https://yunzhifu.yjm2m.com/Device002/api/devices/',
    schoolArr: ['浙江工业大学屏峰校区', '浙江工业大学朝晖校区', '浙江工业大学莫干山校区'],
    schoolIndex: 0,
    areaArr: [],
    areaIndex: 0,
    locationArr: [],
    locationIndex: 0,
    session: '',
    options: [{
        "school": "浙江工业大学朝晖校区",
        "area": "精弘餐厅",
        "location": "精弘餐厅后面-1",
        "code": "002000253"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "备用",
        "location": "备用-1",
        "code": "002000254"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "生物楼",
        "location": "生物楼边",
        "code": "002000325"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "精弘餐厅",
        "location": "精弘餐厅后面-2",
        "code": "002000394"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "游泳馆",
        "location": "游泳馆前",
        "code": "002000397"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "师生活动中心",
        "location": "师生活动中心-1",
        "code": "002000375"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "师生活动中心",
        "location": "师生活动中心-2",
        "code": "002000376"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "机械楼",
        "location": "机械楼边-1",
        "code": "001002577"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东12幢-1",
        "code": "002000336"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "东配楼",
        "location": "东配楼-1",
        "code": "002000292"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东2-3之间-1",
        "code": "002000357"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "梦溪村",
        "location": "梦溪村4幢-1",
        "code": "002000293"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生公寓1号楼（菜鸟驿站）-1",
        "code": "002000365"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东12幢-2",
        "code": "002000335"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生公寓1号楼（菜鸟驿站）-2",
        "code": "002000364"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-1",
        "code": "002000329"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "海洋学院",
        "location": "海洋学院-1",
        "code": "002000382"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "信息学院",
        "location": "信息楼后面",
        "code": "002000351"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "环境楼",
        "location": "环境楼-1",
        "code": "002000360"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "尚德",
        "location": "尚德8幢前",
        "code": "001002573"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "艺术楼",
        "location": "艺术楼左边",
        "code": "002000352"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "东配楼",
        "location": "东配楼-2",
        "code": "002000320"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生公寓1号楼（菜鸟驿站）-3",
        "code": "002000366"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "东配楼",
        "location": "东配楼-3",
        "code": "001002576"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "尚德",
        "location": "尚德2幢-1",
        "code": "002000318"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "梦溪村",
        "location": "梦溪村2幢",
        "code": "002000324"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东1南面-1",
        "code": "002000400"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "尚德",
        "location": "尚德7幢前-1",
        "code": "002000316"
      },
      {
        "school": "浙江工业大学假山校区",
        "area": "假山",
        "location": "002000256",
        "code": "002000256"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "机械楼",
        "location": "机械楼",
        "code": "002000322"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "计算机学院",
        "location": "计算机楼后面",
        "code": "002000398"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "尚德",
        "location": "尚德2幢-2",
        "code": "002000317"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东8北面-1",
        "code": "002000408"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "海洋学院",
        "location": "海洋学院-2",
        "code": "002000358"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东12幢-3",
        "code": "002000221"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-2",
        "code": "002000222"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "协同",
        "location": "协同1号楼-1",
        "code": "002000373"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "生物楼",
        "location": "生物楼-1",
        "code": "002000383"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "生物楼",
        "location": "生物楼-2",
        "code": "002000384"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "仁和楼",
        "location": "仁和楼-1",
        "code": "002000390"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "生物楼",
        "location": "生物楼-3",
        "code": "002000387"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "广知楼",
        "location": "广知楼",
        "code": "002000393"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "药学院",
        "location": "药学院1号楼",
        "code": "002000388"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东2-3之间-2",
        "code": "002000356"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "体育馆",
        "location": "体育馆-1",
        "code": "002000377"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生楼8-9幢南面车棚-1",
        "code": "002000339"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西8幢-1",
        "code": "002000334"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-3",
        "code": "002000403"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东13和14之间-1",
        "code": "002000410"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "养贤府",
        "location": "养贤府北面-1",
        "code": "002000338"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-4",
        "code": "002000224"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "信息学院",
        "location": "信息楼（增加）",
        "code": "002000399"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东17幢",
        "code": "002000229"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "毓秀堂",
        "location": "毓秀堂后面-1",
        "code": "002000321"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "机械学院",
        "location": "机械楼3号楼后面-1",
        "code": "002000470"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "机械学院",
        "location": "机械楼3号楼后面-2",
        "code": "002000404"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东8北面-2",
        "code": "002000337"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "协同",
        "location": "协同2号楼-1",
        "code": "002000362"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "海洋学院",
        "location": "海洋学院-3",
        "code": "002000380"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生公寓10号楼边-1",
        "code": "002000411"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "机械学院",
        "location": "机械楼3号楼后面-3",
        "code": "002000406"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "后勤综合服务大厅",
        "location": "后勤综合服务大厅",
        "code": "002000341"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "建工学院",
        "location": "建工学院后面-1",
        "code": "002000473"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "建工学院",
        "location": "建工学院后面-2",
        "code": "002000472"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "协同",
        "location": "协同2号楼-2",
        "code": "002000363"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西4-5之间-1",
        "code": "002000330"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "校卫生所",
        "location": "校卫生所前-1",
        "code": "002000370"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "尚德",
        "location": "尚德2前工具电动车5路",
        "code": "002000485"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "师生活动中心",
        "location": "师生活动中心-3",
        "code": "002000374"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "尚德",
        "location": "尚德7幢前-2",
        "code": "002000211"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东12幢-前",
        "code": "002000220"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "协同",
        "location": "协同1号楼-2",
        "code": "002000371"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "体育馆",
        "location": "体育馆-2",
        "code": "002000378"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "海洋学院",
        "location": "海洋学院-4",
        "code": "002000386"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生公寓10号楼边-2",
        "code": "002000412"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-5",
        "code": "002000225-1"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东13和14之间-2",
        "code": "002000401"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "毓秀堂",
        "location": "毓秀堂后面-2",
        "code": "002000255"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-6",
        "code": "002000326"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "艺术楼",
        "location": "艺术楼右边",
        "code": "002000354"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "环境楼",
        "location": "环境楼-2",
        "code": "002000359"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东1南面-2",
        "code": "002000407"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "广知楼",
        "location": "广知楼（6个位）",
        "code": "002000392"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "子良楼",
        "location": "子良楼",
        "code": "002000396"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "养贤府",
        "location": "养贤府北面-2",
        "code": "002000345"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "东配楼",
        "location": "东配楼-4",
        "code": "002000319"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西4-5之间-2",
        "code": "002000332"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "药学院",
        "location": "药学院1号楼",
        "code": "002000372"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "仁和楼",
        "location": "仁和楼-2",
        "code": "002000389"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "生物楼",
        "location": "生物楼-4",
        "code": "002000379"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生公寓10号楼边-3",
        "code": "002000405"
      },
      {
        "school": "浙江工业大学假山校区",
        "area": "假山",
        "location": "002000257",
        "code": "002000257"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和食堂",
        "location": "家和食堂后面-1",
        "code": "002000348"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东2-3之间-3",
        "code": "002000342"
      },
      {
        "school": "浙江工业大学假山校区",
        "area": "假山",
        "location": "食堂边",
        "code": "002000391"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "环境楼",
        "location": "环境楼-3",
        "code": "002000361"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "备用",
        "location": "备用-2",
        "code": "002000346"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西4-5之间-3",
        "code": "002000331"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东2幢至4幢之间",
        "code": "002000355"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "计算机学院",
        "location": "计算机楼东面-5",
        "code": "002000226"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生楼8-9幢南面车棚-2",
        "code": "002000340"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东15幢后面",
        "code": "002000353"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "游泳馆",
        "location": "游泳馆前5个插座",
        "code": "002000395"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "东配楼",
        "location": "东配楼-5",
        "code": "001002575"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "机械学院",
        "location": "机械楼3号楼后面-4",
        "code": "002000471"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "校卫生所",
        "location": "校卫生所前-2",
        "code": "002000369"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "梦溪村",
        "location": "梦溪村4幢-2",
        "code": "002000323"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-7",
        "code": "002000327"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东2-3之间-4",
        "code": "002000343"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "计算机学院",
        "location": "计算机楼东面-4",
        "code": "002000350"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和东苑",
        "location": "家和东18幢",
        "code": "002000344"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "学生公寓",
        "location": "学生公寓10号楼边-4",
        "code": "002000413"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西8幢-2",
        "code": "002000333"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "机械学院",
        "location": "机械楼3号楼后面-5",
        "code": "002000469"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "协同",
        "location": "协同1号楼-3",
        "code": "002000367"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "计算机学院",
        "location": "计算机楼东面-3",
        "code": "002000228"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和食堂",
        "location": "家和食堂后面-2",
        "code": "002000347"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "计算机学院",
        "location": "计算机楼东面-2",
        "code": "002000227"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "毓秀堂",
        "location": "毓秀堂前-1",
        "code": "002000295"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-8",
        "code": "002000223"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "毓秀堂",
        "location": "毓秀堂前-2",
        "code": "002000294"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "食堂",
        "location": "食堂后面",
        "code": "002000368"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "海洋学院",
        "location": "海洋学院-5",
        "code": "002000381"
      },
      {
        "school": "浙江工业大学莫干山校区",
        "area": "协同",
        "location": "协同2号楼-3",
        "code": "002000385"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "尚德",
        "location": "尚德2幢前",
        "code": "001002574"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "机械楼",
        "location": "机械楼边-2",
        "code": "002000314"
      },
      {
        "school": "浙江工业大学朝晖校区",
        "area": "化学工程学院",
        "location": "化学工程学院",
        "code": "002000315"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "家和西苑",
        "location": "家和西6-7之间-9",
        "code": "002000328"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "计算机学院",
        "location": "计算机楼东面-1",
        "code": "002000349"
      },
      {
        "school": "浙江工业大学屏峰校区",
        "area": "机械学院",
        "location": "机械楼3号楼后面-6",
        "code": "002000402"
      }
    ],
    code: null,
    chargeList: null,
    loginUrl: "https://www.mirrormoon.top:7901/aff/charge/lg/",
    
    user: null,
  },
  // 关注当前桩位 按钮
  submitTask() {
    let that = this
    let list = this.data.chargeList
    let num = 0
    for (let i = 0; i < list.length; i++) {
      let device = list[i]
      if (device.status === 'F') {
        num++;
      }
    }
    
    // 弹出框提示
    wx.showModal({
      title: '确 认',
      content: '当前充电桩有【' + num + '】' + '个桩位，是否关注当前桩位，你只能关注一个桩位!',
      success(res) {
        if (res.confirm) {
          //console.log('用户点击确定')
          wx.requestSubscribeMessage({
            tmplIds: ['pct33Nlfh_PNuSLeQR6powxN1mecKFvTfojw9RLqhe8'],
            success(res){
              console.log(res) 
              let taskUrl = 'https://www.mirrormoon.top:7901/aff/charge/task/' + 'ok' + '/' + that.data.code + '/' + num + '/' + that.data.user.openid
              wx.request({  
                url: taskUrl,
                success(res) {
                  if(res.statusCode == 200) {
                    let data = res.data
                    console.log(data)
                    // todo
                    wx.showModal({
                      title: '通 知',
                      content: data,
                      success(res) {
                        if (res.confirm) {
                          //console.log('用户点击确定')
                        } else if (res.cancel) {
                          //console.log('用户点击取消')
                        }
                      }
                    })
                  }
                }
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  onLoad() {
    // this.getOptions(); 
    let that = this
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('login', res)
        wx.request({
          url: that.data.loginUrl + res.code,
          success(res) {
            console.log('后台登录 ', res)
            if (res.statusCode == 200) {
              that.setData({
                user: res.data
              })
            }
          }
        })
      }
    })
    this.pre()
    this.ad()
  },
  // 通知
  ad() {
    let adUrl = this.data.url + 'dy/ad'
    let that = this
    wx.request({
      url: adUrl,
      success(res) {
        let data = res.data.str
        if (data != '') {
          wx.showModal({
            title: '通 知',
            content: data,
            success(res) {
              if (res.confirm) {
                //console.log('用户点击确定')
              } else if (res.cancel) {
                //console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  },
  pre() {
    let sessionUrl = this.data.url + 'dy/session'
    let that = this
    wx.request({
      url: sessionUrl,
      success(res) {
        //console.log('session', res)
        that.setData({
          session: res.data.str
        })
        let e = new Object();
        let i = new Object();
        i.value = 0;
        e.detail = i;
        that.schoolChange(e);
        that.areaChange(e);
        that.locationChange(e);
      }
    })
  },
  getCodeInfo() {
    let that = this
    let localUrl = this.data.plug + this.data.code + '/plugs'
    //console.log(localUrl)
    wx.request({
      url: localUrl,
      header: {
        'Cookie': that.data.session
      },
      success(res) {
        //console.log(res)
        that.setData({
          chargeList: res.data
        })
        wx.showToast({
          title: '获取成功',
          icon: 'success',
          duration: 1000
        })

      },
      fail(res) {
        wx.showToast({
          title: '数据获取失败',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  getOptions() {
    let that = this
    wx.request({
      url: that.data.url,
      success(res) {
        that.setData({
          options: res.data
        })
        //console.log(res)
        let e = new Object();
        let i = new Object();
        i.value = 0;
        e.detail = i;
        that.schoolChange(e);
        that.areaChange(e);
        that.locationChange(e);
      }
    })
  },
  // 校区选择
  schoolChange(e) {
    let schoolIndex = e.detail.value
    let schoolStr = this.data.schoolArr[schoolIndex]
    //console.log(schoolStr)
    let arr = []
    // 清空
    this.data.areaArr.length = 0
    // 添加对应area
    for (let i = 0; i < this.data.options.length; i++) {

      if (this.data.options[i].school === schoolStr) {
        if (arr.indexOf(this.data.options[i].area) >= 0) {
          continue
        } else {
          arr.push(this.data.options[i].area);
        }
        // arr.push(this.data.options[i].area);
      }
    }
    // 赋值
    this.setData({
      schoolIndex: schoolIndex,
      areaArr: arr.sort().reverse(),
      areaIndex: 0,
      localIndex: 0
    })
    // 桩位
    let ex = new Object()
    let i = new Object()
    i.value = this.data.areaIndex
    ex.detail = i
    this.areaChange(ex)
    this.locationChange(ex)
  },
  // 区域选择
  areaChange(e) {
    let areaIndex = e.detail.value
    let areaStr = this.data.areaArr[areaIndex]
    //console.log(areaStr)
    let arr = []
    // 清空
    this.setData({
      locationArr: []
    })
    // 添加对应area
    for (let i = 0; i < this.data.options.length; i++) {
      if (this.data.options[i].area === areaStr) {
        arr.push(this.data.options[i].location);
      }
    }
    // 赋值
    this.setData({
      areaIndex: areaIndex,
      locationArr: arr.sort(),
      locationIndex: 0
    })
    // 刷新列表信息
    let ex = new Object()
    let i = new Object()
    i.value = this.data.localIndex
    ex.detail = i
    this.locationChange(ex)
  },
  // 桩位选择
  locationChange(e) {
    let locationIndex = e.detail.value
    let locationStr = this.data.locationArr[locationIndex]
    //console.log(locationStr)

    // 添加对应area
    for (let i = 0; i < this.data.options.length; i++) {
      if (this.data.options[i].location === locationStr) {
        // 当前的code
        this.setData({
          code: this.data.options[i].code,
          locationIndex: locationIndex
        })
        //console.log(this.data.options[i].code)
        this.getCodeInfo()
        break;
      }
    }

  },
  show() {
    wx.showModal({
      title: '开 发 说 明',
      content: '起因:一星期充不上电的绝望;其次:最近太忙了，只能先做一个简易的版本,有空会慢慢完善功能;最后:有BUG可以反馈到我。QAQ~',
      success(res) {
        if (res.confirm) {
          //console.log('用户点击确定')
        } else if (res.cancel) {
          //console.log('用户点击取消')
        }
      }
    })

  }
})