<template>
  <div>
    <h2 :class="[$style.title, $style.titleRed]">Запрещенные фразы</h2>
    <ul :class="[$style.markerReset, $style.crossMarker, $style.subtitle]">
      <li>«Да они там все геи по-любому».</li>
      <li>«А, это типа BTS?»</li>
      <li>«Да они все на одно лицо».</li>
      <li>«Фу, они как девчонки размалеваны».</li>
    </ul>
    <h2 :class="[$style.title, $style.titleGreen]">Что можно и нужно говорить</h2>
    <ul :class="[$style.markerReset, $style.checkMarker, $style.subtitle]">
      <li>«Если будешь моей девушкой - буду дарить тебе альбом к каждому камбеку».</li>
      <li>«Может как-нибудь посмотрим вместе их шоу (например, SKZ-CODE или 2 Kids Room)?»</li>
      <li>«Кто твой биас (любимчик) и почему именно он?»</li>
      <li>«Я так оhuел, когда дедпул снялся в их клипе»</li>
    </ul>
    <h2 :class="$style.title">Запомните несколько ключевых слов</h2>
    <ul :class="[$style.subtitle, $style.reset]">
      <li>STAY — название фандома. Можно обыграть: «Значит, ты — STAY? Здорово!».</li>
      <li>3RACHA — продюсерское ядро группы (Бан Чан, Чанбин, Хан).</li>
      <li>SKZ — общепринятое сокращение.</li>
      <li>Step Out — их ежегодный проект, где они рассказывают о планах на год.</li>
    </ul>
    <h2 :class="[$style.title, $style.blinkText]">❗❗Маркер сумасшедшей❗❗</h2>
    <div :class="$style.subtitle">Если она в диалоге произносит слова «Минсоны, Хенликсы» - БЕГИ!</div>
  </div>
</template>

<style module>
.title {
  --color-text: var(--color-black);
  font-family: var(--font-family-primary);
  color: var(--color-text);
  font-size: 30px;
  margin-top: 5px;
}
.titleRed {
  --color-text: var(--color-red);
}
.titleGreen {
  --color-text: var(--color-green);
}
.markerReset {
  list-style-type: none;
  padding-left: 0;
}
.reset {
  padding-left: 15px;
}
.crossMarker > li::before {
  content: "\2715";
  color: var(--color-red); 
  font-weight: bold;
  margin-right: 8px;
}
.checkMarker > li::before {
  content: "✓";
  color: var(--color-green);
  margin-right: 8px;
}
.subtitle {
  font-size: 20px;
  color: var(--color-dark-gray);
  margin-top: 10px;
}
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
.blinkText {
  animation-name: blink; 
  animation-duration: 0.7s; 
  animation-iteration-count: infinite; 
  color: var(--color-red);
}
</style>