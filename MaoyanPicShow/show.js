{/* <ul class="alph_city">
<li>
    <span class="alph">A</span>
    <div class="clscitys">
        <a class="cityname current-city">阿拉善盟</a>
        <a class="cityname">鞍山</a>
        <a class="cityname">安庆</a>
    </div>
</li>
</ul> */}
$(function(){
    var citys = [
        {"A": ["阿拉善盟", "鞍山", "安庆", "安阳", "阿坝", "安顺", "安康", "阿勒泰", "阿克苏", "安吉", "安丘", "安岳", "安平", "安宁", "安溪", "安化", "阿勒泰市", "安福", "阿荣旗", "安陆市", "安州区"]},
        {"B": ["北京", "保定", "蚌埠", "包头", "本溪", "巴彦淖尔", "白城", "白山", "亳州", "滨州", "巴中", "北海", "百色", "毕节", "保山", "宝鸡", "白银", "巴州", "博尔塔拉", "滨海", "宝应", "北流", "博爱", "北碚", "宝丰", "泌阳", "博兴", "博山", "璧山", "彬县", "宾阳", "博白县", "博罗县", "北镇市", "泊头市", "北安市", "巴彦县"]},
        {"C": ["重庆", "成都", "长沙", "常州", "长春", "沧州", "承德", "赤峰", "长治", "朝阳", "池州", "巢湖", "滁州", "潮州", "郴州", "常德", "崇左", "楚雄"]},
        {"D": ["大连", "东莞", "大庆", "大同", "丹东", "大兴安岭", "东营", "德州", "德阳", "达州", "德宏", "大理", "迪庆", "定西", "敦煌", "丹阳", "东台", "大丰", "德清", "东阳", "当阳", "登封", "儋州", "东港", "东兴", "都江堰"]}
    ];
    $.each(citys, function(index, objs){
        $.each(objs, function(key, values){
            $span = $("<span class='alph'></span>");
            $div = $("<div class='clscitys'></div>");
            $span.text(key);
            $.each(values, function(index2, value){
                $a = $("<a class='cityname'></a>");
                $a.text(value);
                $div.append($a);
            });
            $li = $("<li></li>");
            $li.append($span);
            $li.append($div);   
            $(".alph_city").append($li);
        });
    });
});

{/* <ul class="content">
<li>
    <div class="comment-content">
        <span class="headportrait"><img src="https://b-ssl.duitang.com/uploads/item/201711/01/20171101181056_YuSQj.jpeg" /></span>
        <div class="comment-details">
            <span class="nickname">codemeow</span>
            <span class="date">11-22</span>                                
            <div class="approve">
                <span class="num">10</span>
                <a href="http:///www.baidu.com"><span class="approve-icon"></span></a>
            </div>
            <span class="content">道明老师是业界标杆，德艺双馨的艺术家.道明老师是业界标杆，德艺双馨的艺术家,道明老师是业界标杆，德艺双馨的艺术家.</span>
        </div>
    </div>
</li>
</ul> */}
$(function(){
    var comments = [
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201711/01/20171101181056_YuSQj.jpeg", "nickname": "codemeow", "date": "11-22", "approvenum": "1", "content": "趁夏日热浪还未袭来,先跟着三毛的脚步穿行撒哈拉沙漠,逛一逛传统风情的露天市场，住一次阿拉伯风情的帐篷酒店"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160220_dW2ut.jpeg", "nickname": "codemeow", "date": "1-6", "approvenum": "10", "content": "人生的第一件大事是发现自己，因此人们需要不时孤独和沉思。人生的第一件大事是发现自己，因此人们需要不时孤独和沉思。人生的第一件大事是发现自己，因此人们需要不时孤独和沉思。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160031_xB3nH.jpeg", "nickname": "cyanlime", "date": "3-7", "approvenum": "100", "content": "法国，这个“欧洲浪漫中心”，在7月，用一场绚烂的色彩迷住了我们眼普罗旺斯的薰衣草在风中摇曳生姿，呼吸间入眼处，都是那迷人的姿态,美得不可方物。趁夏日热浪还未袭来,先跟着三毛的脚步穿行撒哈拉沙漠,逛一逛传统风情的露天市场，住一次阿拉伯风情的帐篷酒店,"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118155410_nWPCV.jpeg", "nickname": "amy", "date": "6-18", "approvenum": "20", "content": "摩洛哥常年气候宜人，花木繁茂，素有'烈日下的清凉国土'和'北非花园'的美称。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201509/23/20150923150229_SyjBL.jpeg", "nickname": "branda", "date": "12-2", "approvenum": "10", "content": "如果只能选一个国外旅游地，那唯美的斯里兰卡是不二之选。这个有着“微笑之国”之称的国家,以浓郁的宗教文化和殖民历史让人深深着迷。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160154_PReHV.jpeg", "nickname": "brenda", "date": "11-30", "approvenum": "16", "content": "去锡兰，观殖民遗址的历史去狮子岩，看真实的空中宫殿去科伦坡，看现代与历史碰撞去佛牙寺，虔诚而纯净地感受牙舍利的神圣"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201711/01/20171101181056_YuSQj.jpeg", "nickname": "Jane", "date": "10-22", "approvenum": "13", "content": "泰国是个天生的旅游国度，有着强烈的民族风格特色。“佛教之邦”、“大象之国”的称誉和丰富的文化让它成为了东南亚国家中的热门旅游地。西班牙的海岛风光和文化底蕴也是迷人的风景线。去海岸边逛逛热带风光，或者去看看西班牙的教堂、公园惬意又自在，尽情感受西班牙的风情万种。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118155854_acY5Q.jpeg", "nickname": "codewang", "date": "11-22", "approvenum": "10", "content": "广博的佛教文化，独有的民间风俗，迷人的热带风光，性价比高的购物，令人垂涎三尺的美食，……新年伊始，去泰国感受异国风情！"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160220_dW2ut.jpeg", "nickname": "codemeow", "date": "4-22", "approvenum": "21", "content": "作为“南太平洋上的一颗珍珠”，斐济有太多的惊喜值得流连忘返。这里是“全球十大蜜月旅游胜地之一”，也是全球五大潜水基地、软珊瑚之都，拥有世界上第二大不断延伸的珊瑚礁。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118155740_xehWw.jpeg", "nickname": "cyanlime", "date": "5-22", "approvenum": "24", "content": "帕劳以海底景观闻名，是世界七大海底奇观之首。热带岛国独有的风情和韵味在这里散发着无与伦比的魅力。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160907_LPGCF.jpeg", "nickname": "lily", "date": "6-22", "approvenum": "30", "content": "趁夏日热浪还未袭来,先跟着三毛的脚步穿行撒哈拉沙漠,逛一逛传统风情的露天市场，住一次阿拉伯风情的帐篷酒店"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/23/20151123162409_sdi48.jpeg", "nickname": "limei", "date": "7-22", "approvenum": "20", "content": "去牛奶湖、水母湖、大断层、珊瑚区潜水，与游鱼、珊瑚、水母亲密接触，去感受纯净而美好的水下世界。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160154_PReHV.jpeg", "nickname": "Mike", "date": "6-4", "approvenum": "19", "content": "还有迷人的海域、丰富的国家公园……都在这里有着与众不同的韵味。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/23/20151123162409_sdi48.jpeg", "nickname": "maria", "date": "9-22", "approvenum": "14", "content": "日本的樱花盛世，已是诸多游客每年必赴的一场宴会。富士山上、北海道旁，如云似霞的樱花让整个日本都染上了粉色。"},
        {"imgurl": "https://b-ssl.duitang.com/uploads/item/201511/12/20151112115257_RwmaQ.jpeg", "nickname": "codemeow", "date": "10-22", "approvenum": "12", "content": "除了樱花，日本的文化韵味也是十分浓厚的。著名的日本三道：茶道、花道、书道,以及日漫、日剧、美食等都在世界闻名现代都市的繁华与古朴怀旧的文化，都在这里交织融合，充满日式风情。"},
    ];
    $.each(comments, function(index, obj){
        $li = $("<li></li>");
        $divCommentcontent = $("<div class='comment-content'></div>");
            $spanHeadportrait = $("<span class='headportrait'></span>");
            $spanHeadportraitImg = $("<img />");
            $spanHeadportraitImg.attr("src", obj.imgurl);
            $spanHeadportraitImg.appendTo($spanHeadportrait);
            $divCommentdetails = $("<div class='comment-details'></div>");
                $spanNickname = $("<span class='nickname'></span>");
                $spanNickname.text(obj.nickname);
                $spanDate = $("<span class='date'></span>");
                $spanDate.text(obj.date);
                $divApprove = $("<div class='approve'></div>");
                    $spanNum = $("<span class='num'></span>");
                    $spanNum.text(obj.approvenum);
                    $a = $("<a></a>");
                    $a.attr("href", "http://www.baidu.com");
                        $spanApproveicon = $("<span class='approve-icon'></span>");
                        $spanApproveicon.appendTo($a);
                    $spanNum.appendTo($divApprove);
                    $a.appendTo($divApprove);
                $spanContent = $("<span class='content'></span>");
                $spanContent.text(obj.content);
                $spanNickname.appendTo($divCommentdetails);
                $spanDate.appendTo($divCommentdetails);
                $divApprove.appendTo($divCommentdetails);
                $spanContent.appendTo($divCommentdetails);
            $spanHeadportrait.appendTo($divCommentcontent);
            $divCommentdetails.appendTo($divCommentcontent);
        $divCommentcontent.appendTo($li);
        $li.appendTo($("ul.content"));
    });
    var commentCounts = comments.length;
    $(".comment-count").text(commentCounts);    
});


$(function(){
    var pictureUrls = [
        "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160154_PReHV.jpeg","https://b-ssl.duitang.com/uploads/item/201511/18/20151118155410_nWPCV.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/23/20151123162409_sdi48.jpeg","https://b-ssl.duitang.com/uploads/item/201509/23/20150923150229_SyjBL.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160154_PReHV.jpeg","https://b-ssl.duitang.com/uploads/item/201711/01/20171101181056_YuSQj.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/12/20151112115257_RwmaQ.jpeg","https://b-ssl.duitang.com/uploads/item/201511/18/20151118155410_nWPCV.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/23/20151123162409_sdi48.jpeg","https://b-ssl.duitang.com/uploads/item/201511/18/20151118160220_dW2ut.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/18/20151118155854_acY5Q.jpeg","https://b-ssl.duitang.com/uploads/item/201511/18/20151118160100_GtRmY.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160220_dW2ut.jpeg","https://b-ssl.duitang.com/uploads/item/201511/18/20151118155854_acY5Q.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160100_GtRmY.jpeg","https://b-ssl.duitang.com/uploads/item/201511/23/20151123162409_sdi48.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160004_3FmNH.jpeg","https://b-ssl.duitang.com/uploads/item/201509/23/20150923150229_SyjBL.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/18/20151118160907_LPGCF.jpeg","https://b-ssl.duitang.com/uploads/item/201711/01/20171101181056_YuSQj.jpeg",
        "https://b-ssl.duitang.com/uploads/item/201511/12/20151112115257_RwmaQ.jpeg","https://b-ssl.duitang.com/uploads/item/201511/18/20151118155854_acY5Q.jpeg"
    ];
    $.each(pictureUrls, function(index, value){
        $img = $("<img />");
        if (index==0){
            $img.addClass("is-current");
        }
        $img.attr("src", value);
        $img.appendTo($(".pictures"));
    });
    var nums = pictureUrls.length;
    var awidth = $(".pictures img").outerWidth();
    var width = nums * awidth;
    $(".pictures").css("width", width + "px");
    $(".counter-container-total").text(nums);
});


function selectElement(selectedElement){
    var currentElement = $(".pictures img.is-current");
    currentElement.removeClass('is-current');
    selectedElement.addClass('is-current');
    $('.current-picture img').attr('src', selectedElement.attr('src'));
}
function currentpic(){
    var currentPic = $(".pictures img.is-current").index()+1;
    $(".counter-container-current").text(currentPic);
}
function fillContent(){
    var describes = ["2001年，凭借在《康熙王朝》中的演技获得了“美菱杯”观众最喜爱的男演员评选银奖和第二届阳光健康电视明星。同时获得第20届中国电视金鹰奖最佳男演员提名。", "去泰国，跨个异国味的年","去帕劳，享受慵懒海风", 
        "去日本，赴一场盛大的花宴.除了樱花，日本的文化韵味也是十分浓厚的。日本的樱花盛世，已是诸多游客每年必赴的一场宴会。富士山上、北海道旁，如云似霞的樱花让整个日本都染上了粉色。著名的日本三道：茶道、花道、书道，以及日漫、日剧、美食等都在世界闻名现代都市的繁华与古朴怀旧的文化，都在这里交织融合，充满日式风情。去牛奶湖、水母湖、大断层、珊瑚区潜水，与游鱼、珊瑚、水母亲密接触，去感受纯净而美好的水下世界.趁夏日热浪还未袭来，先跟着三毛的脚步穿行撒哈拉沙漠，逛一逛传统风情的露天市场，住一次阿拉伯风情的帐篷酒店",
        "去摩洛哥，感受沙漠风情.摩洛哥常年气候宜人，花木繁茂，素有“烈日下的清凉国土”和“北非花园”的美称。", "去斐济，在热带岛屿游个泳.被180度经度贯穿而过的斐济，是世界上最东也是最西的国度，也是最早看到日出，最晚看到日落的地方", 
        "去法国，在薰衣草花海中许愿.法国，这个“欧洲浪漫中心.在7月，用一场绚烂的色彩迷住了我们眼普罗旺斯的薰衣草在风中摇曳生姿，呼吸间入眼处，都是那迷人的姿态,美得不可方物。当然，法国旅游大国的名头可不只有薰衣草，单单是风情万种的巴黎就包含了凡尔赛宫、埃菲尔铁塔、塞纳河等地标景点↓去戛纳、马赛看看“蔚蓝海岸”的迷人风光，去美酒飘香的波尔多喝一杯醇香的美酒,法国的风情在大街小巷中凸显地淋漓尽致。", 
        "去肯尼亚，看震撼的动物大迁徙.只有踏上过肯尼亚辽阔的大地，才能真正了解到它的野性与万种风情.辽阔、巨大、色调丰富的“风景调色板让肯尼亚成为一个视觉上令人震撼的国度。每年七、八月自然界的恢宏巨制动物大迁徙准时上演从大象到瞪羚，从狮子到金钱豹都接纳了这场一年一度的角马大迁途。", "去西班牙，跳一支欢快的弗拉明戈", "加拿大作为闻名世界的枫之国，枫叶红了的时候就是最好的季节！那一抹颜色，那么耀眼，那么绚烂。",
        "去不丹，感受禅意佛境.西班牙的海岛风光和文化底蕴也是迷人的风景线。去海岸边逛逛热带风光，或者去看看西班牙的教堂、公园。惬意又自在，尽情感受西班牙的风情万种。秋季的不丹，各类节庆为它增添了不少烟火气，清朗的天气，亦是徒步的好时候。", "去芬兰，看极光邂逅圣诞老人", "芬兰的冬天是迷人的", "这个圣诞老人的故乡", "有着神秘的极光和浪漫的艺术细胞", 
        "神秘的不丹", "自古以来就是佛教的国度", "庄严的宗堡、旋转的经轮", "晨钟暮鼓，是那么的神圣。", "此外，加拿大的魅力还在这：去魁北克，接触最具欧洲的风情,去蒙特利尔,领略深厚的文化底蕴,去温哥华,看看浩瀚海洋和美丽山峦,去多伦多,感受'北方好莱坞'的万般美景"]
    var picIndex =  $(".pictures img.is-current").index();
    var content = describes[picIndex];
    $(".desc-content").text(content);
}
function alterends(){
    var currentElement = $(".pictures img.is-current");
    if (currentElement.prev().length == 0){
        $(".switch-left.hover").removeClass("hover");
        $(".switch-left").css("opacity", "0.4");
    }
    else if (currentElement.next().length == 0){
        $(".switch-right.hover").removeClass("hover");    
        $(".switch-right").css("opacity", "0.4");
    }
    else {
        $(".switch-left").addClass("hover");
        $(".switch-right").addClass("hover");
        $(".switch-left").css("opacity", "1");
        $(".switch-right").css("opacity", "1");
    }
}


$(function(){
    $(".selected_city").hover(function(){
        $(".display_city").css({"border-color": "#ddd", "border-top-color":"#fff"});
        $(".city_list").css("display", "block");
        $(".spread").css("transform", "rotate(180deg)");
    }, function(){
        $(".display_city").css("border-color", "#fff");
        $(".city_list").hide();
        $(".spread").css("transform", "rotate(0deg)");
    });
    $(".cityname").click(function(){
        $(".cityname").removeClass("current-city");
        $(this).addClass("current-city");
        $(".city").text($(this).text());
        $(".city_list").hide();
    });
});

$(function(){
    selectElement($(".pictures img.is-current"));
    alterends();
    fillContent();
    currentpic();
});
$(function(){
    alterends();
    $(".pictures img").click(function(){
        selectElement($(this));
        alterends();
        fillContent();
        currentpic();       
    });
});
$(document).ready(function(){
    var min_middle_index = parseInt($(".scroll-picture").width() / $(".pictures img").outerWidth() / 2);
    var max_middle_index = $(".pictures img").length - min_middle_index;
    var balance = $(".scroll-picture").width() - parseInt($(".scroll-picture").width() / $(".pictures img").outerWidth()) * $(".pictures img").outerWidth();
    $('.switch-right').click(function(){
        var currentElement = $(".pictures img.is-current");
        if (currentElement.next().length != 0){
            if (currentElement.next().next().length==0){
                $(".switch-right.hover").removeClass("hover");
                $(".switch-right").css("opacity", "0.4");           
            }
            selectElement(currentElement.next());
            fillContent();
            currentpic();
            $(".switch-left").css("opacity", "1");               
            if ($(".pictures img.is-current").index()+1 < max_middle_index && $(".pictures img.is-current").index() > min_middle_index){
                var picsOffset = $(".scroll-picture").offset().left - $(".pictures img").outerWidth() * ($(".pictures img.is-current").index() - min_middle_index) + balance/2;
            }
            if ($(".pictures img.is-current").index()+1 >= max_middle_index){
                var picsOffset = $(".scroll-picture").width()-$(".pictures").width()+$(".scroll-picture").offset().left;     
            }
            if ($(".pictures img.is-current").index() <= min_middle_index){
                var picsOffset = $(".scroll-picture").offset().left;
            }
            $(".pictures").offset({
                left: picsOffset
            });
        }
        else {
            $(".switch-right.hover").removeClass("hover");
            $(".switch-right").css("opacity", "0.4");
        }
    });
    $('.switch-left').click(function(){
        var currentElement = $(".pictures img.is-current");
        if (currentElement.prev().length != 0){
            if (currentElement.prev().prev().length==0){
                $(".switch-left.hover").removeClass("hover");              
                $(".switch-left").css("opacity", "0.4");                        
            }
            $(".switch-right").css("opacity", "1");
            selectElement(currentElement.prev());
            fillContent();
            currentpic();
            $(".switch-right").css("opacity", "1");                        
            if ($(".pictures img.is-current").index()+1 < max_middle_index && $(".pictures img.is-current").index() > min_middle_index){
                var picsOffset = $(".scroll-picture").offset().left - $(".pictures img").outerWidth() * ($(".pictures img.is-current").index() - min_middle_index) + balance/2;
            }
            if ($(".pictures img.is-current").index()+1 >= max_middle_index){
                var picsOffset = $(".scroll-picture").width()-$(".pictures").width()+$(".scroll-picture").offset().left;
            }
            if ($(".pictures img.is-current").index() <= min_middle_index){
                var picsOffset = $(".scroll-picture").offset().left;
            }
            $(".pictures").offset({
                left: picsOffset
            });
        }
        else {
            $(".switch-left.hover").removeClass("hover");
            $(".switch-left").css("opacity", "0.4");
        }
    });
});


$(function(){
    // document.body.addEventListener('touchmove', function(e){
    //     e.preventDefault();
    // });
    var _move = false;
    var _x, _y;
    $(document).mousedown(function(e){
        _move = true;
        _x = e.pageX;
        return false;
    });
    $(document).mousemove(function(e){
        if (_move){
            var chang_x = e.pageX - _x;
            chang_x *= 100;
            x = chang_x + $(".pictures").offset().left;
            _x = e.pageX;
            var min_left = -$(".pictures").width() + $(".scroll-picture").width() + $(".scroll-picture").offset().left;
            var max_left = $(".scroll-picture").offset().left;
            if (x < min_left){
                x = min_left;
            }
            if (x > 0) {
                x = max_left;
            }
            $(".pictures").offset({
                left: x
            });
            return false;
        }
    });
    $(document).mouseup(function(){
        _move = false;
    });
});


$(function(){
    var timer = null;
    function showFlag(){
        if(timer != null){
            clearTimeout(timer);
            timer = null;
        }
        alterends();
        $('.switch-left').show();
        $('.switch-right').show();
        // $('.switch-left').fadeIn(100, 1);
        // $('.switch-right').fadeIn(100, 1);
        timer = setTimeout(function(){
            $('.switch-left').fadeOut(500, 0);
            $('.switch-right').fadeOut(500, 0);
            timer = null;
        }, 4000);
    }
    function refreshShowFlagTimer(){
        if(timer != null){
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function(){
            $('.switch-left').fadeOut(500, 0);
            $('.switch-right').fadeOut(500, 0);
            timer = null;
        }, 4000);
    }
    $('.current-picture').mousemove(showFlag);
    $('.switch-left').click(refreshShowFlagTimer);
    $('.switch-right').click(refreshShowFlagTimer);
    $(".pictures img").click(refreshShowFlagTimer);
});