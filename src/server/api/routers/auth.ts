import type { Role } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { hash } from "bcrypt";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        name: z.string().nonempty("Nama tidak boleh kosong"),
        email: z
          .string()
          .nonempty("Email tidak boleh kosong")
          .email("Format email tidak valid"),
        password: z
          .string()
          .nonempty("Password tidak boleh kosong")
          .min(8, "Password minimal 8 karakter"),
        role: z.string(),
        province: z.string(),
        city: z.string(),
        subdistrict: z.string(),
        area: z.string(),
      })
    )
    .mutation(
      async ({
        ctx,
        input: {
          name,
          email,
          password,
          role: _role,
          province,
          city,
          subdistrict,
          area,
        },
      }) => {
        const hasRegistered = await ctx.prisma.user.findUnique({
          where: { email },
        });
        if (hasRegistered) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Email sudah digunakan",
          });
        }

        const hashedPassword = await hash(password, 10);
        const role = _role as Role;
        /* eslint-disable-next-line */
        const { password: _password, ...result } = await ctx.prisma.user.create(
          {
            data: {
              name,
              email,
              password: hashedPassword,
              role,
              provinceId: role === "community" ? +province : null,
              cityId: role === "community" ? +city : null,
              subdistrictId: role === "community" ? +subdistrict : null,
              areaId: role === "community" ? +area : null,
            },
          }
        );
        return result;
      }
    ),
  changePassword: protectedProcedure
    .input(
      z
        .object({
          password: z
            .string()
            .nonempty("Password harus diisi")
            .min(8, "Password minimal 8 karakter"),
          passwordConfirmation: z.string(),
        })
        .refine((data) => data.password === data.passwordConfirmation, {
          message: "Password tidak sama",
          path: ["passwordConfirmation"],
        })
    )
    .mutation(async ({ input, ctx }) => {
      const hashedPassword = await hash(input.password, 10);

      await ctx.prisma.user.update({
        data: { password: hashedPassword },
        where: { id: ctx.session.user.id },
      });
    }),
});
