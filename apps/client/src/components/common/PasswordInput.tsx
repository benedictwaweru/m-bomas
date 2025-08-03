/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

"use client";

import { useId, useMemo, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

export function PasswordInput({ value, onChange, onBlur, name }: PasswordInputProps) {
	const id = useId();
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	const checkStrength = (pass: string) => {
		const requirements = [
			{ regex: /.{8,}/, text: "At least 8 characters" },
			{ regex: /[0-9]/, text: "At least 1 number" },
			{ regex: /[a-z]/, text: "At least 1 lowercase letter" },
			{ regex: /[A-Z]/, text: "At least 1 uppercase letter" },
		];

		return requirements.map((req) => ({
			met: req.regex.test(pass),
			text: req.text,
		}));
	};

	const strength = checkStrength(value);

	const strengthScore = useMemo(() => {
		return strength.filter((req) => req.met).length;
	}, [strength]);

	const getStrengthColor = (score: number) => {
		if (score === 0) return "bg-border";
		if (score <= 1) return "bg-red-500";
		if (score <= 2) return "bg-orange-500";
		if (score === 3) return "bg-amber-500";
		return "bg-emerald-500";
	};

	const getStrengthText = (score: number) => {
		if (score === 0) return "";
		if (score <= 2) return "Weak";
		if (score === 3) return "Medium";
		return "";
	};

	return (
		<div>
			<div className="*:not-first:mt-2">
				<div className="relative">
					<Input
            id={id}
            name={name}
						className="pe-9"
						placeholder="Password"
						type={isVisible ? "text" : "password"}
						value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
						aria-describedby={`${id}-description`}
						required
					/>
					<Button
						className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
						type="button"
						onClick={toggleVisibility}
						aria-label={isVisible ? "Hide password" : "Show password"}
						aria-pressed={isVisible}
						aria-controls="password"
						variant="ghost"
					>
						{isVisible ? (
							<EyeOffIcon size={16} aria-hidden="true" />
						) : (
							<EyeIcon size={16} aria-hidden="true" />
						)}
					</Button>
				</div>
			</div>

			{/* Password strength indicator */}
			<div
				className="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
				role="progressbar"
				aria-valuenow={strengthScore}
				aria-valuemin={0}
				aria-valuemax={4}
				aria-label="Password strength"
			>
				<div
					className={`h-full ${getStrengthColor(
						strengthScore
					)} transition-all duration-500 ease-out`}
					style={{ width: `${(strengthScore / 4) * 100}%` }}
				></div>
			</div>

			{/* Password strength description */}
			<p
				id={`${id}-description`}
				className="text-foreground mb-2 text-xs font-medium"
			>
				{getStrengthText(strengthScore)}
			</p>

			{/* Password requirements list */}
			{/* {strengthScore <= 3 && (
				<ul className="space-y-1.5" aria-label="Password requirements">
					{strength.map((req, index) => (
						<li key={index} className="flex items-center gap-2">
							{req.met ? (
								<CheckIcon
									size={16}
									className="text-emerald-500"
									aria-hidden="true"
								/>
							) : (
								<XIcon
									size={16}
									className="text-muted-foreground/80"
									aria-hidden="true"
								/>
							)}
							<span
								className={`text-xs ${
									req.met ? "text-emerald-600" : "text-muted-foreground"
								}`}
							>
								{req.text}
								<span className="sr-only">
									{req.met ? " - Requirement met" : " - Requirement not met"}
								</span>
							</span>
						</li>
					))}
				</ul>
			)} */}
		</div>
	);
}
