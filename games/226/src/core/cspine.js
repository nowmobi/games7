CSpine = function(atlaskey, x, y, exclude, spinekey){ 
    Phaser.Group.call(this, game);

    this.atlaskey = atlaskey;
    this.spinekey = spinekey || atlaskey+"_anim";
    this.exclude = exclude;

    this.x = x;
    this.y = y;


    var atlas = game.cache.getJSON(this.atlaskey);
    if (!atlas) return null;

    var anim = game.cache.getJSON(this.spinekey);
    if (!anim) return null;


    this.init();

    game.add.existing(this);
    return this;
};


CSpine.inherit({
    isPaused: true,
    isLoop: true,
    _loopCount:0,

    getAnimData: function() {
        var anim = game.cache.getJSON(this.spinekey);
        return anim;
    },
    getAtlasData: function() {
        if (!this._dataAnim) {
            this._dataAnim = game.cache.getJSON(this.atlaskey);
        }
        return this._dataAnim;
    },

    init: function() {
        this._time = 0;
        this._animSpeed = 0.5;
        this._animations = {};
        this._prevFrame = 0;
        this._currentFrame = 0;
        this.currentAnim = "idle";
        this.onClick = new Phaser.Signal();
        this.onComplete = new Phaser.Signal();
        this.onLoop = new Phaser.Signal();
        this.onEnterFrame = new Phaser.Signal();
        this._costume = 1;

        var data = this.getAnimData();


        // generate bones
        var bones = data.bones;
        this.bones = [];
        for (var i = 1; i < bones.length; i++) {
            var b = bones[i];
            // trace(b.name, b.parent, b.length, b.x, b.y,b.rotation);
            var g = game.add.group();
            if (b.parent) {
                if (this.bones[b.parent])  {
                    // trace("parent bones");
                    this.bones[b.parent].add(g);
                }
                else
                    this.add(g);
            }

            if (b.x) g.x = b.x;
            if (b.y) g.y = b.y * -1;
            if (b.rotation) g.angle = b.rotation*-1;
            if (b.scaleX) g.scale.x = b.scaleX;
            if (b.scaleY) g.scale.y = b.scaleY;


            g._x = g.x;
            g._y = g.y;
            g._a = g.angle;
            g._sx = g.scale.x;
            g._sy = g.scale.y;
            g._data = b;
            // show bones 
            // var border = game.make.image(0,0,"bone");
            // border.width = b.length;
            // g.add(border);


            this.bones[b.name] = g;
        }


        // generate slots
        var slots = data.slots;
        this.slots = [];
        for (var i =0; i< slots.length; i++) {
            var s = slots[i];
            // trace (s.name, s.bone, s.attachment);
            if (s.name == this.exclude) continue;

            var img = game.make.image(0,0,this.atlaskey,this.atlaskey+"/"+s.attachment);
            img.anchor.setTo(0.5);
            img.inputEnabled = true;
            img.events.onInputDown.add(this.dispatchClickEvent, this);


            var bone = this.bones[s.bone];
            bone.add(img);

            this.slots[s.name] = img;
            this.slots[s.name].bone = bone;
        }


        this.resetDrawOrder();

        this.setSkin();


        // initialize animation data
        for (var a in data.animations) {
            var dt = data.animations[a];
            // trace("check animation data;", a);
            var o = {};
            o.maxTime = 0;
            o.name = a;

            for (var i in dt) {
                // trace("--check animation data;", i);
                for (var j in dt[i]) {
                    // trace("----check animation data;", j);
                    for (var k in dt[i][j]) {
                        // trace("------check animation data;", k);
                        var temp = dt[i][j][k];
                        for (var l =0; l<temp.length; l++) {
                            if (temp[l].time) {
                                o.maxTime = Math.max(o.maxTime, temp[l].time);
                            }
                        }
                    }
                }
            }


            this._animations[a] = o;
        }
        
    },

    resetDrawOrder: function(offsets) {
        // trace("RESET DRAW ORDER");
        var data = this.getAnimData();
        var slots = data.slots.slice(0); // copy the original data
        

        if (offsets) {
            // trace("-- before:", JSON.stringify(slots));
            // for(var i = 0; i< slots.length; i++){
            //     trace("before--", JSON.stringify(slots[i]));
            // }

            // for (var i = 0; i< offsets.length; i++) {
            //     var dt = offsets[i];
            //     var slotname = dt.slot;
            //     var offset = dt.offset;

            //     var idx = -1;
            //     for (var j=0; j<slots.length; j++) {
            //         if (slots[j].name == slotname) {
            //             idx = j;
            //             break;
            //         }
            //     }

            //     if (idx > -1) {
            //         var removed = slots.splice(idx, 1);

            //         idx += offset;
            //         if (idx < 0) idx = 0;
            //         if (idx > slots.length-1) idx = slots.length-1;

            //         slots.splice(idx, 0, removed);
            //     }

            // }

            var initArrIdx = [];
            var arrIdx = [];
            for (var i = 0; i< offsets.length; i++) {
                var dt = offsets[i];
                var slotname = dt.slot;
                var offset = dt.offset;

                var idx = -1;
                for (var j=0; j<slots.length; j++) {
                    if (slots[j].name == slotname) {
                        idx = j;
                        break;
                    }
                }

                if (idx > -1) {
                    initArrIdx.push(idx);

                    idx += offset;
                    if (idx < 0) idx = 0;
                    if (idx > slots.length-1) idx = slots.length-1;

                    arrIdx.push(idx);
                }
            }

            // trace(arrIdx);

            var temp, temp1;
            for (var i = 0; i < arrIdx.length; i++) {
                for (var j = 0; j < arrIdx.length-1; j++) {
                    if(arrIdx[j] < arrIdx[j+1]){
                        temp = arrIdx[j];
                        arrIdx[j] = arrIdx[j+1];
                        arrIdx[j+1] = temp;

                        temp1 = initArrIdx[j];
                        initArrIdx[j] = initArrIdx[j+1];
                        initArrIdx[j+1] = temp1;
                    }
                }
            }

            // trace("after", initArrIdx);
            // trace("after", arrIdx);

            var newSlot = [];
            newSlot.length = slots.length;
            for (var j = 0; j < arrIdx.length; j++) {
                newSlot[arrIdx[j]] = slots[initArrIdx[j]];
                slots[initArrIdx[j]] = null;
            }

            for (var i = 0; i < slots.length; i++) {
                if(slots[i]){
                    for (var j = 0; j < newSlot.length; j++) {
                        if(newSlot[j] == null){
                            newSlot[j] = slots[i];
                            break;
                        }
                    }
                }
            }

            slots = newSlot;

            // trace("-- after:", JSON.stringify(slots));
            // for(var i = 0; i< slots.length; i++){
            //     trace("after--", JSON.stringify(slots[i]));
            // }

            // for(var i = 0; i< newSlot.length; i++){
            //     trace("new--", JSON.stringify(newSlot[i]));
            // }

        }

        var uniqueSlot = [];
        for (var i = 0; i < slots.length; i++) {
            var s = slots[i];
            // trace(JSON.stringify(s));
            
            var found = 0;
            var top = true;
            for(var u = 0; u < uniqueSlot.length; u++){
                if(s["bone"]){
                    if(uniqueSlot[u].bone == s.bone){
                        found++;
                        top = true;
                    }
                }
                else{
                    if(uniqueSlot[u].bone == s[0].bone){
                        found++;
                        top = false;
                    }
                }
            }

            if(found == 0 && top){
                uniqueSlot.push(s);
            }

            else if(found == 0 && !top){
                uniqueSlot.push(s[0]);
            }
        }

        // trace("unique", JSON.stringify(uniqueSlot));

        slots = uniqueSlot;

        // trace("-- after:", JSON.stringify(slots));

        for (var i =0; i< slots.length; i++) {
            var s = slots[i];
            if (s.name == this.exclude) continue;
            var bone = this.bones[s.bone];
            var p = bone.parent;
            if (p) {
                p.removeChild(bone);
                p.add(bone);
            }
        }
    },

    setSkin: function(skinName) {
        skinName = skinName || "default";
        var data = this.getAnimData();
        var skin = data.skins[skinName];
        // trace(JSON.stringify(skin));
        // trace(data);

        for (var s in skin) {
            // trace(s);
            var o = skin[s][s];
            // trace("SKIN", s, o.x, o.y, o.rotation, o.width, o.height);
            if (s == this.exclude) continue;

            var slot = this.slots[s];
            if (o.x ) slot.x = o.x;
            if (o.y) slot.y = o.y * -1;
            if (o.width) {
                slot.width = o.width;
                // slot.border.width = o.width;
            }
            if (o.height) {
                slot.height = o.height;
                // slot.border.height = o.height;
            }
            if (o.rotation) slot.angle = o.rotation * -1;

            slot.frameName = this.atlaskey+"/"+s;
        }
    },

    changeAttachment: function(slotName, attachment) {
        var data = this.getAnimData();
        var slot = this.slots[slotName];
        var skin = data.skins.default[slotName][attachment];

        if (skin === null || skin === undefined) {
            // trace("ERROR Changing Attachment: SKIN NOT FOUND, ", slotName, attachment);
            return false;
        }

        if (slot === null || slot === undefined) {
            // trace("ERROR Changing Attachment: SLOT NOT FOUND, ", slotName, attachment);
            return false;
        }


        if (skin.x ) slot.x = skin.x;
        if (skin.y) slot.y = skin.y * -1;
        if (skin.width) {
            slot.width = skin.width;
            // slot.border.width = o.width;
        }
        if (skin.height) {
            slot.height = skin.height;
            // slot.border.height = o.height;
        }
        if (skin.rotation) slot.angle = skin.rotation * -1;

        slot.frameName = this.atlaskey+"/"+attachment;
    },

    changeSprite: function(slotName, name) {
        var slot = this.slots[slotName];
        if (!slot) {
            // trace("changeAttachmentSprite", "SLOT NOT FOUND", slotName);
            return false;
        }

        slot.frameName = this.atlaskey + "/"  + name;
    },

    pad: function(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length-size);
    },

    changeCostume:function(idCostume){
        idCostume = idCostume || this._costume;
        this.changeSprite('left_hand_1', 'left_hand_' + idCostume);
        this.changeSprite('left_foot_1', 'left_foot_' + idCostume);
        this.changeSprite('ekor_1', 'ekor_1' + idCostume);
        this.changeSprite('body_1', 'body_' + idCostume);
        this.changeSprite('head_1', 'head_' + idCostume);
        this.changeSprite('right_foot_1', 'right_foot_' + idCostume);
        this.changeSprite('right_hand_1', 'right_hand_' + idCostume);
        // this.changeSprite('head1b', 'head' + idCostume + 'b_kids');
        this._costume = idCostume;
    },

    dispatchClickEvent: function() {
        this.onClick.dispatch(this);
    },

    dispatchCompleteEvent: function() {
        this.onComplete.dispatch(this);
    },

    dispatchLoopEvent: function() {
        this.onLoop.dispatch(this);
    },
    dispatchEnterEvent: function() {
        this.onEnterFrame.dispatch(this);
    },

    // onClick: function() {
    //     // alert("clicked");
    //     if (this.currentAnim == "idle")
    //         this.changeAnim("sembur");
    //     else if (this.currentAnim == "sembur")
    //         this.changeAnim("leave");
    //     else if (this.currentAnim == "leave")
    //         this.changeAnim("special_sembur");
    //     else 
    //         this.changeAnim("idle");
    // },

    changeAnim: function(anim) {
        // trace("CHANGE ANIM");
        if (anim != this.currentAnim) {
            // this.setSkin();
            if(this.atlaskey == 'chara_anim'){
                this.changeCostume();
            }
            
            this.currentAnim = anim;
            this._time = 0;
            this._loopCount = 0;
            this._prevFrame = -1;
            this._currentFrame = 0;
        }
    },

    play: function(anim, loop)  {
        if (typeof loop == 'undefined' || null === loop) loop = true;
        this.isLoop = loop
        this.isPaused = false;
        this.changeAnim(anim);
    },

    pause: function() {
        this.isPaused = true;
    },

    resume: function() {
        this.isPaused = false;
    },

    update: function() {
        if (this.isPaused) return;

        this._time += game.time.physicsElapsedMS * 0.001  / this._animSpeed;

        var data = this.getAnimData();
        if (!data.animations[this.currentAnim]) {
            // trace("ERROR: Animation ", this.currentAnim, "NOT FOUND");
            return;
        }


        

        // var totalTime = anims.root.rotate[anims.root.rotate.length-1].time;
        var totalTime = this._animations[this.currentAnim].maxTime;
        var t;
        // if (totalTime % 1 === 0)
        //     // t = (this._time * 1000 % totalTime * 1000) * 0.001;
        // else
        //     t = (this._time % totalTime);
        t = this.mod(this._time, totalTime);

        if (this._time > totalTime) {
            this._loopCount ++;
            this._time -= totalTime;
            this.dispatchLoopEvent();
            if (!this.isLoop && this._loopCount > 0) {
                this.isPaused = true;
                this.dispatchCompleteEvent();
            }
        }

        this._currentFrame = Math.round(t * 10);
        if (this._currentFrame != this._prevFrame) {
            this.dispatchEnterEvent();
        }
        this._prevFrame = this._currentFrame;

        // trace("CURRENT FRAME: ",this._currentFrame, this._loopCount);
        // trace("SPINE", this.key, game.time.physicsElapsedMS, this._time, t, totalTime );

        var anims = data.animations[this.currentAnim].bones;

        for (var b in anims) {
            var bone = this.bones[b];
            if (!bone) continue;

            // if (bone._data.name != "bone3") continue;

            var dt = anims[b];

            var o = dt.rotate;
            if (o) {
                var res = this.linearRotation(t, o, "angle", bone._a);
                bone.angle = res;
                // trace(bone._data.name, bone._a, -res, bone._a-res);
                // bone.angle = bone._a - res;
            }
            // continue;
            var o = dt.translate;
            if (o) {
                var res = this.linearTranslate(t, o, "x");
                bone.x = bone._x + res;

                var res = this.linear(t, o, "y");
                bone.y = bone._y - res;
            }

            var o = dt.scale;
            if (o) {
                var res = this.linearScale(t, o, "x");
                bone.scale.x = res;

                var res = this.linear(t, o, "y");
                bone.scale.y = res;
            }

            var o = dt.flipX;
            if (o) {
                var res = this.linearFlipX(t, o, "x");
                bone.scale.y = res;
            }

        }


        var anims = data.animations[this.currentAnim].slots;
        for (var s in anims) {
            var slot = this.slots[s];
            if (!slot) continue;

            var dt = anims[s];

            var o = dt.attachment;
            if (o) {
                var res = this.linearAttachment(t, o, "name");
                // trace("CHECK SLOT ",t, 0, s);
                this.changeAttachment(s, res);
            }
        }


        var anims = data.animations[this.currentAnim].drawOrder;
        if (anims) {
            var res = this.linearDrawOrder(t, anims, "offsets");
            this.resetDrawOrder(res);
            // trace("test");
        }
        else {
            this.resetDrawOrder();
        }
    },

    mod: function(a, b) {
        // mod a by b
        a = Math.round(a * 1000);
        b = Math.round(b * 1000);

        var d = Math.floor(a / b);
        return (a - b * d) / 1000;
    },

    linear: function(time, data, attr) {
        var idx = -1;
        for (var i = 0; i < data.length-1; i++) {
            if (time >= data[i].time) {
                idx = i;
            }
            else break;
        }

        if (idx == -1) return data[0][attr];
        var d = time-data[idx].time;
        var dt = (data[idx+1].time - data[idx].time);
        var da = data[idx+1][attr] - data[idx][attr];

        var value = data[idx][attr] + d * da / dt;
        // trace("LINEAR", attr, idx, value, time);
        return value;
    },

    linearDrawOrder: function(time, data, attr) {
        if (time > data[data.length-1].time) {
            // trace("off", data.length);
            return data[data.length-1][attr];
        }

        var idx = -1;
        for (var i = 0; i < data.length-1; i++) {
            if (time >= data[i].time) {
                idx = i;
            }
            else break;
        }

        // if (idx == -1){ trace("off", 1); return data[0][attr];}
        
        // trace("off", idx+1);
        return data[idx][attr];
    },

    linearAttachment: function(time, data, attr) {
        if (time > data[data.length-1].time) {
            return data[data.length-1][attr];
        }

        var idx = -1;
        for (var i = 0; i < data.length-1; i++) {
            if (time >= data[i].time) {
                idx = i;
            }
            else break;
        }

        if (idx == -1) return data[0][attr];
       
        return data[idx][attr];
    },

    linearTranslate: function(time, data, attr) {
        if (time > data[data.length-1].time) {
            return 0;
        }

        var idx = -1;
        for (var i = 0; i < data.length-1; i++) {
            if (time >= data[i].time) {
                idx = i;
            }
            else break;
        }

        if (idx == -1) return 0;
        var d = time-data[idx].time;
        var dt = (data[idx+1].time - data[idx].time);
        var da = data[idx+1][attr] - data[idx][attr];

        var value = data[idx][attr] + d * da / dt;
        // trace("LINEAR", attr, idx, value, time);
        return value;
    },

    linearScale: function(time, data, attr) {
        if (time > data[data.length-1].time) {
            return data[data.length-1][attr];
        }
        
        var idx = -1;
        for (var i = 0; i < data.length-1; i++) {
            if (time >= data[i].time) {
                idx = i;
            }
            else break;
        }

        if (idx == -1) return data[0][attr];
        var d = time-data[idx].time;
        var dt = (data[idx+1].time - data[idx].time);
        var da = data[idx+1][attr] - data[idx][attr];

        var value = data[idx][attr] + d * da / dt;
        // trace("LINEAR", attr, idx, value, time);
        return value;
    },

    linearFlipX: function(time, data, attr) {
        if (time > data[data.length-1].time) {
            // trace("tes1", data[data.length-1][attr]);
            // return data[data.length-1][attr];
            return data[0][attr];
        }

        var idx = -1;
        for (var i = 0; i < data.length-1; i++) {
            if (time >= data[i].time) {
                idx = i;
            }
            else break;
        }

        if (idx == -1) return data[0][attr];
        
        if(data[idx][attr]){
            return -1;
        } else{
            return 1;
        }
        // trace("tes2", data[idx][attr]);
        // return data[idx][attr];
        // return -1;
    },


    linearRotation: function(time, data, attr, baseRotation) {
        var br = baseRotation * -1; // change the rotation back to the way spine do.

        if (time > data[data.length-1].time) {
            return data[data.length-1][attr];
        }
        var idx = -1;
        for (var i = 0; i < data.length-1; i++) {
            if (time >= data[i].time) {
                idx = i;
            }
            else break;
        }

        if (idx == -1) return data[0][attr];
        var d = time-data[idx].time;
        var dt = (data[idx+1].time - data[idx].time);

        var da1 = br + data[idx+1][attr];
        var da0 = br + data[idx][attr];
        var da = this.getShortAngle(da0, da1);

        var value = da0 + d * da / dt;
        // trace("LINEAR ROTATION", attr, idx, value, time, data[idx+1][attr], data[idx][attr], da1, da0);
        return value * -1;
    },

    normalizeAngle: function (a) {
        // while (a > 360) a -=360;
        // while (a < -360) a += 360;
        // if (a > 180) a -= 360;
        // if (a < -180) a += 360;
        return a;
    },

    getShortAngle: function(a1, a2){
        var difference = a2 - a1;
        while (difference < -180) difference += 360;
        while (difference > 180) difference -= 360;
        return difference;
    },

}, Phaser.Group);