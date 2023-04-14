<template>
  <div class="main">
    <div>
      <hr />
      <h1><span>Nouns2</span> 名詞 1871-1941</h1>
    </div>

    <div class="question">
      {{ question_list[0][0] }}
      <p>正解数　{{ correct_count }}/{{ question_count }}</p>
    </div>
    <input v-model="inputText" class="input_text" type="text" />

    <div class="answer"></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const inputText = ref("");
const question_list = ref([
  ["塾 __ school", "cram"],
  ["補助金", "subsidy"],
  ["共感 ____ for", "empathy"],
  ["俗語", "slang"],
  ["姿勢", "posture"],
  ["イデオロギー", "ideology"],
  ["災いのもと", "curse"],
  ["腫瘍 have a brain ____", "tumor"],
  ["交差点 at the ____", "intersection"],
  ["森林破壊", "deforestation"],
  ["期間", "duration"],
  ["用心", "precaution"],
  ["ひとたば", "bunch"],
  ["欠点", "shortcoming"],
  ["熱望", "aspiration"],
  ["精神科医", "psychiatrist"],
  ["発送", "shipping"],
  ["上院議員（最初は大文字）", "Senator"],
  ["政治家", "statesman"],
  ["部下", "subordinate"],
  ["空白", "vacum"],
  ["探求 ___ for", "quest"],
  ["瞑想", "meditation"],
  ["加入者", "subscriber"],
  ["謎", "riddle"],
  ["ぼろ __s", "rag"],
  ["さび", "rust"],
  ["衛生", "sanitation"],
  ["まっただ中 in the ___ of", "midst"],
  ["いたずら", "mischief"],
  ["検定", "proficiency"],
  ["記憶", "recollection"],
  ["北緯 north ___", "latitude"],
  ["摩擦", "friction"],
  ["植物学者（最初は大文字）", "Botanist"],
  ["遺伝", "heredity"],
  ["軽蔑 ___ for", "contempt"],
  ["構造", "anatomy"],
  ["誠実", "integrity"],
  ["貨物船 _ship", "cargo"],
  ["わいろ take a ____", "bribe"],
  ["噴火", "eruption"],
  ["葬式", "funeral"],
  ["赤字", "deficit"],
  ["大部分 the ___ of", "bulk"],
  ["百万長者", "millionaire"],
  ["灰", "ash"],
  ["領域", "realm"],
  ["農園", "plantaion"],
  ["すき", "plow"],
  ["販売 ____ machine", "vending"],
  ["孤児", "orphan"],
  ["ニューロン", "neuron"],
  ["植生", "vegetation"],
  ["戦士", "warrior"],
  ["突然変異", "mutation"],
  ["下水", "sewage"],
  ["理論的枠組み", "paradigm"],
  ["議定書（最初は大文字）", "Protoco"],
  ["超高層ビル", "skyscraper"],
  ["一致 in ____ with", "accord"],
  ["官僚", "bureaucrat"],
  ["多彩 a vast ____ of", "array"],
  ["衝突", "clash"],
  ["拷問", "torture"],
  ["統治", "reign"],
  ["論文", "thesis"],
  ["4桁 a four- _____", "digit"],
  ["課題", "agenda"],
  ["発症", "onset"],
  ["小作農", "peasant"],
  ["CLEAR!", "******"],
]);

const len = question_list.value.length;
const num = question_list.value.length;
let correct_count = 0;
let question_count = 0;

watch(inputText, () => {
  const newDiv = document.querySelector(".answer");

  if (inputText.value == question_list.value[0][1]) {
    const a = document.createElement("div");
    const br = document.createElement("br");
    const btn = document.createElement("button");

    const pronounce = () => {
      let word = btn.textContent;
      let u = new SpeechSynthesisUtterance();
      u.lang = "en-US";
      u.text = word;
      speechSynthesis.speak(u);
    };
    btn.textContent = question_list.value[0][1];
    question_list.value.splice(0, 1);
    newDiv.prepend(br);
    newDiv.prepend(btn);

    btn.style.fontSize = "2rem";
  
    btn.style.backgroundColor = "skyblue";
    btn.style.borderRadius = "4%";

    btn.addEventListener("click", () => {
      pronounce();
    });
    // テキストボックスを空に
    inputText.value = "";
    // カウントアップ
    correct_count++;
    question_count++;
  } else if (inputText.value == "pass") {
    const a = document.createElement("div");
    const btn = document.createElement("button");
    const br = document.createElement("br");

    btn.classList.add("btn");
    const pronounce = () => {
      let word = btn.textContent;
      let u = new SpeechSynthesisUtterance();
      u.lang = "en-US";
      u.text = word;
      speechSynthesis.speak(u);
    };

    btn.textContent = question_list.value[0][1];

    // buttonカラーを赤くする
    btn.style.color = "white";
    btn.style.fontSize = "2rem";
  
    btn.style.backgroundColor = "tomato";
    btn.style.borderRadius = "4%";

    question_list.value.splice(0, 1);
    newDiv.prepend(br);
    newDiv.prepend(btn);

    btn.addEventListener("click", () => {
      pronounce();
    });
    inputText.value = "";
    question_count++;
  }
});
</script>

<style scoped>
.main {
  margin-left: 1.2rem;
}
.question {
  font-size: 2rem;
  margin-top: 0;
  display: flex;
}
h1 {
  margin-bottom: 0;
}
p {
  font-size: 1rem;
  margin-bottom: 0;
  margin-left: 1rem;
}
.answer {
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

.bar {
  height: 10px;
  width: 100%;
  background-color: tomato;
}
</style>
