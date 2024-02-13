<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Objective</template>

    The objective of this challenge is not necessarily just to solve the problem - but to
evaluate your software development skills, code quality, creativity, and resourcefulness as a
potential future colleague. Please share the necessary artifacts you would provide to your
colleagues in a real-world professional setting.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Test</template>

    We have a simple API that returns a JSON array. We would like you to use HTML, CSS and
Javascript to read the API and display it in an organized way. In addition, you should add in
some sort of sorting mechanic to the front-end. Use preferably Vue.js as base and feel free to
add any other framework or library you would consider necessary to achieve the task.
https://swapi.dev/documentation
Feel free to use any data - but perhaps you can use the “planet” resource here.
There is no right answer - just looking for an understanding of how you interpret the assignment
and what decisions you make to build a simple project.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Notes</template>

    I made a component to handle the API requests for https://swapi.dev/api/planets/ resource,
    which is a paginated endpoint so there is no sense to sorting in the front end
    because in this kind of paginated endpoints the sorting is in the back end side.
    I sorted by page only and I made a paginated component.
  </WelcomeItem>
</template>
