<template>
  <div
	  v-if="user"
	  class="rounded p-3 flex items-center space-x-3 bg-white"
  >
	  <img
		  :src="profile"
		  :alt="name"
		  class="rounded-full w-12 h-12 border-2 border-blue-400"
	  />
	  <div class="text-right">
		  <div class="font-medium">{{ name }}</div>
		  <button
			  @click="logout"
		      class="text-sm underline text-slate-500"
		  >
			  Log out
		  </button>
	  </div>
  </div>
</template>
<script lang="ts" setup>
	const user = useSupabaseUser();
	const { auth } = useSupabaseClient();
	
	const logout = async () => {
		const { error } = await auth.signOut();
		if (error) {
			console.log(error);
			return
		}
		
		await navigateTo('/login')
	}

	const name = computed(() => user.value?.user_metadata.full_name);
	const profile = computed(() => user.value?.user_metadata.avatar_url);
</script>