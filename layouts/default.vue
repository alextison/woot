<template>
  <v-app>
    <v-app-bar app color="indigo">
      <v-app-bar-title>
        Woot
      </v-app-bar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <Suspense>
          <!-- main content -->
          <slot />

          <!-- loading state -->
          <template #fallback>
            <div>
              <v-progress-circular indeterminate color="primary" />
            </div>
          </template>
        </Suspense>
      </v-container>
    </v-main>

    <v-footer color="indigo" app :style="{height: '3em'}">
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Woot</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
