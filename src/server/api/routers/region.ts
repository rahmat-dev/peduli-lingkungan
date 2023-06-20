import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const regionRouter = createTRPCRouter({
  getProvinces: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.province.findMany({ orderBy: { name: "asc" } });
  }),
  getCities: publicProcedure
    .input(z.object({ provinceId: z.number() }))
    .query(async ({ ctx, input: { provinceId } }) => {
      return await ctx.prisma.city.findMany({
        where: { provinceId },
        orderBy: { name: "asc" },
      });
    }),
  getSubdistricts: publicProcedure
    .input(z.object({ cityId: z.number() }))
    .query(async ({ ctx, input: { cityId } }) => {
      return await ctx.prisma.subdistrict.findMany({
        where: { cityId },
        orderBy: { name: "asc" },
      });
    }),
  getAreas: publicProcedure
    .input(z.object({ subdistrictId: z.number() }))
    .query(async ({ ctx, input: { subdistrictId } }) => {
      return await ctx.prisma.area.findMany({
        where: { subdistrictId },
        orderBy: { name: "asc" },
      });
    }),
});
