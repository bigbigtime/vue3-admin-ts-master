<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
      >
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password" utocomplete="off" />
        </a-form-item>

        <a-form-item>
          <div id="captcha-dom" class="nc-container"></div>
          <!--No-Captcha渲染的位置，其中 class 中必须包含 nc-container-->
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> | 
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {},
  setup(props){

    const formConfig = reactive<any>({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      aa: 10,
      bb: 20
    })

    const data = toRefs(formConfig);
    onMounted(() => {})

    return {
        ...data
    }
  }
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
