<template>
  <section class="main" id="ipad">
    <div class="player">
      <video muted autoplay>
        <source src="/videos/ipad-pro.mp4" />
      </video>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="5000"
        class="texts"
      >
        <h1>iPad Pro</h1>
        <h2>Supercharged by</h2>
        <img src="/images/m2_logo.png" alt="m2" />
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{ opacity: 1 }"
      :delay="5000"
      class="paragraph"
    >
      <p>
        Astonishing performance. Incredibly advanced displays. Superfast
        wireless connectivity. Next-level Apple Pencil capabilities. Powerful
        new features in iPadOS 16. The ultimate iPad experience.
      </p>
    </div>
  </section>

  <section class="air" id="macBookAir">
    <h1
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="500"
      class="airHeader"
    >
      MacBook Air
    </h1>
    <div class="player">
      <video muted autoplay>
        <source src="/videos/macbook-air.mp4" />
      </video>

      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :delay="500"
        class="paragraph second"
      >
        <p>
          MacBook Air with M1 is an incredibly portable laptop — it’s nimble and
          quick, with a silent, fanless design and a beautiful Retina display.
          Thanks to its slim profile and all‑day battery life, this Air moves at
          the speed of lightness.
        </p>

        <div class="chip">
          <p>
            <img src="/images/m1-icon.png" alt="m1" /> Supercharged by the
            Apple M1 chip
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="pro" id="macBookPro">
    <h1
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="500"
      class="airHeader"
    >
      MacBook Pro
    </h1>
    <div class="player">
      <video class="macbookPro" muted autoplay>
        <source src="/videos/macbook-pro.mp4" />
      </video>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1 }"
        :delay="500"
        class="paragraph second"
      >
        <p>
          The new M2 chip makes the 13‑inch MacBook Pro more capable than ever.
          The same compact design supports up to 20 hours of battery life1 and
          an active cooling system to sustain enhanced performance. Featuring a
          brilliant Retina display, a FaceTime HD camera, and studio‑quality
          mics, it’s our most portable pro laptop.
        </p>

        <div class="chip">
          <p>
            <img src="/images/m2_logo.png" alt="m1" /> Supercharged by the
            Apple M2 chip
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      play: false,
      start: "autoplay",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.main {
  padding-top: 70px;
}
.player {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  video {
    width: 1500px;

    &.macbookPro {
      width: 1200px;
    }
  }

  .texts {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 25px;
    position: absolute;
    bottom: 0;
    h1 {
      color: white;
      font-size: 75px;
      letter-spacing: 0.2535px;
      font-weight: 600;
    }
    h2 {
      background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      font-size: 45px;
      font-weight: bold;
    }
    img {
      width: 25%;
      margin-top: 10px;
    }
  }
}
.paragraph {
  width: 800px;
  margin-top: 50px;
  width: 40%;
  display: flex;
  margin: 50px auto;

  &.second {
    margin-top: 150px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 50px;

    p {
      font-size: 32px;
      font-weight: 500;
    }

    .chip {
      width: 100%;
      display: flex;
      justify-content: center;
      p {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 35px;
      }
    }
  }
  p {
    color: white;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
  }
}

.air {
  padding-top: 15%;
}

.airHeader {
  font-size: 75px;
  color: white;
  text-align: center;
  margin-bottom: 5%;
}

.pro {
  padding-top: 15%;
}

@media (max-width: 1500px) {
  .player {
    video,
    video.macbookPro {
      width: 90%;
    }
  }
}

@media (max-width: 800px) {
  .player {
    .texts {
      h1 {
        font-size: 55px;
      }

      h2 {
        font-size: 25px;
      }
    }
  }

  .paragraph {
    margin: 20px auto !important;
    p,
    &.second p,
    &.second .chip p {
      font-size: 15px;
    }

    &.second .chip img {
      width: 15%;
    }
  }

  .airHeader {
    font-size: 55px;
  }

  .paragraph {
    width: 65%;
    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
}

@media (max-width: 500px) {
  .player {
    .texts {
      bottom: -40px;
      h1 {
        font-size: 25px;
      }

      h2 {
        font-size: 15px;
      }
    }
  }

  .paragraph {
    width: 90% !important;
    p,
    &.second p,
    &.second .chip p {
      font-size: 12px;
    }
  }

  .airHeader {
    font-size: 35px;
  }
}

@media (max-width: 377px) {
  .player {
    .texts {
      bottom: -80px;
    }
  }

  .paragraph {
    margin-top: 100px;
  }
}
</style>
