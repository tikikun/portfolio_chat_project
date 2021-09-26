<template>
  <!-- Simple login form -->

  <div class="flex flex-col items-center justify-center w-screen h-screen bg-white sm:bg-gray-200">
    <div v-if="loginState">User is logged in, user name is {{ user }}</div>
    <div v-else>User is yet to have logged in</div>
    <div
      v-if="!loginState"
      class="w-full h-screen px-8 py-8 bg-white shadow-none sm:shadow-lg sm:px-12 xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 sm:h-auto"
    >
      <div class="w-full p-4 text-3xl font-bold text-center text-gray-600">LOGIN</div>
      <div class="w-full my-3 bg-gray-200" style="height: 1px"></div>
      <form>
        <div class="flex flex-col gap-4 px-0 py-4">
          <div>
            <label class="text-gray-700">Email address</label>
            <!-- <AtSymbolIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              class="w-full py-2 pl-10 border border-gray-200"
              placeholder="Email address"
              type="email"
            />
          </div>
          <div>
            <label class="text-gray-700">Password</label>
            <!-- <LockClosedIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              class="w-full py-2 pl-10 border border-gray-200"
              placeholder="Password"
              type="password"
            />
          </div>
          <div class="flex flex-row w-full gap-2">
            <button
              class="flex flex-row items-center justify-center w-6/12 gap-1 p-0 text-indigo-500 duration-100 ease-in-out border border-indigo-500 hover:bg-indigo-500 hover:text-white"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </button>
            <button
              class="flex flex-row items-center justify-center w-6/12 gap-1 p-2 text-indigo-500 duration-100 ease-in-out border border-indigo-500 hover:bg-indigo-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Sign-up
            </button>
          </div>
          <div class="flex flex-row justify-center my-2">
            <span class="absolute px-4 bg-white">or</span>
            <div class="w-full mt-3 bg-gray-200" style="height: 1px"></div>
          </div>
          <div class="flex flex-col w-full gap-2">
            <button
              @click="signin_google"
              type="button"
              class="flex flex-row items-center justify-center w-full gap-2 p-2 text-white duration-100 ease-in-out bg-red-500 hover:bg-red-600"
            >
              <svg
                aria-hidden="true"
                role="img"
                class="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              Sign-in with Google
            </button>
            <!-- <button
              class="flex flex-row items-center justify-center w-full gap-2 p-2 text-white duration-100 ease-in-out bg-blue-600 hover:bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"
                  fill="currentColor"
                />
              </svg>
              Sign-in with Facebook
            </button>
            <button
              class="flex flex-row items-center justify-center w-full gap-2 p-2 text-white duration-100 ease-in-out bg-gray-700 hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              Sign-in with Github
            </button>-->
          </div>
          <div class="flex flex-row justify-end w-full">
            <a href="#">Forgot password</a>
          </div>
        </div>
      </form>
    </div>
    <div class="p-4">© Alan Dao 2021</div>
  </div>
</template>

<script setup>
import { ref, reactive, onUpdated, onMounted, onBeforeMount, provide, inject } from "vue"
import { getAuth, browserSessionPersistence, setPersistence, getRedirectResult, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.js";


provide('location', 'North Pole')

// Init login 
const provider = new GoogleAuthProvider();
//const auth = getAuth();

// Page info 
const credential = ref({});
const loginState = ref(false);
const user = ref();
//const auth = getAuth();
auth.onAuthStateChanged(
    ()=>{
    if (auth.currentUser != null){
    loginState.value = true }
  }
)


//const globalState = inject('global')

// Simply switch to a new screen for signing in 
const signin_google = () => {
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    const provider = new GoogleAuthProvider();
    // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
    return signInWithRedirect(auth, provider);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  //console.log(thunghiem)
};

// Run before mount
onBeforeMount(() => {
  //fetch_cre()
   //console.log(auth.currentUser)

 //console.log(auth.currentUser != null)
})

// Fetch login status 
const fetch_cre = async () => {
  try {
    const res = await getRedirectResult(auth)
    if (res != null) {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      if (Object.keys(credential).length != 0) {
        loginState.value = true
        //globalState.loginState.value = true
        //console.log(credential)
        //console.log(token)
        console.log(auth)
      }
      user.value = res.user.displayName;
    }
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }

}
</script>
