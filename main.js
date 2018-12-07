enchant();

window.onload = function(){
    var core = new Core(1400,1400);
    core.preload('tail.png','back_hair.png','right_leg.png','left_leg.png');
    core.preload('right_hand.png','left_hand.png','body.png','face.png');
    core.preload('neck.png','right_wing.png','left_wing.png','bangs.png');
    core.preload('right_hair.png','left_hair.png','waku.png')
    core.preload('eye.png','eyes.png','zimen.png');
    core.fps = 100;
    core.onload = function(){
        
        var eee=1;
        var time=0;
        var iii=1;
        var face1 = 1;
        var gra = 1;//重力加速度
        
        //枠の初期設定
        var waku = new Sprite(1250,1250);
        waku.image = core.assets['waku.png'];
        waku.x = 100;
        waku.y = 100;
        core.rootScene.addChild(waku);

        //尻尾の初期設定
        var tail = new Sprite(350,250);
        tail.image = core.assets['tail.png'];
        tail.x = 217+350;
        tail.y = 699+10;
        core.rootScene.addChild(tail);
        
        //後ろ髪の初期設定
        var back_hair = new Sprite(400,300);
        back_hair.image = core.assets['back_hair.png'];
        back_hair.x = tail.x-60;
        back_hair.y = tail.y-405;
        core.rootScene.addChild(back_hair);
        
        //右脚の初期設定
        var right_leg = new Sprite(200,926);
        var syosoku = 0;
        var spead=0;
        var ggg = 0;
        right_leg.image = core.assets['right_leg.png'];
        right_leg.x = tail.x-13;
        right_leg.y = tail.y-316;
        core.rootScene.addChild(right_leg);
        
        //左脚の初期設定
        var left_leg = new Sprite(200,918);
        left_leg.image = core.assets['left_leg.png'];
        left_leg.x = tail.x+89;
        left_leg.y = tail.y-308;
        core.rootScene.addChild(left_leg);
        
        //右腕の初期設定
        var right_hand = new Sprite(300,740);
        right_hand.image = core.assets['right_hand.png'];
        right_hand.x = tail.x-80;
        right_hand.y = tail.y-483;
        core.rootScene.addChild(right_hand);
        
        //左腕の初期設定
        var left_hand = new Sprite(300,740);
        left_hand.image = core.assets['left_hand.png'];
        left_hand.x = tail.x+50;
        left_hand.y = tail.y-483;
        core.rootScene.addChild(left_hand);
        
        //身体の初期設定
        var body = new Sprite(400,400);
        body.image = core.assets['body.png'];
        body.x = tail.x-61;
        body.y = tail.y-174;
        core.rootScene.addChild(body);
        
        //眼の初期設定
        var eye = new Sprite(130,60);
        eye.image = core.assets['eye.png'];
        eye.x = tail.x+68;
        eye.y = tail.y-275;
        core.rootScene.addChild(eye);
        
        //顔の初期設定
        var face = new Sprite(225,225);
        face.image = core.assets['face.png'];
        face.x = tail.x+20;
        face.y = tail.y-341;
        face.frame = 3;
        core.rootScene.addChild(face);
        
        //首の初期設定
        var neck = new Sprite(250,150);
        neck.image = core.assets['neck.png'];
        neck.x = tail.x+3;
        neck.y = tail.y-199;
        core.rootScene.addChild(neck);
        
        //右羽の初期設定
        var right_wing = new Sprite(360,360);
        right_wing.image = core.assets['right_wing.png'];
        right_wing.x = tail.x-103;
        right_wing.y = tail.y-585;
        core.rootScene.addChild(right_wing);
        
        //左羽の初期設定
        var left_wing = new Sprite(360,360);
        left_wing.image = core.assets['left_wing.png'];
        left_wing.x = tail.x+17;
        left_wing.y = tail.y-579;
        core.rootScene.addChild(left_wing);
        
        //前髪の初期設定
        var bangs = new Sprite(263,165);
        bangs.image = core.assets['bangs.png'];
        bangs.x = tail.x-2;
        bangs.y = tail.y-431;
        core.rootScene.addChild(bangs);
        
        //右もみ上げの初期設定
        var right_hair = new Sprite(266,914);
        right_hair.image = core.assets['right_hair.png'];
        right_hair.x = tail.x-51;
        right_hair.y = tail.y-880;
        core.rootScene.addChild(right_hair);
        
        //左もみ上げ髪の初期設定
        var left_hair = new Sprite(216,932);
        left_hair.image = core.assets['left_hair.png'];
        left_hair.x = tail.x+80;
        left_hair.y = tail.y-886;
        core.rootScene.addChild(left_hair);
        
        //バックベアードの初期設定
        var eyes = new Sprite(173,129);
        eyes.image = core.assets['eyes.png'];
        eyes.x = 0;
        eyes.y = 5000;
        core.rootScene.addChild(eyes);
        
        var zimen1 = new Sprite(1200,200);
        zimen1.image = core.assets['zimen.png'];
        zimen1.x = tail.x-467;
        zimen1.y = 5000;
        zimen1.frame = 0;
        core.rootScene.addChild(zimen1);
        
        function idou(name){
            if (core.input.down){
                name.y+=10;
                right_wing.rotation=time*0.4;
                left_wing.rotation=-time*0.4;
            };
            if (core.input.up){
                name.y-=10;
                right_wing.rotation=time*0.4;
                left_wing.rotation=-time*0.4;
            };
            if (core.input.left){
                name.x-=10;
                right_leg.rotation=-time*0.8;
                left_leg.rotation=time*0.8;
                right_hand.rotation=-time*0.1;
                left_hand.rotation=time*0.1;
            };
            if (core.input.right){
                name.x+=10;
                right_leg.rotation=-time*0.8;
                left_leg.rotation=time*0.8;
                right_hand.rotation=-time*0.1;
                left_hand.rotation=time*0.1;
            };
        };
        
        right_leg.addEventListener('enterframe',function(){
                              if(time>30){
                              iii*=-1;
                              };
                              if(time<-30){
                              iii*=-1;
                              };
                              time+=1*iii;
                              ggg+=0.1;
                              right_wing.rotation=time*0.1;
                              left_wing.rotation=-time*0.1;
                              right_hair.rotation=(time+30)*0.015;
                              left_hair.rotation=-(time+30)*0.015;
                              right_leg.rotation=0;
                              left_leg.rotation=0;
                              right_hand.rotation=(time+30)*0.015;
                              left_hand.rotation=-(time+30)*0.015;
                              face.y += time*0.015;
                              eye.y += time*0.015;
                              right_wing.y += time*0.015;
                              left_wing.y += time*0.015;
                              right_hair.y += time*0.015;
                              left_hair.y += time*0.015;
                              bangs.y += time*0.015;
                              back_hair.y += time*0.015;
                              back_hair.rotation =-(time+15)*0.05;
                              body.y += time*0.008;
                              left_hand.y += time*0.008;
                              right_hand.y += time*0.008;
                              neck.y += time*0.015;
                              tail.y += time*0.015;
                                   eye.x = tail.x+68;
                                   eye.y = tail.y-275;
                                   if(face1 % 3 == 0){
                                   eyes.rotation=time;
                                   eyes.y -= spead;
                                   };
                              spead = syosoku-gra*ggg;
                              idou(eye);
                              idou(back_hair);
                              idou(tail);
                              idou(bangs);
                              idou(left_hand);
                              idou(right_hand);
                              idou(left_leg);
                              idou(left_wing);
                              idou(right_wing);
                              idou(body);
                              idou(neck);
                              idou(face);
                              idou(right_leg);
                              idou(zimen1);
                              idou(right_hair);
                              idou(left_hair);
                              if(face1 % 3 == 0){
                                   eye.x=eyes.x;
                                   eye.y=eyes.y;
                              };
                                   if(face1 % 3 == 2){
                                   eye.x=eyes.x;
                                   eye.y=eyes.y;
                                   };
                              if(eye.x>face.x+64){
                              eye.x=face.x+64;
                              };
                              if(eye.x<face.x+32){
                              eye.x=face.x+32;
                              };
                              if(eye.y>face.y+90){
                              eye.y=face.y+90;
                              };
                              if(eye.y<face.y+50){
                              eye.y=face.y+50;
                              };
                              });
        
        
        zimen1.addEventListener('enterframe',function(){
                                if(zimen1.intersect(eyes)){
                                if(eyes.y > zimen1.y-129){
                                if(eyes.y < zimen1.y+50-129){
                                ggg = 0;
                                syosoku = -spead*0.3;//反射係数
                                spead = 0;
                                eyes.y = zimen1.y-129;
                                };
                                };
                                if(eyes.y < zimen1.y+200){
                                if(eyes.y > zimen1.y-50+200){
                                ggg = 0;
                                syosoku = -spead*0.3;//反射係数
                                spead = 0;
                                eyes.y = zimen1.y+200;
                                };
                                };
                                if(eyes.x > zimen1.x-173){
                                if(eyes.x < zimen1.x+50-173){
                                eyes.x = zimen1.x-173;
                                };
                                };
                                if(eyes.x < zimen1.x+1200){
                                if(eyes.x > zimen1.x-50+1200){
                                eyes.x = zimen1.x+1200;
                                };
                                };
                                };
                                });//地面1
        
        core.rootScene.on('touchstart',function(e){
                          eee+=1;
                          face1+=1;
                          face.frame=face1;
                          spead=0;
                          syosoku=0;
                          ggg=0;
                          if(face1 % 3 == 1){
                          eyes.y=5000;
                          zimen1.y=5000;
                          waku.y=100;
                          };
                          if(face1 % 3 == 2){
                          eyes.x=e.x;
                          eyes.y=e.y;
                          zimen1.y = right_leg.y+926;
                          waku.y = 5000;
                          };
                          });
        
    };
    core.start();
};
