importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ�����̵�5��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 4){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�100���������㴥��#v4000006#.50��#v4000034#�����ң��һ��͸���һ��#v4031250#��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.����֮��-�ֿ����Ա-������!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000006,100) && cm.haveItem(4000034,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000006, -100);
                cm.gainItem(4000034, -50);
                cm.gainItem(4031250, 1);
cm.gainExp(+200000);
cm.gainMeso(+400000);
                cm.sendOk("���̵�5�����!��ϲ��ý��=400000.����=200000.һ��#v4031250#\r\n\r\nȻ����ȥ��..����֮��-�ֿ����Ա-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�100���������㴥��#v4000006#.50��#v4000034#.������!");
                cm.dispose();
            }
        }
    }
}