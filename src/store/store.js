import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import bannersSlice from "./banners/bannersSlice";
import testimonialsSlice from "./testimonials/testimonialsSlice";
import brandsSlice from "./brands/brandsSlice";
import projectsSlice from "./projects/projectsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import questionsSlice from "./questions/questionsSlice";
import successStoriesSlice from "./success_stories/success_storiesSlice";
import solutionsSlice from "./solutions/solutionsSlice";
import settingSlice from "./setting/settingSlice";
import contactUsSlice from "./contact-us/contactUsSlice";
import aboutSlice from "./about/aboutSlice";
import governoratesSlice from "./governorates/governoratesSlice";
import videoSectionSlice from "./videoSection/videoSectionSlice";
import videosSliderSlice from "./videosSlider/videosSliderSlice";
import pagesSlice from "./pages/pagesSlice";
import officesSlice from "./offices/officesSlice";
import imagesSliderSlice from "./imagesSlider/imagesSliderSlice";
import newLiveMediaSlice from "./newLiveMedia/newLiveMediaSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    banners: bannersSlice,
    testimonials: testimonialsSlice,
    brands: brandsSlice,
    projects: projectsSlice,
    categories: categoriesSlice,
    questions: questionsSlice,
    successStories: successStoriesSlice,
    solutions: solutionsSlice,
    setting: settingSlice,
    contactUs: contactUsSlice,
    about: aboutSlice,
    governorates: governoratesSlice,
    videoSection: videoSectionSlice,
    videosSlider: videosSliderSlice,
    pages: pagesSlice,
    offices: officesSlice,
    imagesSlider: imagesSliderSlice,
    newLiveMedia: newLiveMediaSlice,
  },
});
