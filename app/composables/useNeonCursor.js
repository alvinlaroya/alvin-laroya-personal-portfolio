// src/composables/useNeonCursor.js
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
import { neonCursor } from "threejs-toys";

export function useNeonCursor(options = {}) {
  const container = ref(null);
  const isEnabled = ref(false);
  let cleanup = null; // this will be a function returned by neonCursor

  const enable = () => {
    if (container.value && !cleanup) {
      cleanup = neonCursor({
        el: container.value,
        THREE,
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
        ...options,
      });

      // send canvas to background
      const canvas = container.value.querySelector("canvas");
      if (canvas) {
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.zIndex = "-1";
      }

      isEnabled.value = true;
    }
  };

  const disable = () => {
    if (cleanup) {
      cleanup();   // ✅ call cleanup function
      cleanup = null;
      isEnabled.value = false;
    }
  };

  onMounted(() => {
    enable(); // start enabled by default
  });

  onBeforeUnmount(() => {
    disable();
  });

  return { container, isEnabled, enable, disable };
}
