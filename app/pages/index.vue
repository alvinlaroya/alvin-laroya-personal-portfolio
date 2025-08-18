<template>
    <div class="max-w-screen-lg mx-auto">
        <!-- Container for Sidebar and Main Content -->
        <div class="flex flex-col lg:flex-row">
            <!-- Sidebar - Sticky below navbar -->
            <PersonalInformation />

            <!-- Main Content Area -->
            <main class="flex-1 min-h-screen p-4 flex flex-col space-y-11">
                <AboutMe />
                <Experiences />
                <SeminarsAndTraining />
                <Projects />
                <USeparator />
                <Testimonials />
                <USeparator />
                <ContactMe />
            </main>
        </div>
    </div>
</template>