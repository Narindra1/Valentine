<script setup>
import { ref, computed } from "vue";

// let noText = ref("No");
// let tailleYes = ref(100);

let compteur = ref(0);

let increment = () => {
  compteur.value++;
  console.log("increment", compteur.value);

  //   let c = compteur.value % 4;
  //   noText.value = texts[c];

  //   tailleYes.value += 100 * (1 + compteur.value * 0.2);
};

// fonction hafa manova compteur
// reexecuter =.....
//   let c = compteur.value % 4;
//   noText.value = texts[c];

let noText = computed(() => {
  if (compteur.value == 0) return "No";

  let texts = ["Are you sure?", "Really sure?", "Last chance!", "Okay..."];
  let c = compteur.value % 4;
  let newText = texts[c];
  return newText;
});

let btnYesStyle = computed(() => {
  if (isYes.value) {
    return {
      width: `100vw`,
      height: `100vh`,
      x,
    };
  }
  let taille = 100;
  if (!compteur.value == 0) {
    taille = 100 * (compteur.value + 0.1);
  }
  return {
    width: `${taille}px`,
    height: `${taille}px`,
  };
});

let isYes = computed(() => {
  return compteur.value >= 10;
});
</script>

<template>
  <div class="h-screen overflow-hidden">
    <div class="h-screen flex flex-col gap-8 items-center justify-center py-20">
      <div class="valentin_head">
        <div class="h-[200px]" @click="decrement">
          <img src="@/assets/icones/milk-and-mocha-love.gif" alt="gif animé" />
        </div>
        <div class="h-[40px] italic text-3xl text-black font-extrabold">
          <h1>Will you be my Valentine?</h1>
        </div>
      </div>
      <div
        class="flex flex-row items-center gap-4"
        :class="isYes ? 'mb-[274px]' : ''"
      >
        <RouterLink class="" to="/yes">
          <img
            class="bg-green-500 rounded-lg hover:bg-green-600"
            :style="btnYesStyle"
            src="@/assets/imgs/yesBtn.png"
          />
        </RouterLink>

        <button
          class="h-[100px] bg-red-500 px-10 rounded-lg hover:bg-red-600"
          @click="increment"
          v-if="!isYes"
        >
          {{ noText }}
        </button>
      </div>
    </div>
  </div>
</template>
