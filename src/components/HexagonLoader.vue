<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="loader-text">Please wait, we're loading...</div>
          <div class="cssload-wrap">
            <div class="cssload-cssload-spinner"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HexagonLoader",
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 35%;
  margin: 0px auto;
  padding: 20px 30px;
  background-image: url(../assets/background2.jpg);
  border-radius: var(--border-radius-big);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border: 3px solid #768f9d;
}
.loader-text {
  color: var(--color-gray-text);
  text-align: center;
}
.cssload-wrap {
  display: flex;
  display: -o-flex;
  display: -ms-flex;
  display: -webkit-flex;
  display: -moz-flex;
  box-pack: center;
  -o-box-pack: center;
  -ms-box-pack: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  box-align: center;
  -o-box-align: center;
  -ms-box-align: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  perspective: 390px;
  -o-perspective: 390px;
  -ms-perspective: 390px;
  -webkit-perspective: 390px;
  -moz-perspective: 390px;
  height: 36vh;
  overflow: hidden;
}

.cssload-cssload-spinner {
  position: relative;
  transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  animation: cssload-wobble 4.59s ease-in-out infinite;
  -o-animation: cssload-wobble 4.59s ease-in-out infinite;
  -ms-animation: cssload-wobble 4.59s ease-in-out infinite;
  -webkit-animation: cssload-wobble 4.59s ease-in-out infinite;
  -moz-animation: cssload-wobble 4.59s ease-in-out infinite;
}

.cssload-cssload-spinner:before,
.cssload-cssload-spinner:after {
  display: block;
  content: " ";
  border-radius: 50%;
  width: 180px;
  height: 180px;
  -webkit-clip-path: polygon(
    50% 0,
    7% 26%,
    7% 74%,
    50% 100%,
    93% 74%,
    93% 26%,
    83% 32%,
    83% 69%,
    50% 89%,
    17% 69%,
    17% 32%,
    50% 12%,
    83% 32%,
    93% 26%
  );
  clip-path: polygon(
    50% 0,
    7% 26%,
    7% 74%,
    50% 100%,
    93% 74%,
    93% 26%,
    83% 32%,
    83% 69%,
    50% 89%,
    17% 69%,
    17% 32%,
    50% 12%,
    83% 32%,
    93% 26%
  );
  animation: cssload-spin 1.73s ease-in-out infinite both reverse;
  -o-animation: cssload-spin 1.73s ease-in-out infinite both reverse;
  -ms-animation: cssload-spin 1.73s ease-in-out infinite both reverse;
  -webkit-animation: cssload-spin 1.73s ease-in-out infinite both reverse;
  -moz-animation: cssload-spin 1.73s ease-in-out infinite both reverse;
}

.cssload-cssload-spinner:before {
  background-color: #02baff;
  background: linear-gradient(to right, #3271ff, #02baff);
  position: absolute;
}

.cssload-cssload-spinner:after {
  background-color: #4c4c4c;
  background: linear-gradient(to right, #768f9d, #4c4c4c);
  animation-delay: -0.86s;
  -o-animation-delay: -0.86s;
  -ms-animation-delay: -0.86s;
  -webkit-animation-delay: -0.86s;
  -moz-animation-delay: -0.86s;
}

@keyframes cssload-wobble {
  0%,
  100% {
    transform: rotateX(8.75deg) rotateY(35deg);
  }
  50% {
    transform: rotateX(35deg) rotateY(-35deg) rotate(180deg);
  }
}

@-o-keyframes cssload-wobble {
  0%,
  100% {
    -o-transform: rotateX(8.75deg) rotateY(35deg);
  }
  50% {
    -o-transform: rotateX(35deg) rotateY(-35deg) rotate(180deg);
  }
}

@-ms-keyframes cssload-wobble {
  0%,
  100% {
    -ms-transform: rotateX(8.75deg) rotateY(35deg);
  }
  50% {
    -ms-transform: rotateX(35deg) rotateY(-35deg) rotate(180deg);
  }
}

@-webkit-keyframes cssload-wobble {
  0%,
  100% {
    -webkit-transform: rotateX(8.75deg) rotateY(35deg);
  }
  50% {
    -webkit-transform: rotateX(35deg) rotateY(-35deg) rotate(180deg);
  }
}

@-moz-keyframes cssload-wobble {
  0%,
  100% {
    -moz-transform: rotateX(8.75deg) rotateY(35deg);
  }
  50% {
    -moz-transform: rotateX(35deg) rotateY(-35deg) rotate(180deg);
  }
}

@keyframes cssload-spin {
  0%,
  100% {
    transform: translateZ(49px) rotateX(14deg);
  }
  33% {
    transform: translateZ(-49px) scale(0.4);
  }
  66% {
    transform: translateZ(-49px);
  }
}

@-o-keyframes cssload-spin {
  0%,
  100% {
    -o-transform: translateZ(49px) rotateX(14deg);
  }
  33% {
    -o-transform: translateZ(-49px) scale(0.4);
  }
  66% {
    -o-transform: translateZ(-49px);
  }
}

@-ms-keyframes cssload-spin {
  0%,
  100% {
    -ms-transform: translateZ(49px) rotateX(14deg);
  }
  33% {
    -ms-transform: translateZ(-49px) scale(0.4);
  }
  66% {
    -ms-transform: translateZ(-49px);
  }
}

@-webkit-keyframes cssload-spin {
  0%,
  100% {
    -webkit-transform: translateZ(49px) rotateX(14deg);
  }
  33% {
    -webkit-transform: translateZ(-49px) scale(0.4);
  }
  66% {
    -webkit-transform: translateZ(-49px);
  }
}

@-moz-keyframes cssload-spin {
  0%,
  100% {
    -moz-transform: translateZ(49px) rotateX(14deg);
  }
  33% {
    -moz-transform: translateZ(-49px) scale(0.4);
  }
  66% {
    -moz-transform: translateZ(-49px);
  }
}
</style>
