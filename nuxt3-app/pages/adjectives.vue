<template>
  <div class="main">
    <div>
      <hr />
      <h1><span>Adjectives</span> 形容詞 1942-2022</h1>
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
  ["紫外線 ____ light", "ultraviolet"],
  ["有名な", "renowned"],
  ["透き通った", "transparent"],
  ["薄暗い", "dim"],
  ["正当な", "legitimate"],
  ["悪", "adverse"],
  ["すばやい", "swift"],
  ["世間知らずの", "naive"],
  ["所速美", "tokorohayami"],
  ["この先工事中・・・・", "slap"],
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
    btn.style.border = "none";
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
    btn.style.border = "none";
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

.btn {
  width: 100px;
  font-size: 2rem;
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
