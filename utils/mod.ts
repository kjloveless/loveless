import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDomain(hostname: string) {
  const domainParts = hostname?.split(".");
  if (domainParts?.length <= 2) {
    return { domain: hostname, subdomain: undefined };
  }

  const domain = `${domainParts[domainParts.length - 2]}${
    domainParts[domainParts.length - 1]
  }`;
  const subdomain = domainParts[0];
  return { domain, subdomain };
}
