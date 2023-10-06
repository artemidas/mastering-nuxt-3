<template>
    <div class="prose mb-12">
        <h1><span class="font-medium">
	        Course: <span class="font-bold">Mastering Nuxt</span>
	        </span>
        </h1>
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
	        <NuxtPage />
        </div>
    </div>
</template>

<script setup lang="ts">
	const { chapters } = useCourse();
</script>

<style scoped>
.router-link-active {
	@apply text-blue-500;
}
</style>