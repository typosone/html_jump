"use strict";

/**
 * jump アクションするなにか
 */
window.addEventListener('DOMContentLoaded', function () {
    console.log("jump.js loaded!");
    // 定数値などを定義
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    // 各クラスの定義
    /**
     * プレイヤーキャラクター
     */
    class Player {
        /**
         * コンストラクタ。画像を指定してください
         * @param image 画像ファイルのパス
         */
        constructor(image) {
            this.pos = {'x': 0, 'y': 0};
            //TODO: image を読み込んで保存しておく
        }

        /**
         * 移動距離(移動先座標との差)を指定して移動します。
         * @param x
         * @param y
         */
        moveBy(x, y) {
            this.pos.x += x;
            this.pos.y += y;
        }

        /**
         * 描画処理をする
         * @param ctx CanvasRenderingContext2D
         */
        draw(ctx) {
            ctx.save();
            ctx.fillStyle = "#f00";
            ctx.fillRect(this.pos.x, this.pos.y, 20, 40);
            ctx.restore();
        }
    }

    // 必要なクラスのインスタンス生成
    let spriteList = [];


    let player = new Player("hoge");
    player.moveBy(100, 100);
    spriteList.push(player);

    // main loop
    let main_loop = function () {
        spriteList.forEach(function (sprite) {
            sprite.draw(ctx);
        }, this);

        window.setTimeout(main_loop, 1000 / 30);
    };
    window.setTimeout(main_loop, 1000 / 30);

});

