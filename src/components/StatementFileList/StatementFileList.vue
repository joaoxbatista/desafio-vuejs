<template>
  <ul class="statement-file-list" v-if="files.length">
    <li
      class="statement-file"
      v-for="(file, index) in files"
      :key="`statement-file-${index}`"
    >
      <div class="statement-file__icon">
        <i :class="mapTypeToIcon(file.type)"></i>
      </div>
      <div class="statement-file__name">
        {{ file.name }}
      </div>
      <a
        class="statement-file__download"
        :href="file.url"
        download
        target="_blank"
      >
        <i class="fa fa-cloud-download"></i>
      </a>
    </li>
  </ul>
</template>
<script>
  import { mapTypeToIcon } from '@/utils/icons';
  export default {
    name: 'StatementFileList',
    props: {
      files: {
        type: Array,
        default: () => {
          return [];
        },
      },
    },

    methods: {
      mapTypeToIcon,
    },
  };
</script>

<style lang="scss">
  .statement-file-list {
    border: 1px solid $gainsboro;
    border-radius: $rounded-sm;
  }

  .statement-file {
    display: flex;
    align-items: center;
    padding: 5px;
    color: $grey;
    border-bottom: 1px solid $gainsboro;

    &:last-of-type {
      border-bottom: none;
    }

    &__icon {
      flex: auto;
      margin-right: 9px;
      i {
        font-size: 27px;
      }
    }

    &__download {
      flex: auto;
      text-align: right;
      font-size: 22px;
      text-decoration: none;
      color: $grey;
    }

    &__name {
      width: 100%;
      text-align: left;
      word-break: break-all;
      margin-right: 9px;
    }
  }
</style>
