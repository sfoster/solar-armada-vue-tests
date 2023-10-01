<script>
import * as THREE from 'three';

export default {
  setup() {
    console.log("setup");
    return {
    };
  },
  mounted() {
    console.log("mounted, el:", this.$el);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 600 / 480, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
      canvas: this.$el.querySelector("canvas")
    });
    renderer.setSize( 600, 480 );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate();
  },
  beforeUpdate() {
    console.log("ThreeScene, beforeUpdate", this);
  },
  renderTriggered() {
    console.log("ThreeScene, renderTriggered", this);
  },
  activated() {
    console.log("ThreeScene, activated", this);
  },
  deactivated() {
    console.log("ThreeScene, deactivated", this);
  }
};
</script>

<template>
  <div id="scene-wrapper">
    <h1>Three.js Scene</h1>
    <canvas width="600" height="480"></canvas>
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
