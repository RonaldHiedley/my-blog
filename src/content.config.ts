import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projetos = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/projetos",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        status: z.string(),
        technologies: z.array(z.string()),
    }),
});

export const collections = {
    projetos,
};
//"Tudo que estiver dentro de src/content/projetos pertence à coleção projetos e precisa seguir este formato."