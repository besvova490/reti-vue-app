<template>
  <base-error-label>
    <div :class="className">
      <div v-if="!!imageSrc" class="reti-base-upload__inner">
        <img :src="imageSrc" alt="Image" class="reti-base-upload__inner-image"/>
        <div class="reti-base-upload__actions">
          <font-awesome-icon
            :icon="faTrash"
            @click="onDelete"
          />
        </div>
      </div>
      <div
        v-else
        class="reti-base-upload__input"
        @click="triggerUpload"
      >
        <base-spin class="reti-base-upload__spin" v-if="loading"/>
        <font-awesome-icon :icon="faFileArrowUp" />
        <span>{{ label }}</span>
        <input
          ref="inputFile"
          v-show="false"
          type="file"
          @change="onFileChange"
          class="reti-base-upload__input-inner"
        />
      </div>
    </div>
  </base-error-label>
</template>

<script>
import { faFileArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";

// components
import BaseErrorLabel from "./BaseErrorLabel.vue";
import BaseSpin from "./BaseSpin.vue";

// helpers
import toBase64 from "@/helpers/toBase64";

export default {
  name: "BaseUpload",
  props: {
    label: {
      type: String,
      default: "Upload"
    },
    accept: String,
    disabled: Boolean
  },
  components: {
    BaseErrorLabel,
    BaseSpin
  },
  data () {
    return {
      imageUrl: null,
      loading: false
    };
  },
  computed: {
    imageSrc () {
      return this.imageUrl;
    },
    faFileArrowUp: () => faFileArrowUp,
    faTrash: () => faTrash,
    className () {
      return {
        "reti-base-upload": true,
        "reti-base-upload_disabled": this.disabled
      };
    }
  },
  methods: {
    triggerUpload () {
      !this.disabled && this.$refs.inputFile.click();
    },
    onFileChange (e) {
      this.loading = true;

      toBase64(e.target.files[0])
        .then(resp => {
          this.imageUrl = resp;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    onDelete () {
      this.imageUrl = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-base-upload {
  border-radius: 5px;
  background-color: #F5F6FA;
  overflow: hidden;

  width: 100px;
  height: 100px;
  padding: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  position: relative;

  &__inner {
    width: 100%;
    height: 100%;

    &:hover {
      .reti-base-upload__actions { opacity: 1; }
    }
  }

  &__inner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &__actions {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 8px;

    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 5px 0 5px;

    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  &__input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 100%;
    height: 100%;
    border: 1px dashed #d9d9d9;

    color: rgba(0, 0, 34, 0.50);
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    transition: all 0.3s ease-in-out;
  }

  &:hover .reti-base-upload__input {
    border-color: #1F64FF;
  }

  &_disabled {
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
}
</style>
