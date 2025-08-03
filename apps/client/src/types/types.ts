/**
 * Input types
 */

import { type LucideIcon } from 'lucide-react';
import { z } from 'zod';

export interface InputWithIconProps {
  icon: LucideIcon;
  inputLabel?: string;
  placeholder?: string;
  type?: string;
}

const PASSWORD_MIN_LENGTH = 8;

export const baseFormSchema = z.object({
  fullName: z.string(),
  username: z.string().toLowerCase(),
  email: z.email({ error: `Please enter a valid email address` }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+])(?=.*\d)[A-Za-z\d!@#$%^&*()-_=+]{8,}$/,
      `Password must be at least ${PASSWORD_MIN_LENGTH} characters long with at least 1 uppercase, 1 lowercase, 1 number and 1 special character`,
    ),
  confirmPassword: z.string(),
  code: z.string(),
});

export const loginFormSchema = baseFormSchema.pick({
  email: true,
  password: true,
});

export const signupFormSchema = baseFormSchema
  .pick({
    email: true,
    password: true,
    confirmPassword: true,
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})
