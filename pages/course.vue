<template>
	<div>
		<div class="mb-4 flex justify-between items-center w-full">
			<h1>
	             <span class="font-bold">{{ title }}</span>
			</h1>
			<UserCard />
		</div>
		
		<div class="flex flex-row justify-center flex-grow">
			<div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
				<h3>Chapters</h3>
				<div v-for="chapter in chapters" class="space-y-1 mb-4 flex flex-col" :key="chapter.slug">
					<h4>{{ chapter.title }}</h4>
					<NuxtLink
						v-for="(lesson, index) in chapter.lessons"
						class="flex flex-row space-x-1 no-underline prose-sm font-normal"
						:key="lesson.slug"
						:to="lesson.path">
						<span class="text-gray-500">{{ index + 1 }}.</span>
						<span>{{ lesson.title }}</span>
					</NuxtLink>
				</div>
			</div>
			
			<div class="prose p-12 bg-white rounded-md w-[65ch]">
				<NuxtErrorBoundary>
					<NuxtPage/>
					<template #error="{error}">
						<p>Oh no, something went wrong with the lesson! <code>{{ error }}</code></p>
						<p>
							<button class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1"
							        @click="resetError(error)">
								Reset
							</button>
						</p>
					</template>
				</NuxtErrorBoundary>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UserCard from "~/components/UserCard.vue";
	const { chapters, title } = useCourse();
	
	const resetError = (error) => {
		error.value = null;
	}
</script>

<style scoped>
.router-link-active {
	@apply text-blue-500;
}
</style>