import './index.scss'

declare const TCPlayer: any;

var player = TCPlayer('lthg_video', {});
player.src($("#lthg_video").attr("value"));