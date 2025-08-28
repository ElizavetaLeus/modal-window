import { type Ref, ref } from 'vue';

const createTogler = (): [Ref<boolean>, () => void, () => void,] => {
  const togler = ref(false);
  const setToglerTrue = () => {
    togler.value = true;
  }
  const setToglerFalse = () => {
    togler.value = false;
  }
  return [
    togler, setToglerTrue, setToglerFalse
  ]
}
export default createTogler;