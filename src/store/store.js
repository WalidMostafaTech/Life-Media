import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import bannersSlice from "./banners/bannersSlice";
import testimonialsSlice from "./testimonials/testimonialsSlice";
import brandsSlice from "./brands/brandsSlice";
import projectsSlice from "./projects/projectsSlice";
import questionsSlice from "./questions/questionsSlice";
import successStoriesSlice from "./success_stories/success_storiesSlice";
import solutionsSlice from "./solutions/solutionsSlice";
import settingSlice from "./setting/settingSlice";
import contactUsSlice from "./contact-us/contactUsSlice";


export const store = configureStore({
  reducer: {
    language: languageSlice,
    banners: bannersSlice,
    testimonials: testimonialsSlice,
    brands: brandsSlice,
    projects: projectsSlice,
    questions: questionsSlice,
    successStories: successStoriesSlice,
    solutions: solutionsSlice,
    setting: settingSlice,
    contactUs:contactUsSlice
  },
});
