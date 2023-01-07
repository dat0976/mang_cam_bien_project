
////khối kiểm soát đầu vào ra của nút nhấn------------start------------------------------
//---nền sáng tối--------------------------------------------
var checkbox_toggle_body = document.getElementById('light-dark');
checkbox_toggle_body.addEventListener('change',function(){
    document.body.classList.toggle('dark');
});
//--công tắc âm thanh------------------------------------------
var checkbox_toggle_amthanh = document.getElementById('switch_am_thanh');
checkbox_toggle_amthanh.addEventListener('change',function(){
    //if(confirm("Bạn chắc chắn muốn bật-tắt âm thanh chứ") == true){
       document.getElementById('style_img_am_thanh').classList.toggle('change_a_t');
  // }

});
//--công tắc chiếu sáng------------------------------------------
var checkbox_toggle_chieusang = document.getElementById('switch_chieu_sang');
checkbox_toggle_chieusang.addEventListener('change',function(){
    //if(confirm("Bạn chắc chắn muốn bật-tắt chiếu sáng chứ") == true){
        document.getElementById('style_img_chieu_sang').classList.toggle('change_c_s');
   // }
    
});
//công tắc điện lạnh
var checkbox_toggle_amthanh = document.getElementById('switch_dien_lanh');
checkbox_toggle_amthanh.addEventListener('change',function(){
    if(confirm("Bạn chắc chắn muốn bật-tắt điện lạnh chứ") === true){
        document.getElementById('style_img_dien_lanh').classList.toggle('change_d_l');
    }
});
//công tắc chống trộm
var checkbox_toggle_amthanh = document.getElementById('switch_chong_trom');
checkbox_toggle_amthanh.addEventListener('change',function(){
    //if(confirm("Bạn chắc chắn muốn bật-tắt chống trộm chứ") == true){
       document.getElementById('style_img_chong_trom').classList.toggle('change_c_t'); 
    //}
});
//công tắc định vị
var checkbox_toggle_amthanh = document.getElementById('switch_dinh_vi');
checkbox_toggle_amthanh.addEventListener('change',function(){
   // if(confirm("Bạn chắc chắn muốn bật-tắt định vị chứ") == true){
        document.getElementById('style_img_dinh_vi').classList.toggle('change_d_v');
  // }
    
});
////khối kiểm soát đầu vào ra của nút nhấn------------end------------------------------
// khối random thông số cảm biến-----start--------------------------
//chu kỳ lấy dữ liệu từ cảm biến về
var T_sensor =1000;
// chu kì lưu vào đồ thị
var T_graph = 1000; 
var n_d_tt = [];
var d_a_tt = [];
var k_g_tt = [];
var data_nd;
var data_da;
var data_kg;
function loat_lai_tt(){
data_nd = Math.floor((Math.random()*150)+(Math.random()*-150))
document.getElementById("nd").innerHTML = data_nd + '&degC';
document.getElementById("do_am").style.backgroundSize= "100% 100%";
//đổi màu nhiệt độ------------------------------------------------------------------------------------------
if( data_nd < -100 ){
    document.getElementById("nhiet_do").style.background=" linear-gradient(to bottom right,rgb(255, 255, 255),rgb(9, 174, 224))";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
    document.getElementById("icon_nd_lv3").classList.add('icon_vt_son_l');
    document.getElementById("icon_nd_lv2").classList.add('icon_vt_son_l');
    document.getElementById("icon_nd_lv1").classList.add('icon_vt_son_l');
    //alert("Hôm nay nhiệt độ rất lạnh ,khi ra đường bạn nên mặc áo ấm!");
} else if( data_nd < -50 ){
    document.getElementById("nhiet_do").style.background=" linear-gradient(to bottom right,rgb(255, 255, 255),rgb(9, 174, 224))";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
    document.getElementById("icon_nd_lv3").classList.toggle('icon_vt_son_l');
    document.getElementById("icon_nd_lv2").classList.toggle('icon_vt_son_l');
   // alert("Hôm nay nhiệt độ rất lạnh ,khi ra đường bạn nên mặc áo ấm!");
} else if( data_nd < 0 ){
    document.getElementById("nhiet_do").style.background=" linear-gradient(to bottom right,rgb(255, 255, 255),rgb(9, 174, 224))";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới 
    document.getElementById("icon_nd_lv3").classList.toggle('icon_vt_son_l');
   // alert("Hôm nay nhiệt độ lạnh ,khi ra đường bạn nên mặc áo ấm!");
} else if( data_nd < 10 ){
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,rgb(192, 216, 216),rgb(79, 180, 226))";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
    // alert("Hôm nay nhiệt độ khá lạnh ,khi ra đường bạn nên mặc áo ấm!");
} else if( data_nd < 25 ){
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,rgb(71, 88, 247),rgb(0, 255, 234))";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
} else if( data_nd < 37 ){
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,rgb(0, 255, 234),yellow)";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
} else if( data_nd < 43 ){
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,red,yellow)";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
} else if( data_nd < 50 ){
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,red,orange)";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
    // alert("Hôm nay nhiệt độ khá nóng ,bạn nên mở điều hòa");
} else if( data_nd < 60 ){
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,red,orange)";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
    document.getElementById("icon_nd_lv3").classList.toggle('icon_vt_son_n');
    // alert("Hôm nay nhiệt độ khá lạnh ,khi ra đường bạn nên mặc áo ấm!");
} else if( data_nd < 80 ){
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,red,orange)";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
    document.getElementById("icon_nd_lv3").classList.toggle('icon_vt_son_n');
    document.getElementById("icon_nd_lv2").classList.toggle('icon_vt_son_n');
    // alert("Hôm nay nhiệt độ khá lạnh ,khi ra đường bạn nên mặc áo ấm!");
} else{
    document.getElementById("nhiet_do").style.background="linear-gradient(to bottom right,red,orange)";
    //tìm vị trí lớp cũ cần xóa
    var classold_1 = document.getElementById("icon_nd_lv1").classList.item(0);
    var classold_2 = document.getElementById("icon_nd_lv2").classList.item(0);
    var classold_3 = document.getElementById("icon_nd_lv3").classList.item(0);
    //xóa lớp cũ
    document.getElementById("icon_nd_lv3").classList.remove(classold_3);
    document.getElementById("icon_nd_lv2").classList.remove(classold_2);
    document.getElementById("icon_nd_lv1").classList.remove(classold_1);
    // thêm lớp mới
    document.getElementById("icon_nd_lv3").classList.toggle('icon_vt_son_n');
    document.getElementById("icon_nd_lv2").classList.toggle('icon_vt_son_n');
    document.getElementById("icon_nd_lv1").classList.toggle('icon_vt_son_n');
    // alert("Hôm nay nhiệt độ khá lạnh ,khi ra đường bạn nên mặc áo ấm!");
}
//do_am-----------------------------------------------------------------------------------
data_da=Math.floor((Math.random()*100))
document.getElementById('da').innerHTML =data_da + '%';
document.getElementById("do_am").style.backgroundSize= "100% 100%";
if( data_da < 10 ){
     //xóa lớp cũ
    document.getElementById("icon_da_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv1").classList.remove('icon_vt_son');
    //nền
    document.getElementById("do_am").style.backgroundImage="url('./img/drought-2080964_960_720.jpg')";
    // đổi màu chữ
    document.getElementById("do_am").style.color="white";
} else if( data_da < 15 ){
    //xóa lớp cũ
    document.getElementById("icon_da_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv1").classList.remove('icon_vt_son');
    //nền
    document.getElementById("do_am").style.backgroundImage="url('./img/drought-2080964_960_720.jpg')";
    //đổi màu chữ
    document.getElementById("do_am").style.color="white";
} else if( data_da < 30 ){
    //xóa lớp cũ
    document.getElementById("icon_da_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv1").classList.remove('icon_vt_son');   
    document.getElementById("do_am").style.backgroundImage="url('./img/drought-2080964_960_720.jpg')";
    //đổi màu chữ
    document.getElementById("do_am").style.color="white";
} else if( data_da < 40 ){
    //xóa lớp cũ
    document.getElementById("icon_da_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv1").classList.remove('icon_vt_son');
    //nền    
    document.getElementById("do_am").style.background="linear-gradient(to bottom right,rgb(233, 104, 18),rgb(241, 219, 19))";
    document.getElementById("do_am").style.color="black";
} else if( data_da < 70 ){
    //xóa lớp cũ
    document.getElementById("icon_da_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_da_lv1").classList.remove('icon_vt_son');
    //nền
    document.getElementById("do_am").style.background="linear-gradient(to bottom right,rgb(233, 133, 18),rgb(185, 223, 218))";
    document.getElementById("do_am").style.color="black";
} else if( data_da < 80 ){
    //xóa lớp cũ
    document.getElementById("icon_kg_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv2").classList.remove('icon_vt_son');
    //nền
    document.getElementById("do_am").style.backgroundImage="url('./img/am_ươt.jpg')";
    //thêm lớp mới
    document.getElementById("icon_da_lv1").classList.toggle('icon_vt_son');
    document.getElementById("do_am").style.color="black";
} else if( data_da < 90 ){
    //xóa lớp cũ
    document.getElementById("icon_da_lv3").classList.remove('icon_vt_son');
    //nền
    document.getElementById("do_am").style.backgroundImage="url('./img/am_ươt.jpg')";
    //thêm lớp mới
    document.getElementById("icon_da_lv2").classList.toggle('icon_vt_son');
    document.getElementById("icon_da_lv1").classList.toggle('icon_vt_son');
    document.getElementById("do_am").style.color="black";
} else{
    document.getElementById("do_am").style.backgroundImage="url('./img/am_ươt.jpg')";
    //thêm lớp mới
    document.getElementById("icon_da_lv3").classList.toggle('icon_vt_son');
    document.getElementById("icon_da_lv2").classList.toggle('icon_vt_son');
    document.getElementById("icon_da_lv1").classList.toggle('icon_vt_son');
    document.getElementById("do_am").style.color="black";
}
//khi_ga----------------------------------------------------------------------------------
data_kg=Math.floor((Math.random()*4500))
document.getElementById('kg').innerHTML =data_kg + '*';
document.getElementById("do_am").style.backgroundSize= "100% 100%";
if( data_kg < 400 ){
    //xóa lớp cũ
    document.getElementById("icon_kg_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv1").classList.remove('icon_vt_son'); 
    //nền   
    document.getElementById("khi_ga").style.background="linear-gradient(to bottom right,rgb(138, 252, 103),rgb(193, 245, 188))";
} else if( data_kg < 600 ){
    //xóa lớp cũ
    document.getElementById("icon_kg_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv1").classList.remove('icon_vt_son');
    //nền
    document.getElementById("khi_ga").style.background="linear-gradient(to bottom right,rgb(138, 252, 103),rgb(193, 245, 188))";
} else if( data_kg < 1000 ){
    //xóa lớp cũ
    document.getElementById("icon_kg_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv1").classList.remove('icon_vt_son');
    //nền
    document.getElementById("khi_ga").style.background="linear-gradient(to bottom right,lime,rgb(138, 252, 103))";
} else if( data_kg < 2000 ){
    document.getElementById("khi_ga").style.background="linear-gradient(to bottom right,green,lime)";
    //xóa lớp cũ
    document.getElementById("icon_kg_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv2").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv1").classList.remove('icon_vt_son');
} else if( data_kg < 3000 ){
    //xóa lớp cũ
    document.getElementById("icon_kg_lv3").classList.remove('icon_vt_son');
    document.getElementById("icon_kg_lv2").classList.remove('icon_vt_son');
    //nền
    document.getElementById("khi_ga").style.background="linear-gradient(to bottom right,#224422,green)";
    //thêm lớp mới
    document.getElementById("icon_kg_lv1").classList.toggle('icon_vt_son');
} else if( data_kg < 4000 ){
    document.getElementById("khi_ga").style.background="linear-gradient(to bottom right,#224422,green)";
    //xóa lớp cũ
    document.getElementById("icon_kg_lv3").classList.remove('icon_vt_son');
    //thêm lớp mới
    document.getElementById("icon_kg_lv2").classList.toggle('icon_vt_son');
    document.getElementById("icon_kg_lv1").classList.toggle('icon_vt_son');

} else{
    document.getElementById("khi_ga").style.background="linear-gradient(to bottom right,#224422,green)";
    //thêm lớp mới
    document.getElementById("icon_kg_lv3").classList.add('icon_vt_son');
    document.getElementById("icon_kg_lv2").classList.add('icon_vt_son');
    document.getElementById("icon_kg_lv1").classList.add('icon_vt_son');
}
}
// khối random thông số cảm biến---end------------------------------
//--khối đồ thị--------start--------------------------------------
Highcharts.chart('container_spline', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 20,
        backgroundColor: '#fff',

        events: {
            load: function () {
                // set up the updating of the chart each second
                var series_nd = this.series[0];
                var series_da = this.series[1];
                var series_kg = this.series[2];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y1 = data_nd
                        y2 = data_da
                        y3 = data_kg
                    series_nd.addPoint([x, y1], true, true),
                    series_da.addPoint([x, y2], true, true),
                    series_kg.addPoint([x, y3], true, true);

                }, T_graph);
            }
        }
    },
    //thời gian thực
    time: {
        useUTC: false
    },
    //tiêu đề
    title: {
        text: 'dữ liệu thu thập từ cảm biến',
        style: {
            color: '#000'
        }
    },
    subtitle: {
        text: 'dữ liệu được cập nhật sau mỗi'+ T_graph/1000 +'s'
    },
    tooltip: {
        style: {
            color: '#fff'
        }
    },
    colors: ['#e62f0f', '#09a6ee', '#20b612'],
    accessibility: {
        announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function (allSeries, newSeries, newPoint) {
                if (newPoint) {
                    return 'New point added. Value: ' + newPoint.y;
                }
                return false;
            }
        }
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 100

    },
    yAxis: {
        title: {
            text: 'data'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        },{
            value: 0,
            width: 1,
            color: '#808080'
        },{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    //
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
    //chú thích
    legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'bottom',
        borderWidth: 10
    },
    // xem full màn hình
    exporting: {
        enabled: true
    },
    series: [
    {
        name: 'nhiệt độ',
        data: (function () {
            // generate an array of random data
            var data_1 = [],time_1 = (new Date()).getTime(),i;
            for (i = -19; i <= 0; i += 1) {
                data_1.push({
                    x: time_1 + i * T_graph,
                    y: 0
                });
            }
            return data_1;
        }())
    },{
        name: 'độ ẩm,',
        data: (function () {
            // generate an array of random data
            var data_2 = [],time_2 = (new Date()).getTime(),i;
            for (i = -19; i <= 0; i += 1) {
                data_2.push({
                    x: time_2 + i * T_graph,
                    y: 0
                });
            }
            return data_2;
        }())
    },{
        name: 'Khí gas',
        data: (function () {
            // generate an array of random data
            var data_3 = [],time_3 = (new Date()).getTime(),i;
            for (i = -19; i <= 0; i += 1) {
                data_3.push({
                    x: time_3 + i * T_graph,
                    y: 0
                });
            }
            return data_3;
        }())
    }]
}); 
setInterval(loat_lai_tt,T_sensor);
//--khối đồ thị--------end--------------------------------------
//--Đồng hồ-----------------------start------------------------
 function getNow() {
    var now = new Date();

    return {
        hours: now.getHours() + now.getMinutes() / 60,
        minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
        seconds: now.getSeconds() * 12 / 60
    };
}
function pad(number, length) {
    // Create an array of the remaining length + 1 and join it with 0's
    return new Array((length || 2) + 1 - String(number).length).join(0) + number;
}
var now = getNow();
// Create the chart
Highcharts.chart('container_clock', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 10,
        plotShadow: false,
        height: '70%'
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    pane: {
        background: [{
            // default background
        }, {
            // reflex for supported browsers
            backgroundColor: Highcharts.svg ? {
                radialGradient: {
                    cx: 0.5,
                    cy: -0.4,
                    r: 1.9
                },
                stops: [
                    [0.5, 'rgba(255, 255, 255, 0.2)'],
                    [0.5, 'rgba(200, 200, 200, 0.2)']
                ]
            } : null
        }]
    },
    yAxis: {
        labels: {
            distance: -20
        },
        min: 0,
        max: 12,
        lineWidth: 1,//độ lớn vòng bo xung quanh đồng hồ
        showFirstLabel: false,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorGridLineWidth: 10,
        minorTickColor: '#000',

        tickInterval: 1,
        tickWidth: 3,
        tickPosition: 'inside',
        tickLength: 8,
        tickColor: '#666',
        title: {
            text: 'R time',
            style: {
                color: '#555',
                fontWeight: 'normal',
                fontSize: '8px',
                lineHeight: '10px'
            },
            y: 20
        }
    },

    tooltip: {
        formatter: function () {
            return this.series.chart.tooltipText;
        }
    },
    exporting: {
        enabled: false
    },
    series: [{
        data: [{
            id: 'hour',
            y: now.hours,
            dial: {
                radius: '50%',
                baseWidth: 4,
                baseLength: '95%',
                rearLength: 0
            }
        }, {
            id: 'minute',
            y: now.minutes,
            dial: {
                radius: '80%',
                baseLength: '95%',
                rearLength: 0
            }
        }, {
            id: 'second',
            y: now.seconds,
            dial: {
                radius: '120%',
                baseWidth: 1,
                rearLength: '20%'
            }
        }],
        animation: false,
        dataLabels: {
            enabled: false
        }
    }]
},

// Move
function (chart) {
    setInterval(function () {

        now = getNow();

        if (chart.axes) { // not destroyed
            var hour = chart.get('hour'),
                minute = chart.get('minute'),
                second = chart.get('second'),
                // run animation unless we're wrapping around from 59 to 0
                animation = now.seconds === 0 ?
                    false : {
                        easing: 'easeOutBounce'
                    };

            // Cache the tooltip text
            chart.tooltipText =
                    pad(Math.floor(now.hours), 2) + ':' +
                    pad(Math.floor(now.minutes * 5), 2) + ':' +
                    pad(now.seconds * 5, 2);


            hour.update(now.hours, true, animation);
            minute.update(now.minutes, true, animation);
            second.update(now.seconds, true, animation);
        }

    }, 1000);

});
Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};
//load lai trang web
function tai_lai_trang(){
    location.reload();
}
/*function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);}
        window.onload = timedRefresh(1000);
*/
//--khối back-top------------------------------------start------
//--khối back-top------------------------------------end--------