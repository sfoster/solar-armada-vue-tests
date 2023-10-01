<script>
import { Color } from 'three';
import { TresCanvas } from '@tresjs/core'

export default {
  components: {
    TresCanvas,
  },
  setup() {
    return {
      bgColor: new Color('#82DBC5'),
      TresCanvas,
    };
  }
};
</script>

<template>
  <div id="scene-wrapper">
    <TresCanvas clear-color="#82DBC5">
      <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
      <TresMesh>
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshBasicMaterial color="orange" />
      </TresMesh>
      <TresAmbientLight :intensity="1" />
    </TresCanvas>
  </div>
</template>

<style>
#scene-wrapper {
  width: 600px;
  height: 480px;
  box-shadow: 0 4px 12px 2px rgba(0,0,0,0.4);
  margin-top: 20px;
  margin-inline: auto;
}
</style>
