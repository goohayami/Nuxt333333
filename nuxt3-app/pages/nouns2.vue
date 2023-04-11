<template>
  <div>
    <hr />
    <h1><span>Nouns2</span> 名詞 1871-</h1>
  </div>
  <div class="question">{{ question_list[0][0] }}</div>
  <input v-model="inputText" class="input_text" type="text" />

  <div class="answer"></div>
</template>

<script setup>
import { ref, watch } from "vue";
const inputText = ref("");
watch(inputText, () => {
  const newDiv = document.querySelector(".answer");

  if (inputText.value == question_list.value[0][1]) {
    // 正解した時の処理
    // 要素を生成、テキストに正解を入れる
    const a = document.createElement("div");
    a.textContent = question_list.value[0][1];
    // 問題から一問削除
    // 生成した要素をnewDivの先頭に追加
    question_list.value.splice(0, 1);
    newDiv.prepend(a);
    // テキストボックスを空に
    inputText.value = "";
  } else if (inputText.value == "pass") {
    // passした時の処理
    const a = document.createElement("div");
    a.textContent = question_list.value[0][1];
    // テキストカラーを赤くする
    a.style.color = "red";

    question_list.value.splice(0, 1);
    newDiv.prepend(a);
    inputText.value = "";
  }
});
const question_list = ref([
  ["作業中につき暫くお待ちください", "clarify"],
  ["粉々に砕く", "smash"],
  ["悲しむ", "mourn"],
  ["粉々にする", "shatter"],
  ["呼ぶ", "summon"],
  ["残る", "linger"],
  ["嘆く", "lament"],
  ["喜ぶ", "rejoice"],
  ["配分する", "allocate"],
  ["ピシャリと打つ", "slap"],
  ["主張する。 ____that", "contend"],
  ["誓う", "swear"],
  ["識別する", "discern"],
  ["悪化させる", "degrade"],
  ["築く", "erect"],
  ["証言する", "testify"],
  ["駆り立てる", "spur"],
  ["才能に恵まれる。be ____ with", "endowed"],
  ["歩き回る", "roam"],
  ["眉をひそめる。___ on smoking", "frown"],
  ["呼び込む", "lure"],
  ["逆らう", "defy"],
  ["ぶらつく", "stroll"],
  ["がたがた鳴らす", "rattle"],
  ["調和させる", "reconcile"],
  ["ぼやかす", "blur"],
  ["なだめる", "soothe"],
  ["低下させる", "impair"],
  ["従う。 ___ with", "comply"],
  ["穴をあける", "pierce"],
  ["つまづく", "stumble"],
  ["妨げる", "hinder"],
  ["嘲る", "mock"],
  ["具現する（表現する）", "embody"],
  ["忍び寄る", "stalk"],
  ["宣言する", "proclaim"],
  ["拍手する", "applaud"],
  ["与える。___ pain on", "inflict"],
  ["合併する。___ with", "marge"],
  ["避難した", "evacuated"],
  ["元に戻らない", "undone"],
  ["突く", "poke"],
  ["つきまとわれる", "haunted"],
  ["固く守る。____ to", "adhere"],
  ["まとめる", "compile"],
  ["しぼむ", "wither"],
  ["びっくりさせる", "stun"],
  ["のどがつまる", "choke"],
  ["悪化する", "deteriorate"],
  ["捨てる", "dump"],
  ["つぶやく", "murmur"],
  ["削除する", "delete"],
  ["阻害する", "inhibit"],
  ["そらす。____ attention from", "divert"],
  ["飼いならす", "tame"],
  ["手に入れる", "reap"],
  ["断言する", "affirm"],
  ["浸る。be _____ in", "immersed"],
  ["期限が切れる", "expire"],
  ["乗り出す。 ____ on", "embark"],
  ["誓う。 ___ to fight.", "vow"],
  ["予知する", "foresee"],
  ["崇拝する", "adore"],
  ["切望する。___ for", "yearn"],
  ["弱める", "undermine"],
  ["吸う", "suck"],
  ["誓う。____ to support them.", "pledge"],
  ["立ち入る。____ on", "intrude"],
  ["訴える", "sue"],
  ["歪曲する", "distort"],
  ["消す", "extinguish"],
  ["説教する", "preach"],
  ["抑制する", "curb"],
  ["耐える", "withstand"],
  ["ひたす", "dip"],
  ["暗唱する", "recite"],
  ["押し込む", "thrust"],
  ["嘆願する。____ with", "plead"],
  ["恥をかかせる", "humiliate"],
  ["放出する", "discharge"],
  ["非難する", "condemn"],
  ["検索する", "retrieve"],
  ["すくめる", "shrug"],
  ["呼び起こす", "evoke"],
  ["取ってくる", "fetch"],
  ["おせじを言う", "flatter"],
  ["CLEAR!", "******"],
]);
</script>

<style scoped>
.question {
  font-size: 2rem;
}

span {
  color: rgb(41, 123, 155);
}

.input_text {
  font-size: 3rem;
}

.red {
  font-size: 3rem;
  color: red;
}
</style>
