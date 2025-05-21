import './index.less'

declare const TCPlayer: any;
declare const window: any;

window.player1 = TCPlayer('lthg_video', {});
window.player1.src($("#lthg_video").attr("value"));