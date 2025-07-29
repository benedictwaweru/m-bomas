import { Button } from "@/components/ui/button";

interface BannerProps {
  description: string;
  buttonName1: string;
  buttonName2: string | undefined;
}

export function Banner({ description, buttonName1, buttonName2 }: BannerProps) {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 inset-x-4` to the container element.
    <div className="bg-background z-50 rounded-md border px-4 py-3 shadow-lg">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <p className="text-sm">
          {description}
        </p>
        <div className="flex gap-2 max-md:flex-wrap">
          <Button size="sm">{buttonName1}</Button>
          {buttonName2 && <Button variant="outline" size="sm">{buttonName2}</Button>}
        </div>
      </div>
    </div>
  );
}
