<template>
  <div class="main">
    <div>
      <hr />
      <h1><span>Nouns1</span> 名詞 1787-1870</h1>
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
  ["散文", "prose"],
  ["織物", "textile"],
  ["材木", "timber"],
  ["傑作", "masterpiece"],
  ["暴動", "riot"],
  ["車両", "carriage"],
  ["装置", "apparatus"],
  ["大騒ぎする。make a ___ about", "fuss"],
  ["欠乏", "deficiency"],
  ["相続人。The ___ to fortune", "heir"],
  ["赤道 at the ____", "equator"],
  ["石油", "petroleum"],
  ["魔女", "witch"],
  ["蒸気", "vapor"],
  ["探査機", "probe"],
  ["専門知識 ______ in", "expertise"],
  ["軽蔑", "scorn"],
  ["預言者", "prophet"],
  ["そよ風", "breeze"],
  ["罪", "sin"],
  ["急増", "surge"],
  ["補うもの", "complement"],
  ["列", "queue"],
  ["賭け金", "stake"],
  ["大使", "ambassador"],
  ["陪審員", "jury"],
  ["集団 ____ of", "cluster"],
  ["こぶ", "lump"],
  ["牧草地", "meadow"],
  ["偉業", "feat"],
  ["気質", "temperament"],
  ["寒気", "chill"],
  ["器具", "appliance"],
  ["前任", "predecessor"],
  ["存在", "entity"],
  ["もてなし", "hospitality"],
  ["話", "narrative"],
  ["部分", "segment"],
  ["大災害", "catastrophe"],
  ["君主", "monarch"],
  ["制約", "constraint"],
  ["改正", "amendment"],
  ["宇宙", "cosmos"],
  ["通路 walk down the ___", "aisle"],
  ["階級制度", "hierarchy"],
  ["通行料", "toll"],
  ["取引", "transaction"],
  ["強盗", "burglar"],
  ["圧政", "tyranny"],
  ["寄生生物", "parasite"],
  ["直観", "intuition"],
  ["共産主義の", "communist"],
  ["遺産", "legacy"],
  ["静脈", "vein"],
  ["論説", "discourse"],
  ["乳製品 ____ products", "dairy"],
  ["工芸品", "artifact"],
  ["はけ口", "outlet"],
  ["不安", "apprehension"],
  ["憂鬱", "melancholy"],
  ["目新しさ", "novelty"],
  ["標本", "specimen"],
  ["衛生", "hygiene"],
  ["戦術", "tactics"],
  ["独占", "monopoly"],
  ["印", "token"],
  ["貴族階級", "aristocracy"],
  ["復讐", "revenge"],
  ["活動家", "activist"],
  ["美辞麗句", "rhetoric"],
  ["起業家", "entrepreneur"],
  ["国勢調査", "census"],
  ["瀬戸際 on the ____ of", "verge"],
  ["出現 ____ of", "advent"],
  ["類似点", "analogy"],
  ["灌漑", "irrigation"],
  ["報道", "coverage"],
  ["料理", "cuisine"],
  ["脅威", "menace"],
  ["危険", "peril"],
  ["手足", "limb"],
  ["攻撃 ____ on", "assault"],
  ["憎しみ", "hatred"],
  ["自主性", "autonomy"],
  ["CLEAR!", "******"],
]);

const len = question_list.value.length;
const num = question_list.value.length;
let correct_count = 0;
let question_count = 0;

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
    // カウントアップ
    correct_count++;
    question_count++;
  } else if (inputText.value == "pass") {
    // passした時の処理
    const a = document.createElement("div");
    a.textContent = question_list.value[0][1];
    // テキストカラーを赤くする
    a.style.color = "red";

    question_list.value.splice(0, 1);
    newDiv.prepend(a);
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
