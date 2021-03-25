<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
query Posts {
  projects: allStrapiProject {
    edges {
      node {
        title
        id
        date
        thumbnail {
          url
          width
          height
        }
        categories {
          name
          id
        }
        path
      }
    }
  },
  journals: allStrapiJournal(perPage: 4) {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>