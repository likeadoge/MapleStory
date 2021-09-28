/* global cm */

var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t  #e#d欢迎来到#b" + cm.ms() + "#e#d\r\n\t注意事项：系统记录外挂请不要报着侥幸心理开。\r\n\r\n"

            if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getdjjl() == 0) {
                text += "#L1##r" + 完成红 + "等级达到20级！" + 完成 + "金币x500000 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getdjjl() > 0) {
                text += "" + 完成红 + "#r等级达到20级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到20级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() == 1) {
                text += "#L2##r" + 完成红 + "等级达到30级！" + 完成 + "#v1122019#x1 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() > 1) {
                text += "" + 完成红 + "#r等级达到30级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到30级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getdjjl() == 2) {
                text += "#L3##r" + 完成红 + "等级达到50级！" + 完成 + "#v1112435#x1 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getdjjl() > 2) {
                text += "" + 完成红 + "#r等级达到50级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到50级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() == 3) {
                text += "#L4##r" + 完成红 + "等级达到70级！" + 完成 + "#v4170005#x10 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() > 3) {
                text += "" + 完成红 + "#r等级达到70级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到70级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() == 4) {
                text += "#L5##r" + 完成红 + "等级达到100级！" + 完成 + "#v5150040#x2 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() > 4) {
                text += "" + 完成红 + "#r等级达到100级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到100级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getdjjl() == 5) {
                text += "#L6##r" + 完成红 + "等级达到120级！" + 完成 + "#v2049100#x2 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getdjjl() > 5) {
                text += "" + 完成红 + "#r等级达到120级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到120级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() == 6) {
                text += "#L7##r" + 完成红 + "等级达到150级！" + 完成 + "点卷x20000 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() > 6) {
                text += "" + 完成红 + "#r等级达到150级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到150级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() == 7) {
                text += "#L8##r" + 完成红 + "等级达到170级！" + 完成 + "点卷x30000 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() > 7) {
                text += "" + 完成红 + "#r等级达到170级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到170级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() == 8) {
                text += "#L9##r" + 完成红 + "等级达到180级！" + 完成 + "#v2049100#x10 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() > 8) {
                text += "" + 完成红 + "#r等级达到180级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到180级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() == 9) {
                text += "#L10##r" + 完成红 + "等级达到190级！" + 完成 + "#v5150040#x10 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() > 9) {
                text += "" + 完成红 + "#r等级达到190级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到190级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() == 10) {
                text += "#L11##r" + 完成红 + "等级达到199级！" + 完成 + "#v3010070#x1 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() > 10) {
                text += "" + 完成红 + "#r等级达到199级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到199级！#l" + 正在进行中 + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() == 11) {
                text += "#L12##r" + 完成红 + "等级达到200级！" + 完成 + "点卷x100000点 限时：1天#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() > 11) {
                text += "" + 完成红 + "#r等级达到200级！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r等级达到200级！#l" + 正在进行中 + "\r\n"
            }
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.gainMeso(1000000);//喇叭
            cm.setdjjl(1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到20级，领取了100万金币的等级奖励");
            cm.dispose();
        } else if (selection == 2) {
            cm.gainItem(1122019, 1);//
            cm.setdjjl(2);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到30级，领取了冒险之心吊坠一个（可以进阶哦）");
            cm.dispose();
        } else if (selection == 3) {
            cm.gainItem(1112435, 1);//
            cm.setdjjl(3);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到50级，领取了一代不速之客戒指一枚(可以进阶哦)");
            cm.dispose();
        } else if (selection == 4) {
            cm.gainItem(4170005, 10);//
            cm.setdjjl(4);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到70级，领取了飞天猪的蛋x10个");
            cm.dispose();
        } else if (selection == 5) {
            cm.gainItem(5150040, 2);//
            cm.setdjjl(5);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到100级，领取了皇家理发卷x2个");
            cm.dispose();
        } else if (selection == 6) {
            cm.gainItem(2049100, 2);//
            cm.setdjjl(6);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到120级，领取了混沌卷轴x2个");
            cm.dispose();
        } else if (selection == 7) {
            cm.gainNX(20000);
            cm.setdjjl(7);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到150级，领取了点卷x20000点哦~！");
            cm.dispose();
        } else if (selection == 8) {
            cm.gainNX(30000);
            cm.setdjjl(8);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到170级，领取了点卷x30000点哦~！");
            cm.dispose();
        } else if (selection == 9) {
            cm.gainItem(2049100,10);
            cm.setdjjl(9);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到180级，领取了混沌卷轴x10张！");
            cm.dispose();
        } else if (selection == 10) {
            cm.gainItem(5150040,10);
            cm.setdjjl(10);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到190级，领取了皇家理发卷x10张！");
            cm.dispose();
        } else if (selection == 11) {
            cm.gainItem(3010070,1);
            cm.setdjjl(11);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到199级，领取了巨无霸品克缤椅子x1个！");
            cm.dispose();
        } else if (selection == 12) {
            cm.gainNX(100000);
            cm.setdjjl(12);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到200级，领取了点卷10万点！");
            cm.dispose();
            
        }
    }
}


