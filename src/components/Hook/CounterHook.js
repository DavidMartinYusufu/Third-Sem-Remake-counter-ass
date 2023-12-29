import { ref } from "vue";

export function useComposableCounter() {
  const count = ref(0);
  const inputValue = ref('')

  function handleIncrement() {
    count.value++
  }

  function handleDecrement() {
    if (count.value > 0){
        count.value--;
    }else {
        return
    }
  }

  function handleReset() {
    count.value = 0
  }

  function setValue() {
    console.log(inputValue.value)
    if(inputValue.value == NaN){
      return
    }else {
      count.value = inputValue.value
    }

    inputValue.value = ""
  }

  return {
    handleDecrement,
    handleIncrement,
    handleReset,
    setValue,
    count,
    inputValue
  };
}   