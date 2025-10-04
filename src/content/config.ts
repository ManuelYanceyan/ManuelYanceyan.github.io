// src/content/config.ts
import { defineCollection, z } from "astro:content";

const semanasCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    week: z.number(),
    date: z.string().optional(),
  }),
});

export const collections = {
  semanas: semanasCollection,
};