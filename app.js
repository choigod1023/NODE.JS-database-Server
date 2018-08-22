const express = require('express');
const bodyparser = require('body-parser');
const klunch = require('k-lunch')
const app =express();
const path = require('path')
const fs = require('fs');
const School = require('node-school-kr');
const school = new School();
school.init(school.eduType.high, school.region.seoul, 'B100000658')

app.use(bodyparser.urlencoded({
        extended:true
    })
)
app.use(bodyparser.json());

app.use('/',express.static(__dirname+'/public'));

app.get('/keyboard',(req,res) =>{
    const menu = {
        type : 'buttons',
        buttons: ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
    };
    res.send(menu);
});

app.post('/message',(req,res) => {
    let user_key=req.body.user_key
    let type=req.body.type
    let content=req.body.content
    let message;
    if(content=="프로필"){
        message = {
            "message":{
                "text":'선린인터넷고등학교 1학년 1반 22번 장준혁\n\n카톡아이디: choigod1023\n\n이메일: choigod10234@gmail.com\n\n자타공인 인생 졸라 재밌게 사는놈',
                "photo": {
                    "url":"http://ngdb.kr:6974/image/jjh.jpg",
                    "width":540,
                    "height":960
                }
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }
    if(content=="하는 게임"){
        message = {
            "message":{
                "text":"PC게임 : 배틀그라운드, 피파18, 피파온라인4, 풋볼 매니저 2017, 히어로즈 오브 더 스톰 \n 최고의운빨게임 : 하스스톤"
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }
    if(content=="사는이유"){
        message={
            "message":{
                "text":"1. 어짜피 태어난 인생 한번쯤은 놀자\n\n2.근데 노는데 여자친구는 안생기고\n\n3.근데 내가 원하는건 해야겠고\n\n4.그래서 선린고 입학했고\n\n5.그래서 나 왜살지?"
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        }
        res.send(message);
    }
    if(content=="인생목표"){
        message={
            "message":{
                "text":'1. JavaScript, Nodejs를 이용한 웹,서버 제작\n\n2. 여자친구 만들기(최대의 목표)\n\n3.일본으로 유학가기\n\n4.고등학교에서 최고의 친구들 만들기\n\n5.내신과 전공 둘다 챙기기(근데 이게 가능함?)\n\n6.개썅 마이웨이로 살기'
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        }
        res.send(message);
    }
    if(content=="친구 소개"){
        message={
            "message":{
                "text":"형냐들 언냐들 내친구가 그렇게 궁금했어?\n\n(대표적인 친구들만 적어둠)"
            },
            "keyboard":{
                "type":"buttons",
                "buttons":["박종훈","정태규","오원영"]
            }
        }
        res.send(message);
    }
    if(content=="박종훈"){
        message={
            "message":{
                "text":"명실상부한 선린인터넷고, 아니 대한민국 최고의 히오스 광팬, 그에게는 항상 히오스충이라는 수식어가 따라다닌다\n하지만 그는 히오스내에서는 벌레가 아닌 장인 그 자체이다\n\n 그의 명언 : \"히오스 갓겜\"",
                "photo":{
                    "url":"http://ngdb.kr:6974/image/pjh.jpg",
                    "width":528,
                    "height":960
                }
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필","하는 게임","사는이유","인생목표","친구 소개","기타(SNS)","박종훈의 페이스북"]
            }
        };
        res.send(message);
    }
    if(content=="박종훈의 페이스북"){
        message={
            "message":{
                "text":"시공의폭풍이 몰아칩니다, 혹시나 이글을 보고 시공의폭풍에 빨려들어간다면 제 책임은 아닙니다.",
                "message_button":{
                    "label":"PJH's Facebook",
                    "url":"https://www.facebook.com/profile.php?id=100006359646561"
                }
            },"keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }
    if(content=="정태규"){
        message={
            "message":{
                "text":"선린인터넷고 최고의 해킹동아리 Layer7의 18학번 멤버, 선린인터넷고등학교 장학생, 거주지는 분당, 항상 분당이라는 이유로 까인다",
                "photo":{
                    "url":"http://ngdb.kr:6974/image/jtg.jpg",
                    "width":960,
                    "height":720
                }
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필","하는 게임","사는이유","인생목표","친구 소개","기타(SNS)","정태규의 페이스북"]
            }
        };
        res.send(message);
    }
    if(content=="정태규의 페이스북"){
        message={
            "message":{
                "text":"그에게서 기본 프사의 느낌이 나지만 절대로 가계정은 아닙니다.",
                "message_button":{
                    "label":"JTG's Facebook",
                    "url":"https://www.facebook.com/profile.php?id=100010412239326"
                }
            },"keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }
    if(content=="오원영"){
        message={
            "message":{
                "text":"난처해질때면 \"ㅇ\"이나 \"니가 최고야\"를 시전하는 선린인터넷고 말빨장인.\n 대구에 내려가 쓴 숙박비가 23만원일 정도로 돈을 잘쓴다.",
                "photo":{
                    "url":"http://ngdb.kr:6974/image/510.jpg",
                    "width":960,
                    "height":720
                }
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필","하는 게임","사는이유","인생목표","친구 소개","기타(SNS)","오원영의 페이스북"]
            }
        };
        res.send(message);
    }
    if(content=="오원영의 페이스북"){
        message={
            "message":{
                "text":"그에겐 아싸의 냄새가 매우 심합니다. 오원영 인싸만들기 프로젝트를 계획하실 분들만 들어와주세요.",
                "message_button":{
                    "label":"510's Facebook",
                    "url":"https://www.facebook.com/profile.php?id=100006554115344"
                }
            },"keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }
    if(content=="기타(SNS)"){
        message={
            "message":{
                "text":"내가 그렇게 더 알고 싶었어?"
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["페이스북","인스타그램","이걸 보고있는 사람에 대한 생각","추가 건의사항 안내"]
            }
        };
        res.send(message);
    }

    if(content=="추가 건의사항 안내")
    {
        message={
            "message":{
                "text":"추가할 사항이나 건의, 버그에 대한 사항은 상담하기 버튼을 눌러 상담을 시도하세요"
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }

    if(content=="페이스북"){
        message={
            "message":{
                "text":"페이스북 누르셨네요\n\n가장 활발하면서 약간 이상한 얘기 하는곳",
                "message_button":{
                    "label":"Facebook",
                    "url":"https://www.facebook.com/profile.php?id=100006454011459"
                }
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }
    if(content=="인스타그램"){
        message={
            "message":{
                "text":"진짜 사진만 올리는데 보실래요?",
                "message_button":{
                    "label":"Instagram",
                    "url":"https://www.instagram.com/choigod1023/"
                }
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }
    if(content=="이걸 보고있는 사람에 대한 생각"){
        var text;
        message={
            "message":{
                "text":"일단 이걸 진짜 구경해주던 테스트 해주던 봐주시는 분들에게 정말 감사하다는 인사를 드리오며,\n\n저에게 관심을 가져주시는 점 감사드리오면서,\n\n앞으로 열심히 하도록 하겠습니다."
            },
            "keyboard":{
                "type": "buttons",
                "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
            }
        };
        res.send(message);
    }

    if (content == "중식") {
        let tmp = "";
        var asdf;

        let d = new Date();
        let dd = d.getDate()+1;
        let mm = d.getMonth()+1;
        const form = {
            year: d.getFullYear(),
            month: mm,
            day: dd,
            time: 2,
            name: '선린인터넷고등학교',
            phase: 4
        }
        const options = {
            autoCode: true,
            autoDomain: true
        }

        klunch.getLunch(form, (err, output) => {
            asdf = output;
            if(err)
            {
                tmp = "급식을 불러오는데 실패했습니다."
                console.log(err);
            }

            else{
                for(var i = 0; i<asdf.length;i++)
                    tmp+=asdf[i].menu+"\n";
            }
            message = {
                "message": {
                    "text": mm+"월"+dd+"일 중식\n"+ tmp
                },
                "keyboard": {
                    "type": "buttons",
                    "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
                }
            };
            res.send(message);
        }, options)
    }

    if (content == "석식") {
        let tmp = "";
        var asdf;

        let d = new Date();
        let dd = d.getDate()+1;
        let mm = d.getMonth()+1;
        const form = {
            year: d.getFullYear(),
            month: mm,
            day: dd+1,
            time: 3,
            name: '선린인터넷고등학교',
            phase: 4
        }
        const options = {
            autoCode: true,
            autoDomain: true
        }

        klunch.getLunch(form, (err, output) => {
            asdf = output;
            if(err)
            {
                tmp = "오늘은 석식이 없는데 나랑 같이 밥먹으쉴?"
                console.log(err);
            }

            else{
                for(var i = 0; i<asdf.length;i++)
                    tmp+=asdf[i].menu+"\n";
            }
            message = {
                "message": {
                    "text":mm+"월"+dd+"일 석식\n"+ tmp
                },
                "keyboard": {
                    "type": "buttons",
                    "buttons": ["프로필", "하는 게임", "사는이유", "인생목표", "친구 소개", "기타(SNS)", "중식","석식","오늘의 학사일정"]
                }
            };
            res.send(message);
        }, options)
    }
});
app.post('/friend',(req,res) => {
    const user_key=req.body.user_key;
    console.log(`${user_key}님이 채팅방에 참여하셨습니다.`);
    res.send({success:true});
});

app.delete('/friend',(req,res) =>{
    const user_key=req.body.user_key;
    console.log(`${user_key}님이 채팅방을 차단했습니다.`);
    res.send({success:true});
});

app.delete('/chat_room/:user_key',(req,res)=>{
    const user_key = req.params.user_key;
    console.log(`${user_key}님이 채팅방에서 나갔습니다`);
    res.send({success:true});
});

app.get('*',(req,res) => {
    res.status(404).end()
});

app.listen(6974,()=>{
    console.log('개새끼야 한번 들어가봐 몇번 포트게?');
});