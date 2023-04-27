
<template>
    <div class="vue-tempalte">
        <!-- Main -->
        <div class="container-fluid ps-md-0">
            <div class="row g-0">
                <div class="d-none d-md-flex col-md-8 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                    <div class="App">
                        <div class="vertical-center">
                            <div class="inner-block">
                                <h3 class="login-heading mb-4">Bievenido a DeepLabUV</h3>
                                <form>
                                    <form @submit.prevent="LoginData">
                                        <div class="form-floating mb-3">
                                            <input type="codigoUv" class="form-control" id="floatingInput"
                                                v-model="usuarios.codigoUv" placeholder="1600000">
                                            <label for="floatingInput">Código de estudiante</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" id="floatingPassword"
                                                v-model="usuarios.password" placeholder="Password">
                                            <label for="floatingPassword">Contraseña</label>
                                        </div>

                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="rememberPasswordCheck">
                                            <label class="form-check-label" for="rememberPasswordCheck">
                                                Recordar contraseña
                                            </label>
                                        </div>

                                        <div class="d-grid">
                                            <button type="submit" value="LoginData"
                                                class="btn btn-lg btn-primary btn-login mb-2">Ingresar</button>
                                            <div class="text-center">
                                                <p class="forgot-password text-center mt-2 mb-4">
                                                    <router-link to="/forgot-password">¿Olvidaste la
                                                        contraseña?</router-link>
                                                </p>
                                                <!--<a class="small" href="#">Forgot password?</a>-->
                                            </div>
                                        </div>
                                    </form>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import axios from 'axios';

axios
export default {
    name: 'LoginDeep',
    data() {
        return {
            result: {},
            usuarios: {
                codigoUv: '',
                password: ''
            }
        }
    },

    created() {
    },
    mounted() {
        console.log("mounted() called.......");
    },
    methods: {
        LoginData() {
            console.log("entro a methods");
            axios.post("http://localhost:5430/user/login/", this.usuarios)
                .then(
                    ({ data }) => {
                        console.log(data);
                        try {
                            if (data.message === "Code not exits") {
                                alert("Code not exits");

                            }
                            else if (data.message == "Login Success") {

                                this.$router.push({ name: 'ConfParameters' })
                            }
                            else {
                                alert("Incorrect Code and Password not match");
                            }

                        } catch (err) {
                            alert("Error, please try again");
                        }
                    }
                )
        }
    }
}

</script>