<template>
  <div class="tw-grid tw-grid-cols-2 tw-h-screen tw-font-['Poppins']">
    <div class="bg-primary text-white tw-flex">
      <div class="tw-m-auto">
        <h1 class="text-center tw-text-2xl tw-font-semibold">E-Kasir WebApp</h1>
        <q-avatar size="400px" square>
          <q-img src="~assets/undraw_empty_cart.svg" />
        </q-avatar>
        <p class="text-center tw-text-lg tw-mt-4">Kelompok 6</p>
      </div>
    </div>
    <div class="tw-flex">
      <div class="tw-m-auto">
        <q-card class="tw-w-96" flat>
          <q-card-section class="tw-space-y-4">
            <div>
              <div class="tw-text-2xl tw-font-semibold">Welcome</div>
              <div>Please login into an account</div>
            </div>
            <q-form @submit.prevent="login" class="tw-space-y-2">
              <q-input
                filled
                label="Username"
                :rules="[(val) => !!val || 'This field is required']"
                v-model="username"
              >
                <template v-slot:prepend>
                  <VsxIcon iconName="User" :size="22" />
                </template>
              </q-input>
              <q-input
                filled
                label="Password"
                :type="is_password ? 'password' : 'texe'"
                :rules="[(val) => !!val || 'This field is required']"
                v-model="password"
              >
                <template v-slot:prepend>
                  <VsxIcon
                    class="tw-cursor-pointer"
                    @click="is_password = !is_password"
                    :iconName="is_password ? 'Eye' : 'EyeSlash'"
                    :size="22"
                  />
                </template>
              </q-input>
              <q-btn
                type="submit"
                unelevated
                color="primary"
                label="Login"
                class="tw-w-full"
                :loading="loading"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import VsxIcon from "components/VxIcon.vue";
import { useAuthStore } from "src/stores/auth";

export default defineComponent({
  components: { VsxIcon },
  setup() {
    const auth = useAuthStore();

    return {
      auth,
      is_password: ref(true),
      username: ref(""),
      password: ref(""),
      loading: ref(false),
    };
  },
  mounted() {
    if (sessionStorage.getItem("access_token")) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    login() {
      let self = this;
      self.loading = true;
      let data = {
        username: this.username,
        password: this.password,
      };

      self.$api
        .post("/login", data)
        .then(function (response) {
          sessionStorage.setItem("access_token", response.data.data);
          self.auth.token = response.data.data;
          self.$router.push({ name: "Home" });
          self.loading = false;
        })
        .catch((err) => {
          self.loading = false;
          self.$q.notify({
            type: "negative",
            message: err.response.data.message,
          });
        });
    },
  },
});
</script>
