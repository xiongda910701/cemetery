function getDetailData(){getQueryString("id");var e=template("detail-page-template",{imagePath:"../images/test/9.jpg",name:"江南豪园",type:"豪华别墅",price:1e6,introduce:"江南豪园位于钱塘江南岸，钱江新城、杭州大剧院隔江相望；钱江三桥、四桥双臂环抱，北临江南大道、南靠月明路、东起春晓路、西至江晖路；紧邻滨江区政府、CBD中央商务区、商业步行街及7万平方米的市民广场；江南大道擦肩而过，往东直抵萧山机场，越过钱江四桥可以畅行主城区和西湖景区的任何角落，而跨过钱江三桥则可快捷的到达钱江新城和火车站。"});$("#detail-page").append(e)}getDetailData();